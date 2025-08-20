import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {CssBaseline, ThemeProvider, createTheme} from '@mui/material'
import App from './App'

const queryClient = new QueryClient()
const them = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFD500',
    },
    secondary: {
      main: '#FF6F00',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={them}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
)