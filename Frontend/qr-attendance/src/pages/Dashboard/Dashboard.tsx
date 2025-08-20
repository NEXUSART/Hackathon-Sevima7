import { useState } from 'react'
import { Box, Card, CardContent, Typography, TextField, Button, InputAdornment, IconButton, Grid } from '@mui/material'
import PersonalInfo from '../../components/molecules/PersonalInfo/PersonalInfo'
import MapsLocation from '../../components/molecules/MapsLocation/MapsLocation'

function Dashboard() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box>
        <PersonalInfo />
      </Box>
      <Box sx={{ flex: 1 }}>
        <MapsLocation />
      </Box>
    </Box>
  )
}

export default Dashboard
