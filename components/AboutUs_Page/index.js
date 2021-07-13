import React, {useEffect, useState} from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import Timelines from './Timelines/Timelines'
import OurTeam from './OurTeam/OurTeam'
import axios from "axios";
import {API_HOST} from "../../env";

const AboutUsMain = (props) => {
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get(`${API_HOST}api/user/getAllUsers`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res.status) {
                setUser(res.data.result)
            }
        }).catch((error) => {

        })
    }, [])
    return (
        <>
            <Header/>
            <Timelines/>
            <OurTeam userData={user}/>
            <Footer/>
        </>
    )

}

export default AboutUsMain