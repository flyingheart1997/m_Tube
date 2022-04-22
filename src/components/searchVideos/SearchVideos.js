import moment from 'moment'
import React, { useEffect, useState } from 'react'
import {AiFillEye} from 'react-icons/ai';
import numeral from 'numeral';
import './_searchVideos.scss'
import { useNavigate } from 'react-router-dom';
import request from '../../api';

const SearchVideos = ({video}) => {

  const {id, snippet:{channelId, description, channelTitle, title, publishedAt, thumbnails:{high},},}=video

  const navigate = useNavigate();

  const isVideo = id.kind === 'youtube#video'
  const [duration,setDuration] = useState(null)
  const [views,setViews] = useState(null)
  const [channelIcon,setChannelIcon] = useState(null)

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: {items},
      } = await request('/videos',{
        params:{
          part: 'contentDetails,statistics',
          id:id.videoId,
        },
      })
      setDuration(items[0].contentDetails.duration)
      setViews(items[0].statistics.viewCount)
    }
    get_video_details()
  }, [id])

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: {items},
      } = await request('/channels',{
        params:{
          part: 'snippet',
          id:channelId,
        },
      })
      setChannelIcon(items[0].snippet.thumbnails.default);
    }
    get_channel_icon()
  }, [channelId])

  const seconds = moment.duration(duration).asSeconds()
  const _duration = moment.utc(seconds*1000).format("mm:ss")

  const handleVideoClick = () => {
    navigate(`/watch/${id.videoId}`)
  }

    const thumbnail = !isVideo && 'search__img-channel'
    const channeldescription = !isVideo && 'search__description-channel'
    const channeltitle = !isVideo && 'search__title-channel'

    const handleChannel=()=>{
      navigate(`/channel/${channelId}`)
    }

  return (
      <div className="search" >
        <div className="search__top">
          <img onClick={handleVideoClick} className={`search__img ${thumbnail}`} src={high.url} alt=''/>
          {
            isVideo && 
            <span>{_duration}</span>
          }
        </div>
        <div className='search__allDetails'>
          {
            isVideo &&
            <div className='search__title' onClick={handleVideoClick}>
              {title}
            </div>
          }
          {
            isVideo &&
            <div className="search__details">
              <span>
                <AiFillEye /> {numeral(views).format("0.a")} 
              </span>
              <span>• {moment(publishedAt).fromNow()}</span>
            </div>
          }
          <div className={`search__description ${channeldescription}`}>
            {description}
          </div>
          <div className="search__channel" onClick={handleChannel}>
            {
              isVideo &&
              <img onClick={handleChannel} src={channelIcon?.url} alt=''/>
            }
            <p onClick={handleChannel} className={`search__channel__title ${channeltitle}`}>{channelTitle}</p>
          </div>
        </div>
      </div>
  )
}

export default SearchVideos