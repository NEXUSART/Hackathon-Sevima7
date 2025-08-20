import React from 'react'
import { Box, Card, Typography } from '@mui/material'
import styles from './PersonalInfo.module.scss'

function PersonalInfo() {
  return (
    <Box className={styles['info-container']}>
      <Card className={styles['card-container']}>
        <Box className={styles['box-welcome']}>
          <Typography className={styles['text-welcome']}>Welcome Aboard!</Typography>
          <Typography className={styles['text-employee']}>Employee Self</Typography>
        </Box>
        <Box className={styles['box-info']}>
          <Typography className={styles['text-name']}>Galih Wicaksana</Typography>
          <Typography className={styles['text-position']}>Fullstack Developer</Typography>
        </Box>
      </Card>
    </Box>
  )
}

export default PersonalInfo