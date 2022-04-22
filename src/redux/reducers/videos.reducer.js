import { CHANNEL_VIDEOS_FAIL, CHANNEL_VIDEOS_REQUEST, CHANNEL_VIDEOS_SUCCESS, HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, RELATED_VIDEO_FAIL, RELATED_VIDEO_REQUEST, RELATED_VIDEO_SUCCESS, SEARCH_VIDEO_FAIL, SEARCH_VIDEO_REQUEST, SEARCH_VIDEO_SUCCESS, SELECTED_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS, SUBSCRIPTION_CHANNEL_FAIL, SUBSCRIPTION_CHANNEL_REQUEST, SUBSCRIPTION_CHANNEL_SUCCESS } from "../actionType"


export const homeVideosReducers = (state = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: 'All',
    },
    action) => {
        
    const { type, payload } = action
    switch (type) {
        case HOME_VIDEOS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case HOME_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: state.activeCategory === payload.category?[...state.videos,...payload.videos]:payload.videos,
                loading: false,
                nextPageToken: payload.nextPageToken,
                activeCategory: payload.category,
            }
        case HOME_VIDEOS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            }

        default:
            return state
    }
}


export const selectedVideoReducers = (state = {
    video: null,
    loading: true,
    },
    action) => {
        const { type, payload } = action
    switch (type) {
        case SELECTED_VIDEO_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case SELECTED_VIDEO_SUCCESS:
            return {
                ...state,
                video: payload,
                loading: false,
            }
        case SELECTED_VIDEO_FAIL:
            return {
                ...state,
                video: null,
                loading: false,
                error: payload,
            }

        default:
            return state
    }
}


export const relatedVideoReducer = (state = {
    videos: [],
    loading: true,
    
    },
    action) => {
        
    const { type, payload } = action
    switch (type) {
        case RELATED_VIDEO_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case RELATED_VIDEO_SUCCESS:
            return {
                ...state,
                videos: payload,
                loading: false,
                
            }
        case RELATED_VIDEO_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            }

        default:
            return state
    }
}


export const searchVideoReducer = (state = {
    videos: [],
    loading: true,
    },
    action) => {
        
    const { type, payload } = action
    switch (type) {
        case SEARCH_VIDEO_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case SEARCH_VIDEO_SUCCESS:
            return {
                ...state,
                videos: payload,
                loading: false,
                
            }
        case SEARCH_VIDEO_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            }

        default:
            return state
    }
}

export const subscriptionChannelReducer = (state = {
    videos: [],
    loading: true,
    },
    action) => {
        
    const { type, payload } = action
    switch (type) {
        case SUBSCRIPTION_CHANNEL_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case SUBSCRIPTION_CHANNEL_SUCCESS:
            return {
                ...state,
                videos: payload,
                loading: false,
                
            }
        case SUBSCRIPTION_CHANNEL_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            }

        default:
            return state
    }
}



export const channelVideosReducers = (state = {
    videos: [],
    loading: false,
    nextPageToken: null,
    },
    action) => {
        
    const { type, payload } = action
    switch (type) {
        case CHANNEL_VIDEOS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CHANNEL_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: payload.videos,
                loading: false,
                nextPageToken: payload.nextPageToken,
            }
        case CHANNEL_VIDEOS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            }

        default:
            return state
    }
}