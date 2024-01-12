import { Typography } from '@mui/joy'
import Container from '@mui/joy/Container'
import CssBaseline from '@mui/joy/CssBaseline'
import { CssVarsProvider } from '@mui/joy/styles'

export default function App() {
  return (
    <CssVarsProvider defaultMode="dark">
      <CssBaseline />
      <Container
        sx={theme => ({
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 4,
        })}>
        <Typography
          level="h1"
          fontWeight="xl"
          fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)">
          John Haskell
        </Typography>
      </Container>
    </CssVarsProvider>
  )
}
