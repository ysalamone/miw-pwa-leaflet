import React, { useContext, useEffect } from 'react'
import { useMap } from "react-leaflet";
import MapContext from "../contexts/MapContext";

const Geolocation = () => {

    const map = useMap()
    const { state } = useContext(MapContext)

    const getLocation = () => {
        if(navigator.geolocation && state.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position)
                map.flyTo([position.coords.latitude, position.coords.longitude])
            });
        }
    }

    useEffect(getLocation, [state.geolocation])

    return null
}

export default Geolocation