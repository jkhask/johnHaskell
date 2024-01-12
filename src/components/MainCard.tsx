import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import CardCover from '@mui/joy/CardCover'
import Link from '@mui/joy/Link'
import Typography from '@mui/joy/Typography'
import { useState } from 'react'

export interface MainCardProps {
  title: string
  imgUrl: string
  width?: number
  height?: number
}

export default function MainCard({
  title,
  imgUrl,
  width = 320,
  height = 280,
}: MainCardProps) {
  const [isHovering, setIsHovering] = useState(false)
  return (
    <Card
      color="neutral"
      variant="outlined"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      sx={theme => ({
        height,
        width,
        boxShadow: isHovering ? theme.shadow.lg : 'none',
        '--joy-shadowChannel': theme.vars.palette.primary.mainChannel,
        '--joy-shadowRing': 'inset 0 -3px 0 rgba(255 255 255 / 0.24)',
      })}
    >
      <CardCover>
        <img
          src={`${imgUrl}?auto=format&fit=crop&w=${width}"`}
          loading="lazy"
          alt={title}
        />
      </CardCover>

      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Link overlay underline="none" href="#" sx={{ color: 'text.tertiary' }}>
          <Typography level="title-lg" textColor="#fff">
            {title}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}
