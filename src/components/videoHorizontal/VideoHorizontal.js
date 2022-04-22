import React, { useEffect, useState } from 'react'
import './_videoHorizontal.scss'
import {AiFillEye} from 'react-icons/ai';
import moment from 'moment';
import numeral from 'numeral';
import request from '../../api';
import { useNavigate } from 'react-router-dom';

const VideoHorizontal = ({video}) => {

  const {id, snippet:{channelId, channelTitle, title, publishedAt, thumbnails:{high},},}=video

  const navigate = useNavigate();

  const [views,setViews] = useState(null)
  const [duration,setDuration] = useState(null)
  const [channelIcon,setChannelIcon] = useState(null)


  const seconds = moment.duration(duration).asSeconds()
  const _duration = moment.utc(seconds*1000).format("mm:ss")

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

  const handleRelatedVideoClick = () =>{
    navigate(`/watch/${id.videoId}`)
  }

  const handleChannel=()=>{
    navigate(`/channel/${channelId}`)
  }
  
  return (
    <div className="videos">
      <div className="video__top" onClick={handleRelatedVideoClick}>
        <img src={high.url} alt=''/>
        <span>{_duration}</span>
      </div>
      <div className="video__channel">
        <img onClick={handleChannel} style={{width:'40px'}} src={channelIcon?.url} alt=''/>
        <p style={{fontSize:'1.1rem'}}>{title}</p> 
      </div>
        
      <div className="video__details">
        <span>
          <AiFillEye/> {numeral(views).format("0.a")} views
        </span>
          <span>• {moment(publishedAt).fromNow()}</span>
      </div>
      <div className='video__title'>
      {channelTitle}
      </div>
    </div>
  )
}

export default VideoHorizontal