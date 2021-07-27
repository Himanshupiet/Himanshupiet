import React from 'react'
import HighLightStyle from './HighLight.module.css'
import ScrollAnimation from 'react-animate-on-scroll'
import {Col, Container, Row} from 'react-bootstrap'
import AuthenticStyle from "../AuthenticSection/Authentic.module.css";

const HighLight = ({highlightData, setByboShow}) => {
    let background_color = highlightData.backgroundImage.IsImage ? {backgroundImage: `url(${highlightData.backgroundImage.imagePath})`} : {
        backgroundColor: '#f6f7fb!important',
        padding: '55px'
    };

    return (
        <section className={`${AuthenticStyle.main_data}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center">
                            <h1>Customized Handcrafted Brick Oven, Add Your Logo</h1>
                            <p>Premium and Beautiful Tile Options.</p>
                            <button className="btn btn-danger main-btn mt-2" onClick={() => setByboShow(true)}>
                                Build Your Own Oven
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default HighLight