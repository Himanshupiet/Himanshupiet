import React from 'react'
import Head from '../components/common/Head'
import {Col, Container, Row, Accordion, Card} from 'react-bootstrap'


const Custom404 = (props) => {
    return (
        <>
            <Head
                title='404 Page'
                description='Error Page'
            />
            <Container>
                <Row>
                    <Col md={6}>
                        <div className='text-center main'>
                            <h1>404</h1>
                            <h3>PAGE NOT FOUND</h3>
                            <p>
                                Sorry can't find the page you are looking for click Here to come
                                back to home page.
                            </p>
                            <button className="btn btn-primary">Back Home</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default Custom404