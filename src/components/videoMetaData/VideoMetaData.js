import React, { useEffect, useState } from 'react'
import './_videoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral'
import {MdThumbUp,MdQueue,MdThumbDown,MdGetApp} from 'react-icons/md'
import {IoMdShareAlt,IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { checkSubscriptionStatus, getChannelDetails } from '../../redux/actions/channel.action'
import Model from '../model/Model'
import DownloadModel from '../model/DownloadModel'
import { useNavigate } from 'react-router-dom'


const VideoMetaData = ({video:{snippet,statistics},videoId}) => {

  const [showMoreText, setShowMoreText] = useState(false)

  const {channelId,channelTitle,title,publishedAt,description}=snippet
  const {viewCount,likeCount,dislikeCount}=statistics

  const dispatch=useDispatch()
  const {snippet:channelSnippet,statistics:channelStatistics} = useSelector(state=>state.channelDetails.channel)
  const subscriptionStatus = useSelector(state=>state.channelDetails.subscriptionStatus)

  useEffect(()=>{
    dispatch(getChannelDetails(channelId))
    dispatch(checkSubscriptionStatus(channelId))
  },[dispatch,channelId])

   const [showModel, setShowModel] = useState(false)
   const [showDownloadModel, setShowDownloadModel] = useState(false)
   const navigate = useNavigate();

   const openModel = () =>{
     setShowModel(!showModel)
   }

    const openDownloadModel = () =>{
     setShowDownloadModel(!showDownloadModel)
    }

    const handleChannel=()=>{
      navigate(`/channel/${channelId}`)
    }

  return (
    <div className="videoMetaData py-3 ">
      <div className="videoMetaData__top">
        <h5 style={{color:"#FFF",fontSize:'17px'}}>{title}</h5>
        <div className='d-flex align-items-center pt-.1 gap-2'>
          <h4 style={{fontSize:'13px'}}> {numeral(viewCount).format("0.a")} views</h4> 
          <h4 style={{fontSize:'13px'}}>• {moment(publishedAt).fromNow()}</h4>
        </div>
          
        <div className='icons d-flex justify-content-between align-items-center py-2 px-2' >
          <div className='d-flex gap-1'><MdThumbUp size={26} />{numeral(likeCount).format("0.a")}</div>
          <div className='d-flex gap-1'><MdThumbDown size={26} />{numeral(dislikeCount).format("0.a")?numeral(dislikeCount).format("0,a"):''}</div>
          <div className='d-flex gap-1'><MdQueue size={26} /><span>SAVE</span></div>



          <div className='d-flex gap-1' onClick={openModel}>
            <IoMdShareAlt size={26} /><span>SHARE</span>
            <Model showModel={showModel} setShowModel={setShowModel} />
          </div>



          <div className='d-flex gap-1' onClick={openDownloadModel}><MdGetApp size={26}  /><span>DOWNLOAD</span></div>
          <DownloadModel showDownloadModel={showDownloadModel} setShowDownloadModel={setShowDownloadModel} />
        </div>
      </div>
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 ">
        <div className='d-flex gap-2' style={{cursor:'pointer'}}>
          <img
            onClick={handleChannel}
            src={channelSnippet?.thumbnails?.default?.url}
            alt=''
            className='rounded-circle mr-3' />
          <div className='d-flex flex-column py-1'>
            <span style={{color:"#FFF",fontSize:'15px',letterSpacing:'.5px'}}>{channelTitle}</span>
            <span style={{fontSize: '12px', marginTop:'-4px',paddingLeft:'1px',letterSpacing:'.5px'}}>{numeral(channelStatistics?.subscriberCount).format("0.a")} Subscribers</span>
          </div>
        </div>
        <button
          className={`${subscriptionStatus && 'btn-gray'}`}>
          {subscriptionStatus?'SUBSCRIBED':'SUBSCRIBE'}
        </button>
      </div>
      <div className="videoMetaData__description align-items-center d-flex justify-content-between px-2" >
        <p style={{fontSize:'18px'}}>Desriptions...</p>
        <p onClick={()=>setShowMoreText(!showMoreText)}>{showMoreText? <IoIosArrowUp size={20}/>:<IoIosArrowDown size={20}/>}</p> 
      </div>
        <div className='description'>
          {
            showMoreText && <p>{description}
            </p> 
          }
        </div>
    </div>
  )
}

export default VideoMetaData