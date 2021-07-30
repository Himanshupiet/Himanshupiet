import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { compose, withStateHandlers } from 'recompose'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
} from 'react-google-maps'

 const enhance = _.identity;

const MapWithAMakredInfoWindow = compose(
    withStateHandlers(() => ({
        isOpen: false,
    }), {
        onToggleOpen: ({ isOpen }) => () => ({
            isOpen: !isOpen,
        })
    }),
    withScriptjs,
    withGoogleMap
 )(props => {
    return(
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{lat: -34.397, lng: 150.644}}
            >
                <Marker
                    position={{lat: -34.397, lng: 150.644}}
                    onClick={props.onToggleOpen}
                >
                    {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
                        <i className={'fa fa-user'}/>
                    </InfoWindow>}
                </Marker>
            </GoogleMap>
    )
    }
);

const ReactGoogleMaps = (props) => {
    const [ map, setMap ] = useState([{name:'fff'}])

    useEffect(() => {

    },[])

    return(
        <MapWithAMakredInfoWindow
            map={ map }
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCD16lyRRADgCEM0WxceqKr68bq_THANws&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{height: `100%`}}/>}
            containerElement={<div style={{height: `400px`}}/>}
            mapElement={<div style={{height: `100%`}}/>}
        />
    )
};

export default enhance(ReactGoogleMaps);