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

import { API_HOST } from '../../env'
import axios from 'axios'

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
                defaultCenter={{lat: 26.874760, lng: 75.759070}}
            >
                { props &&
                  props.mapList &&
                  props.mapList.length ?
                    props.mapList.map(v => (
                        v && v.locationDetailList && v.locationDetailList.length && v.locationDetailList.map(loc => (
                                loc && loc.addressDetailList && loc.addressDetailList.map((item, i) => {
                            return (
                                <Marker
                                    position={{lat:item.latitude , lng: item.longitude}}
                                    onClick={props.onToggleOpen}
                                    key={i}
                                >
                                    { props.isOpen &&
                                        <InfoWindow onCloseClick={props.onToggleOpen}>
                                            <i className={'fa fa-user'}/>
                                        </InfoWindow>
                                    }
                                </Marker>
                            )
                          })
                      ))
                    ))
                  : null
                }

            </GoogleMap>
        )
    }
);

const ReactGoogleMaps = (props) => {
    const [ map, setMap ] = useState([])

    useEffect(() => {
        axios({
            url: `${API_HOST}mapDetail/getData`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: {},
            method: 'get'
        })
            .then(response => {
                setMap(response.data)
            })
            .catch(error => {
                return null
            })
    },[])

    return(
        <MapWithAMakredInfoWindow
            mapList={ map || [] }
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCD16lyRRADgCEM0WxceqKr68bq_THANws&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{height: `100%`}}/>}
            containerElement={<div style={{height: `400px`}}/>}
            mapElement={<div style={{height: `100%`}}/>}
        />
    )
};

export default enhance(ReactGoogleMaps);

