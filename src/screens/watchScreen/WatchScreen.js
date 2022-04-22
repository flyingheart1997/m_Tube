import React, {useEffect} from 'react'
import { Col,  Row, } from 'react-bootstrap'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import Comments from '../../components/comments/Comments'
import './watchScreen.scss'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { getRelatedVideos, getVideoById, } from '../../redux/actions/videos.action'


const WatchScreen = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getVideoById(id))
        dispatch(getRelatedVideos(id))
    }, [dispatch,id])
    const {video, loading} = useSelector(state=>state.selectedVideo)
    const {videos, loading:relatedVideosLoading} = useSelector(state=>state.relatedVideos)


    return (
        <Row>
            <Col lg={8}>
                <div className='watchScreen__player'>
                    <iframe
                        src={`https://www.youtube.com/embed/${id}`}
                        frameBorder='0'
                        title={video?.snippet?.title}
                        allowFullScreen
                        width='100%'
                        height='100%'
                    ></iframe>
                </div>
                {
                    !loading ? <VideoMetaData video={video} videoId={id}/> : null
                }
                    <Comments totalComments={video?.statistics?.commentCount} videoId={id}/>
            </Col>

            <Col lg={4} >
                <Row >
                {!relatedVideosLoading && videos?.filter(video=>video.snippet).map((video) => (
                    <Col md={4} lg={12} sm={6}>
                    <VideoHorizontal video={video} key={video.id.videoId} />
                    </Col>
                ))}
                </Row>
            </Col>
            
        </Row>
    )
}

export default WatchScreen