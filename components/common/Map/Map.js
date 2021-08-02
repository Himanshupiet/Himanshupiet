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

import { Col, Row, Container  } from 'react-bootstrap'

import GoogleSuggest from './LocationSearch'

import { API_HOST } from '../../../env'
import axios from 'axios'
import mapStyle from './Map.module.css'

 const enhance = _.identity;

const MapWithAMakredInfoWindow = compose(
    withStateHandlers(() => ({
    }), {

    }),
    withScriptjs,
    withGoogleMap
 )(props => {
    const [ mapLists, setMapLists ] = useState([])

    useEffect(() => {
        setMapLists(props.mapList)
    },[props.mapList])

    const onToggleOpen = (item, loc, v ) => {
        let listArr = mapLists.map(type => {
            if(type.type == v.type) {
                return {
                    ...type,
                    locationDetailList:type.locationDetailList.map(c => {
                     if(c.location == loc.location){
                         return{
                             ...c,
                             addressDetailList:c && c.addressDetailList && c.addressDetailList.length && c.addressDetailList.map(cor => {
                                 if(cor.companyName == item.companyName){
                                   return{
                                       ...cor,
                                       isOpen:!cor.isOpen
                                   }
                                 }else{
                                     return{
                                         ...cor
                                     }
                                 }
                             })
                         }

                     }else{
                         return{
                             ...c
                         }
                     }
                   })
                }
            }else{
                return{
                    ...type
                }
            }

        })
        setMapLists(listArr)
    }

    return(
            <GoogleMap
                defaultZoom={1}
                defaultCenter={{lat: 26.874760, lng: 75.759070}}
            >
                { mapLists &&
                   mapLists.length ?
                    mapLists.map(v => (
                        v &&
                        v.locationDetailList &&
                        v.locationDetailList.length &&
                        v.locationDetailList.map(loc => (
                            loc &&
                            loc.addressDetailList &&
                            loc.addressDetailList.map((item, i) => {
                            return (
                                <Marker
                                    position={{
                                        lat:item.latitude ,
                                        lng: item.longitude
                                    }}
                                    onClick={() => onToggleOpen(item, loc, v)}
                                    key={i}
                                    icon={
                                         v.type.toLowerCase() == 'rep' ?
                                        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/Map/marker-icon-green.png` :
                                        ( v.type.toLowerCase() == 'dealer' ) ?
                                        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/Map/marker-icon-blue.png` :
                                        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/Map/marker-icon-red.png`

                                    }
                                >
                                    { item.isOpen &&
                                        <InfoWindow onCloseClick={() => onToggleOpen(item, loc, v)}>
                                            <div className={mapStyle.info_box_outer}>
                                                <p>
                                                    <strong>
                                                    { 
                                                        (v.type.toLowerCase() == 'rep')
                                                        ? "Rep" 
                                                        : (v.type.toLowerCase() == 'dealer')
                                                        ? 'Dealer' 
                                                        : 'Service Agent'
                                                    }
                                                    </strong>
                                                </p>
                                                <p>
                                                    <strong>{item.companyName}</strong>
                                                    <br/>{item.address}
                                                    <br/><a href={item.websiteUrl} target="_blank" rel="external nofollow">{item.websiteUrl}</a>
                                                    <br/>{item.mobileNumber}
                                                </p>
                                            </div>
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
    const [ mapList, setMapList ] = useState([])
    const [ list, setList ] = useState([])
    const [ serviceType, setServiceType ] = useState('All')

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
                let locArr = response.data.map(v => {
                    return {
                        ...v,
                        locationDetailList: v &&
                            v.locationDetailList &&
                            v.locationDetailList.length &&
                            v.locationDetailList.map(loc => {
                                    return {
                                        ...loc,
                                        addressDetailList: loc &&
                                            loc.addressDetailList &&
                                            loc.addressDetailList.map((item, i) => {
                                                return {
                                                    ...item,
                                                    isOpen: false
                                                }
                                            })
                                    }
                                }
                            )
                        }
                   }
                )
                setMapList(locArr)
                setList(locArr)
            })
            .catch(error => {
                return null
            })
    },[])

    useEffect(() => {
        if (serviceType == 'All') {
            setMapList(list)
        } else {
          let filterMapList = list.filter(val => val.type == serviceType)
          setMapList(filterMapList)
        }
    },[serviceType])

    return(
        <Container className={'mt-5'}>
            <Row>
                <Col md={4}>
                    <label>Search By Address</label>
                    <GoogleSuggest/>
                </Col>
                <Col md={4}>
                    <label>View Map By Service Type</label>
                    <select onChange={(e) => setServiceType(e.target.value)}>
                        <option value={ 'All' }>All Service Types</option>
                        { list.map((val, i) => {
                            return(
                                <>
                                   <option value={ val.type } key={i}>
                                       { val.type }
                                   </option>
                                </>
                             )
                           })
                        }
                    </select>
                </Col>
                <Col md={4}>
                    <Row className={'mt-4'} style={{
                        textAlign: 'center'
                    }}>
                        {
                            list.map((val, i) => {
                                return(
                                    <Col md={4} key={i} style={{fontSize:'18px', display: 'grid'}}>
                                        <i className={'fa fa-map-marker '}
                                           style={{color:
                                               val.type.toLowerCase() === 'rep' ?
                                               '#00A300':
                                                val.type.toLowerCase() === 'dealer' ?
                                                '#1e7ba6':
                                                '#e31422',
                                                 fontSize: '26px'
                                           }}
                                        />
                                        {val.type}
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Col>
            </Row>
            <MapWithAMakredInfoWindow
                mapList={ mapList || [] }
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCD16lyRRADgCEM0WxceqKr68bq_THANws&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: `500px`}}/>}
                mapElement={<div style={{height: `100%`}}/>}
            />
        </Container>
    )
};

export default enhance(ReactGoogleMaps);

