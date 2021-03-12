import { useContext, useEffect } from 'react'
import { useMap } from "react-leaflet";
import MapContext from "../contexts/MapContext";

const Geolocation = () => {

    const map = useMap()
    const { state } = useContext(MapContext)

    const getLocation = () => {
        if(navigator.geolocation && state.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                map.flyTo([position.coords.latitude, position.coords.longitude])
            });
        }
    }

    useEffect(getLocation, [map, state.geolocation])

    return null
}

export default Geolocation