import {
    GET_ALL_BLOG_POST
} from './types'
import { API_HOST } from '../env'
import axios from 'axios'


export const getAllPost = (id, authToken) => {
    return dispatch => {
        const API_URL = `${API_HOST}blog/getAllBlogs`

        return axios({
            url: API_URL,
            headers: {
                'Content-Type': 'application/json',
                // Authorization: authToken
            },
            data: {},
            method: 'get'
        })
            .then(response =>
                dispatch({ type: GET_ALL_BLOG_POST, payload: response.data })
            )
            .catch(error => {
                return error
            })
    }
}