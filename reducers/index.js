import { combineReducers } from 'redux'
import product from'./product'
import blog from "./blog";

export const rootReducer = combineReducers({
    product,
    blog
})
