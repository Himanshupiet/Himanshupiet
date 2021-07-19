import { API_HOST } from '../env'
import axios from 'axios'


export const getAllGallery = () => {
    return dispatch => {
        const API_URL = `${API_HOST}gallery/getAllGalleryData`

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