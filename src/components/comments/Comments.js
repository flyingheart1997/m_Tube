import React, { useEffect, useState } from 'react'
import './_comments.scss'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
import Comment from '../comment/Comment'
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, getCommentDetails } from '../../redux/actions/comment.action';

const Comments = ({totalComments,videoId}) => {

  const user = useSelector(state=>state.auth.user)

  const [showComments, setShowComments] = useState(false)
  const [showButton, setShowButton] = useState(false)

  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });

  const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCommentDetails(videoId))
    }, [dispatch,videoId])


  useEffect(() => {
    if(!isMobile){
      setShowComments(true)
    }else{
      setShowComments(false)
    }
  }, [isMobile])

  const comments = useSelector(state=>state.commentDetails.comment)
  const _comments = comments?.map(comment=>comment.snippet.topLevelComment.snippet)

  

  const [text,setText] = useState('')
  const handleComment = (e) =>{
    e.preventDefault()
    if(text.length===0) return

    dispatch(addComment(videoId,text))
    setText('')
  }

  return (
    <div className='comments'>
      <div className='comments__icon align-items-center d-flex justify-content-between px-2' style={!showComments ? {borderBottom:'1px solid #4c4c4c'}:{border:'none'}} >
        <p style={{fontSize:'18px'}}>Comments...</p>
        <p onClick={() => setShowComments(!showComments)}>{showComments ? <IoIosArrowUp seed={10} /> : <IoIosArrowDown size={20} />}</p> 
      </div>
      <div>
        {showComments && 
          <div className='comments__details px-1'>
            <p style={{color:'#fff',paddingLeft:'10px', fontSize:'16px'}}>{totalComments} Comments</p>
            <div className='comments__form d-flex w-100 my-2' style={{gap:'5px', paddingBottom:'20px'}}>
              <img
                src={user?.photoURL}
                alt=''
                className='rounded-circle mr-3'
                style={{
                  height: '40px'
                }}
              />
              <form onSubmit={handleComment} className='d-flex flex-grow-1'>
                <input
                  type='text'
                  className='flex-grow-1'
                  placeholder=' Write a comment...'
                  style={{backgroundColor:'transparent', border:'none',borderBottom:'.5px solid #4c4c4c'}}
                  onClick={() => setShowButton(!showButton)}
                  value={text}
                  onChange={e=>setText(e.target.value)}
                />
                {showButton && <button className='border-0 '>Comment</button>}
              </form>
            </div>
            <div className='comments__list py-2'>
              {_comments?.map((comment, i)=>(
                <Comment comment={comment} key={i}/>
              ))}
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Comments