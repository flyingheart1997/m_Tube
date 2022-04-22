import './_comment.scss'

import React from 'react'
import moment from 'moment'
import { Navigate } from 'react-router-dom'

const Comment = ({comment}) => {
    
    const {authorDisplayName, authorProfileImageUrl, authorChannelUrl, publishedAt, textDisplay}=comment
    const handleCommentClick = () =>{
        Navigate(authorChannelUrl)
      }

    
  return (
    <div className='comment'>
        <div className='comment_info'>
            <img
                src={ authorProfileImageUrl }
                alt=''
                className='rounded-circle mr-3'
                style={{
                    height: '40px'
                }}
            />
            <div className='user__comment'>
                <h6 onClick={handleCommentClick}>{authorDisplayName}</h6> 
                <p>{moment(publishedAt).fromNow()}.</p>
                <h4>{textDisplay}</h4>
            </div>
        </div>
    </div>
  )
}

export default Comment