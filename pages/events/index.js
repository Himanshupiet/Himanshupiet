import React from 'react'
import Head from '../../components/common/Head'
import EventsPage from "../../components/Events_Page/events";


const Events = () => {
    return (
        <>
            <Head
                title='>Marra Forni Events - MarraForni'
                description='Private and Hands-on DemonstrationsOur #NoMarraNoParty is an excellent, straight to the point description of what to expect at a Marra Forni booth.You can'
                canonical='events'
            />
            <EventsPage/>
        </>
    )
}
export default Events