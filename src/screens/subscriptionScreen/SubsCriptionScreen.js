import './_subscriptionScreen.scss'
import React, { useEffect } from 'react'
import Subscription from '../../components/subscription/Subscription'
import { Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getSubscriptionChannel } from '../../redux/actions/videos.action'

const SubsCriptionScreen = () => {

 
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getSubscriptionChannel())
    },[dispatch])

    const {videos,loading} =useSelector(state=>state.subscriptionChannel)

  return (
    <div>
        <Col>
        {
          !loading ? (
              videos?.map((video) => 
                  <Subscription video={video} key= {video.id}/>
              )
          ):null
        }
        </Col>
    </div>
  )
}

export default SubsCriptionScreen