import React, { useContext, useEffect } from 'react'
import { useMap } from "react-leaflet";
import MapContext from "../contexts/MapContext";

const Geolocation = () => {

    const map = useMap()
    const { state, dispatch } = useContext(MapContext)

    const getLocation = () => {
        console.log('getLocation')
        if(navigator.geolocation && state.geolocation) {
            console.log('on géolocalise')
            navigator.geolocation.getCurrentPosition((position) => {
                console.log('on positionne')
                console.log(position)
                map.flyTo([position.coords.latitude, position.coords.longitude])
            }, (error) => console.log(error) );
        }
    }

    useEffect(getLocation, [state.geolocation])

    return null
}

export default Geolocation