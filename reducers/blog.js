import {
    GET_ALL_BLOG_POST
} from '../actions/types'

const initialState = {
    blog: {}
}

function blog (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_BLOG_POST:
            return { ...state, blog: action.payload }
        default:
            return state
    }
}

export default blog
