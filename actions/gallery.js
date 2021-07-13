import { API_HOST } from '../env'
import axios from 'axios'


export const getAllGalleryByProductType = () => {
    return dispatch => {
        const API_URL = `${API_HOST}gallery/getGalleryByProductType`

        return axios({
            url: API_URL,
            headers: {
                'Content-Type': 'application/json',
            },
            data: {},
            method: 'get'
        })
            .then(response =>  response.data)
            .catch(error => {
                return error
            })
    }
}