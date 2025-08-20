import { useState } from 'react'
import { Box, Card, CardContent, Typography, TextField, Button, InputAdornment, IconButton, Grid } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.scss'

export default function Login() {
  const [password, setPassword] = useState(false)
  const [form, setForm] = useState({ username: '', password: '' })
  const navigate = useNavigate()

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [field]: event.target.value,
    })
  }

  const handleLogin = () => {
    navigate('/dashboard')
  }

  return (
    <Box className={styles['login-container']}>
      <Card className={styles['card']}>
        <CardContent className={styles['card-content']}>
          <Box textAlign="center" mt={5}>
            <Typography variant="h5" fontWeight="bold" mb={7}>
              LOGIN
            </Typography>
            <Grid>
              <Box className={styles['field-user']}>
                <TextField
                  label="Username"
                  type="username"
                  value={form.username}
                  fullWidth
                  onChange={handleChange('username')}
                />
              </Box>
              <Box className={styles['field-pass']}>
                <TextField
                  label="Password"
                  type={password ? 'text' : 'password'}
                  value={form.password}
                  onChange={handleChange('password')}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setPassword(!password)} edge="end">
                          {password ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Button variant="contained" fullWidth className={styles['button-login']} onClick={handleLogin}>
                Login
              </Button>
              <Typography className={styles['button-forgot']}>Lupa password?</Typography>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
