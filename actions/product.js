import {
    GET_ALL_PRODUCT
} from './types'
import { API_HOST } from '../env'
import axios from 'axios'


export const getAllProduct = (id, authToken) => {
    return dispatch => {
        const API_URL = `${API_HOST}product/getAllProduct`

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
                dispatch({ type: GET_ALL_PRODUCT, payload: response.data })
            )
            .catch(error => {
                return error
            })
    }
}
