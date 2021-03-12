import React, { useContext } from 'react'
import { useMapEvent } from "react-leaflet";
import MapContext from "../contexts/MapContext";

const ClickHandler = () => {

    const { dispatch } = useContext(MapContext)

    useMapEvent('mousedown',(e) => {
        console.log(e);
        dispatch({type: 'add_marker', data: {clicked: [e.latlng.lat, e.latlng.lng]} })
    })
    return null
}

export default ClickHandler