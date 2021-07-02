import React from 'react'
import Head from '../../components/common/Head'
import EventsPage from "../../components/Events_Page/events";


const Events = () => {
    return (
        <>
            <Head
                title='Events - MarraForni'
                description='MARRA FORNI Events'
            />
            <EventsPage/>
        </>
    )
}
export default Events