import React, {useEffect, useState} from 'react'
import Head from '../../../components/common/Head'
import RestaurentMain from '../../../components/RestaurentSingle'
import {useRouter} from "next/router";
import axios from "axios";
import {API_HOST} from "../../../env";

const RestaurentSingle = (props) => {
    const router = useRouter()
    const {id} = router.query
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`${API_HOST}gallery/getGalleryById?id=` + id, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res.status) {
                setData(res.data)
            }
        }).catch((error) => {

        })
    }, [id])

    return (
        <>
            <Head
                title={`${data.title}- MarraForni`}
                description={data.organisationDescription}
                canonical={`gallery/${data.id}`}
            />
            <RestaurentMain/>
        </>
    )

}

export default RestaurentSingle