import request from "../../api"
import { COMMENT_DETAILS_FAIL, COMMENT_DETAILS_REQUEST, COMMENT_DETAILS_SUCCESS, CREATE_COMMENT_FAIL, CREATE_COMMENT_SUCCESS } from "../actionType"

export const getCommentDetails = (id) => async (dispatch,getState) => {
    try {
        dispatch({
            type: COMMENT_DETAILS_REQUEST,
        })
        const {data} = await request('/commentThreads', {
            params: {
                part: 'snippet',
                videoId:id,
                maxResults: '100',
            }
        })
        dispatch({
            type: COMMENT_DETAILS_SUCCESS,
            payload: data.items,
            
        })
        
    } catch (error) {
        dispatch({
            type: COMMENT_DETAILS_FAIL,
            payload: error.message,
        })
        
    }
}



export const addComment = (id,text) => async (dispatch,getState) => {
    try {
        const obj = {
            snippet:{
                videoId:id,
                topLevelComment:{
                    snippet:{
                        textOriginal:text
                    },
                },
            },
        }
        await request.post('/commentThreads',obj, {
            params: {
                part: 'snippet',
                
            },
            headers:{
                Authorization: `Bearer ${getState().auth.accessToken}`,
            },
        })
        
        dispatch({
            type: CREATE_COMMENT_SUCCESS,
            
        })
        setTimeout(()=>dispatch(getCommentDetails(id)),3000)
        
        
    } catch (error) {
        dispatch({
            type: CREATE_COMMENT_FAIL,
            payload: error.message,
        })
        
    }
}