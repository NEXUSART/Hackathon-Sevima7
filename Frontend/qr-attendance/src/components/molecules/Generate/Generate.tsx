import React from 'react'
import { Box, Button } from '@mui/material'
import styles from './Generate.module.scss'

function Generate() {
  return (
    <Box className={styles['button-generate']}>
      <Button variant="contained" color="primary" fullWidth>
        Generate QR
      </Button>
    </Box>
  )
}

export default Generate