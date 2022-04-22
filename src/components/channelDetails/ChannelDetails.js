import React, { useEffect, useState } from 'react'
import { useNavigate, } from 'react-router-dom';
import {AiFillEye} from 'react-icons/ai';
import moment from 'moment';
import numeral from 'numeral';
import './_channelDetails.scss'
import request from '../../api';

const ChannelDetails = ({video}) => {
    const {snippet:{channelId,channelTitle,title,publishedAt,thumbnails:{high},},contentDetails:{videoId},}=video
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
          id:videoId,
        },
      })
      setDuration(items[0].contentDetails.duration)
      setViews(items[0].statistics.viewCount)
    }
    get_video_details()
  }, [videoId])

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

    const navigate = useNavigate();

    const handleVideoClick = () =>{
        navigate(`/watch/${videoId}`)
    }


  return (
    <div className="channelVideo" onClick={handleVideoClick}>
      <div className="channelVideo__top">
        <img src={high.url} alt='' />
        <span>{_duration}</span>
      </div>
      <div className="channelVideo__channel">
        <img src={channelIcon?.url} alt='' />
        <p>{title}</p>
      </div>
      <div className="channelVideo__details">
        <span>
          <AiFillEye /> {numeral(views).format("0.a")} views
        </span>
        <span>• {moment(publishedAt).fromNow()}</span>
      </div>
      <div className='channelVideo__title'>
        <p>{channelTitle}</p>
      </div>
    </div>
  )
}

export default ChannelDetails