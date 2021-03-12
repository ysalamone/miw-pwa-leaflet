import React, { useContext } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import MapContext from "../contexts/MapContext";
import ClickHandler from "./ClickHandler";
import Geolocation from "./Geolocation";

const Map = () => {

    const { state, dispatch } = useContext(MapContext)
    const markers = state.markers;

    return (
        <>
            <h1>Carte Leaflet</h1>
            <Link to="/markers">Gérer les marqueurs</Link> | <Link to="/info">Gérer mes infos</Link>
            <div>
                <input type="checkbox" id="geoloc" value={state.geolocation} onChange={() => dispatch({type: 'toggle_geoloc', data: {geoloc: !state.geolocation} })}/>
                <label htmlFor="geoloc">Activer la géolocalisation</label>
            </div>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <ClickHandler />
                <Geolocation />
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