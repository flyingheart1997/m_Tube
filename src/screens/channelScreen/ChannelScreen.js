import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import numeral from 'numeral'
import { checkSubscriptionStatus, getChannelDetails } from '../../redux/actions/channel.action'
import { Col, Row, Spinner } from 'react-bootstrap'
import ChannelDetails from '../../components/channelDetails/ChannelDetails'
import './_channelScreen.scss'
import { getChannelVideos } from '../../redux/actions/videos.action'
import InfiniteScroll from 'react-infinite-scroll-component'

const ChannelScreen = () => {

  const {channelId} = useParams()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getChannelDetails(channelId))
    dispatch(checkSubscriptionStatus(channelId))
  }, [dispatch, channelId])
    
  const { snippet, statistics } = useSelector(state => state.channelDetails.channel)
  const subscriptionStatus = useSelector(state => state.channelDetails.subscriptionStatus)
  
  useEffect(()=>{
    dispatch(getChannelVideos(channelId))
  },[dispatch,channelId])

  const {videos} =useSelector(state=>state.channelVideos)

  const fetchData = () =>{
    dispatch(getChannelVideos(channelId))
  }

  return (
    <div className='channel'>
      <div className="channel__detail d-flex justify-content-between align-items-center my-2 ">
        <div className='d-flex gap-4 justify-content-between'>
          <img
            src={snippet?.thumbnails?.default?.url}
            alt=''
            className='rounded-circle mr-3' />
          <div className='d-flex flex-column py-1'>
            <span className='span1' style={{ color: "#FFF", fontSize: '25px', letterSpacing: '.5px' }}>{snippet?.title}</span>
            <span className='span2' style={{ fontSize: '12px', marginTop: '-1px', paddingLeft: '1px', letterSpacing: '.5px' }}>{numeral(statistics?.subscriberCount).format("0.a")} Subscribers</span>
            <span className='span3' style={{ fontSize: '12px', marginTop: '-1px', paddingLeft: '1px', letterSpacing: '.5px' }}>{statistics?.videoCount} Videos</span>
          </div>
        </div>
        <button
          className={`${subscriptionStatus && 'btn-gray'}`}>
          {subscriptionStatus ? 'SUBSCRIBED' : 'SUBSCRIBE'}
        </button>
      </div>
      <br/>
      <Row className='channelContainer'>
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={
            <div><Spinner speed={2} /></div>
          } className='row'>
          {videos.map((video) => (
            <Col lg={3} md={4} sm={6}>
              <ChannelDetails video={video} key={video.id} />
            </Col>
          ))}
        </InfiniteScroll>
      </Row>
    </div>
  )
}

export default ChannelScreen