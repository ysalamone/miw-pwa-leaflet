import React, { useContext, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import ClickHandler from "./ClickHandler";
import MapContext from "../contexts/MapContext";

const Map = () => {

    const { state } = useContext(MapContext)
    const markers = state.markers;

    return (
        <>
            <h1>Carte Leaflet</h1>
            <Link to="/markers">Gérer les marqueurs</Link>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <ClickHandler />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.map((marker, index) => (
                    <Marker key={index} position={marker.latlng}>
                        <Popup>{index}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>
    )
}

export default Map