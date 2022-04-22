import './_subscription.scss'
import React, { useEffect } from 'react'
import numeral from 'numeral'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { checkSubscriptionStatus, getChannelDetails} from '../../redux/actions/channel.action'

const Subscription = ({video}) => {

    const {snippet:{resourceId:{channelId}, title,thumbnails},contentDetails:{totalItemCount},}=video

    const navigate = useNavigate();


    const dispatch=useDispatch()
    
    const {statistics:channelStatistics} = useSelector(state=>state.channelDetails.channel)
    const subscriptionStatus = useSelector(state=>state.channelDetails.subscriptionStatus)
    useEffect(()=>{
      dispatch(getChannelDetails(channelId))
      dispatch(checkSubscriptionStatus(channelId))
    },[dispatch,channelId])

    const handleSubChannel=()=>{
        navigate(`/channel/${channelId}`)
    }
    
    return (
        <div className='subsScreen__channel'>
            <div className="subsScreen__img d-flex justify-content-between align-items-center my-2 " >
              <div className='koushik d-flex gap-2'>
                    <img
                        src={thumbnails?.default?.url}
                        alt=''
                        className='rounded-circle mr-3' 
                        onClick={handleSubChannel}   
                    />
                    <div className='d-flex flex-column py-1'>
                        <h4 className='_spa' onClick={handleSubChannel} style={{ color: "#FFF", fontSize: '20px', letterSpacing: '.5px' }}>{title}</h4>
                        <span className='_span' style={{ fontSize: '15px', marginTop: '4px', paddingLeft: '1px', letterSpacing: '.5px' }}>{numeral(channelStatistics?.subscriberCount).format("0.a")} Subscribers</span>
                        <span className='_spans' style={{ fontSize: '15px', marginTop: '-1px', paddingLeft: '1px', letterSpacing: '.5px' }}>{totalItemCount} Videos</span>
                    </div>
              </div>
                <button
                    className={`${subscriptionStatus && 'btn-gray'}`}>
                    {subscriptionStatus ? 'SUBSCRIBED' : 'SUBSCRIBE'}
                </button>
            </div>
        </div>
    )
}

export default Subscription