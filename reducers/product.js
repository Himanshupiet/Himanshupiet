import {
    GET_ALL_PRODUCT
} from '../actions/types'

const initialState = {
    product: {}
}

function product (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return { ...state, product: action.payload }
        default:
            return state
    }
}

export default product
