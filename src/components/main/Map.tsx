import React from 'react'
import Map, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
function MapComponent() {
  return (
    <div className='mt-8'>
      <Map
        initialViewState={{
          longitude: 25.00217,
          latitude: 60.23485,
          zoom: 12,
        }}
        style={{ width: '100%', height: 400 }}
        mapStyle='mapbox://styles/mapbox/streets-v9'
        mapboxAccessToken={MAPBOX_TOKEN}>
        <Marker longitude={25.00217} latitude={60.23485} color='red' />
      </Map>
    </div>
  )
}

export default MapComponent
