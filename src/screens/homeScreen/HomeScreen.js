import React, { useEffect } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Video from '../../components/video/Video';
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action';
import './_homeScreen.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import CategoriesBar from '../../components/categoriesBar/CategoriesBar';


const HomeScreen = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPopularVideos())
  },[dispatch])


  const {videos, activeCategory} = useSelector(state=>state.homeVideos)

  const fetchData = () =>{
    if(activeCategory === 'All')
    dispatch(getPopularVideos())
    else{
      dispatch(getVideosByCategory(activeCategory))
      
    }
  }

  return (
    <div className='home'>
      <CategoriesBar/>
      <br/>
      <Row className='homeContainer py-5'>
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={
            <div><Spinner speed={2} /></div>
          } className='row'>
          {
            videos.map((video,index ) => (
              <Col lg={3} md={4} sm={6} key={index}>
                <Video video={video} />
              </Col>
            ))}
        </InfiniteScroll>
      </Row>
    </div>
  )
}

export default HomeScreen