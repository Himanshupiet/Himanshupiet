import React from 'react'
import PageNotFound from '../components/common/PageNotFound/PageNotFound'
import Header from "../components/header/header";
import Styles from "../components/ThankYou/thankyou.module.css";
import {Col, Container, Row} from "react-bootstrap";
import Footer from "../components/footer/footer";
import Head from "../components/common/Head";

class Custom404Page extends React.Component {
    static async getInitialProps ({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : 404
        return { statusCode }
    }
    render () {
        return (
            <>
                <Head
                    title='Page Not Found - MarraForni'
                />
                <Header />
                <section className={Styles.section_outer} style={{background:'#fff'}}>
                    <Container fluid>
                        <PageNotFound/>
                    </Container>
                </section>
                <Footer />
            </>
        )
    }
}

export default Custom404Page;