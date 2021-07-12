import {
    GET_ALL_PRODUCT
} from './types'
import { API_HOST } from '../env'
import axios from 'axios'


export const getAllProduct = () => {
    return dispatch => {
        const API_URL = `${API_HOST}item/getAll`

        return axios({
            url: API_URL,
            headers: {
                'Content-Type': 'application/json',
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

export const getAllResourceData = () => {
    return dispatch => {
        const API_URL = `${API_HOST}product/getAllProduct`

        return axios({
            url: API_URL,
            headers: {
                'Content-Type': 'application/json',
            },
            data: {},
            method: 'get'
        })
            .then(response => {
                    return response.data
                }
            )
            .catch(error => {
                return error
            })
    }
}

export const getAllCaseStudy = (data) => {
    let queryParams = [];
    data && data.length && data.map(product => {
        product.cat.map(val => {
            queryParams.push(val)
        })
    })

    let params = new URLSearchParams();
    queryParams && queryParams.length && queryParams.map(query => {
        params.append('category', query.categoryName)
    })
    return dispatch => {
        const API_URL = `${API_HOST}case-study/getAllByLanguageAndCategoryName`

        return axios({
            url: API_URL,
            headers: {
                'Content-Type': 'application/json',
            },
            data: {},
            method: 'get',
            params: params
        })
            .then(response => {
                    return response.data
                }
            )
            .catch(error => {
                return error
            })
    }
}

export const getAllBlogForResource = (data) => {
    let queryParams = [];
    data && data.length && data.map(product => {
        product.cat.map(val => {
            queryParams.push(val)
        })
    })

    let params = new URLSearchParams();
    queryParams && queryParams.length && queryParams.map(query => {
       params.append('category', query.categoryName)
    })
    return dispatch => {
        const API_URL = `${API_HOST}blog/getByCategory`
        return axios({
            url: API_URL,
            headers: {
                'Content-Type': 'application/json',
            },
            data: {},
            method: 'get',
            params: params
        })
            .then(response => {
                    return response.data
                }
            )
            .catch(error => {
                return error
            })
    }
}
