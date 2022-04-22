import { COMMENT_DETAILS_FAIL, COMMENT_DETAILS_REQUEST, COMMENT_DETAILS_SUCCESS } from "../actionType"

export const commentDetailsReducer = (state = {
    comment: null,
    loading: true,
    },
    action) => {
        const { type, payload } = action
    switch (type) {
        case COMMENT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case COMMENT_DETAILS_SUCCESS:
            return {
                ...state,
                comment: payload,
                loading: false,
            }
        case COMMENT_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            }

        default:
            return state
        }
    }