import React, { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import SearchVideos from '../../components/searchVideos/SearchVideos'
import './_searchScreen.scss'
import { useParams } from 'react-router-dom'
import { getVideosBySearch } from '../../redux/actions/videos.action'


const SearchScreen = () => {

    const { query } = useParams()
 
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getVideosBySearch(query))
    },[dispatch,query])

    const {videos,loading} =useSelector(state=>state.searchVideos)
  
    return (
        <div className='searchScreen'>
            <Col>
                {
                    !loading ? (
                        videos?.map((video) => 
                            <SearchVideos video={video} key= {video.id}/>
                        )
                ):null
                }
            </Col>
        </div>
    )
}

export default SearchScreen