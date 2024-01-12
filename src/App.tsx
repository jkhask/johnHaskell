import Container from '@mui/joy/Container'
import CssBaseline from '@mui/joy/CssBaseline'
import Sheet from '@mui/joy/Sheet'
import Typography from '@mui/joy/Typography'
import { CssVarsProvider } from '@mui/joy/styles'
import MainCard, { MainCardProps } from './components/MainCard'

export default function App() {
  const cards: MainCardProps[] = [
    {
      title: 'Dev',
      imgUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159',
    },
    {
      title: 'Mix',
      imgUrl: 'https://images.unsplash.com/photo-1594623930572-300a3011d9ae',
    },
    {
      title: 'Shred',
      imgUrl: 'https://images.unsplash.com/photo-1418662589339-364ad47f98a2',
    },
    {
      title: 'Smash',
      imgUrl: 'https://images.unsplash.com/photo-1494666144702-70d86c6cf884',
    },
    {
      title: 'Home',
      imgUrl: 'https://images.unsplash.com/photo-1562762394-3acfba62a48e',
    },
    {
      title: 'Roots',
      imgUrl: 'https://images.unsplash.com/photo-1503152394-c571994fd383',
    },
  ]

  return (
    <CssVarsProvider defaultMode="dark">
      <CssBaseline />
      <Container
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 4,
        }}
      >
        <Typography
          level="h1"
          sx={{
            fontWeight: 'xl',
            fontSize: 'clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)',
            mb: 4,
          }}
        >
          John Haskell
        </Typography>
        <Sheet
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            p: 4,
            justifyContent: 'center',
          }}
        >
          {cards.map(({ title, imgUrl }, i) => (
            <MainCard title={title} imgUrl={imgUrl} key={i}></MainCard>
          ))}
        </Sheet>
      </Container>
    </CssVarsProvider>
  )
}
