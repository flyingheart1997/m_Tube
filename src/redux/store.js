import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {authReducer} from './reducers/auth.reducer'
import { channelDetailsReducer } from "./reducers/channel.reducer";
import { commentDetailsReducer } from "./reducers/comment.reducer";
import {channelVideosReducers, homeVideosReducers, relatedVideoReducer, searchVideoReducer, selectedVideoReducers, subscriptionChannelReducer} from './reducers/videos.reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideosReducers,
    selectedVideo: selectedVideoReducers,
    channelDetails: channelDetailsReducer,
    commentDetails: commentDetailsReducer,
    relatedVideos: relatedVideoReducer,
    searchVideos: searchVideoReducer,
    subscriptionChannel: subscriptionChannelReducer,
    channelVideos: channelVideosReducers,
})

const store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))

export default store