import React, { useContext } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { Link } from "react-router-dom";
import MapContext from "../contexts/MapContext";

const MarkersList = () => {

    const { state, dispatch } = useContext(MapContext);
    const markers = state.markers;

    return (
        <>
            <h1>Liste des marqueurs</h1>
            <Link to="/map">Retour à la carte</Link>
            <ul>
                {markers.map(marker => (
                    <li key={marker.id}>
                        Marqueur nº{marker.id}<br/>
                        {marker.latlng.toString()}<br/>
                        <MapContainer className="thumb-map" center={marker.latlng} zoom={16} scrollWheelZoom={false} attributionControl={false}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={marker.latlng}>
                            </Marker>
                        </MapContainer>
                        <button onClick={() => dispatch({type: 'delete_marker', data : { selected: marker.id } })}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MarkersList