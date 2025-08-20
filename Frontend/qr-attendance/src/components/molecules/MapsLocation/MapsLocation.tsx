import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Circle, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { Box, Typography, Card, TextField } from '@mui/material'
import Generate from '../Generate/Generate'
import styles from './MapsLocation.module.scss'

delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const RecenterMap = ({ center }: { center: [number, number] }) => {
  const map = useMap()
  useEffect(() => {
    map.setView(center, map.getZoom())
  }, [center, map])
  return null
}

const MapsLocation = () => {
  const [deviceLocation, setDeviceLocation] = useState<[number, number] | null>(null)
  const [markers] = useState([{ id: 1, position: [-6.2088, 106.8456], name: 'Jakarta' }])

  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords
          setDeviceLocation([latitude, longitude])
        },
        (err) => {
          console.error('Location Error:', err)
        },
        { enableHighAccuracy: true, maximumAge: 1000 },
      )
      return () => navigator.geolocation.clearWatch(watchId)
    }
  }, [])

  const defaultCenter: [number, number] = [-6.2088, 106.8456]
  const center = deviceLocation ?? defaultCenter

  return (
    <Box className={styles['box-container']}>
      <Card className={styles['card-container']}>
        <Box className={styles['text-title']}>
          <Typography fontWeight={600} fontSize="16px">
            Attendance
          </Typography>
        </Box>
        <Box className={styles['text-title']}>
          <Typography fontSize="12px">20 August 2025</Typography>
        </Box>
        <Box className={styles['map-wrapper']}>
          <MapContainer center={center} zoom={15} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((marker) => (
              <Marker key={marker.id} position={marker.position} />
            ))}
            {deviceLocation && (
              <>
                <Marker position={deviceLocation} />
                <Circle
                  center={deviceLocation}
                  radius={50}
                  pathOptions={{ color: 'red', fillColor: 'red', fillOpacity: 0.3 }}
                />
                <RecenterMap center={deviceLocation} />
              </>
            )}
          </MapContainer>
        </Box>
        <Box className={styles['text-title']}>
          <Typography fontWeight={600} fontSize="16px">
            Notes:
          </Typography>
        </Box>
        <Box className={styles['notes-input']}>
          <TextField
            fullWidth
            placeholder="Tulis catatan kehadiran di sini..."
            multiline
            minRows={3}
            variant="outlined"
          />
        </Box>
        <Generate/>
      </Card>
    </Box>
  )
}

export default MapsLocation
