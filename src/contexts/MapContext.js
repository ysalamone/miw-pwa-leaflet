import React from 'react'

const MapContext = React.createContext({markers: [], geolocation: false, info: null})

export default MapContext