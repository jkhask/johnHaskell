import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import CardCover from '@mui/joy/CardCover'
import Typography from '@mui/joy/Typography'

export interface MainCardProps {
  title: string
  imgUrl: string
  width?: number
}

export default function MainCard({
  title,
  imgUrl,
  width = 320,
}: MainCardProps) {
  return (
    <Card color="neutral" variant="outlined" sx={{ height: 280, width }}>
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
        <Typography level="title-lg" textColor="#fff">
          {title}
        </Typography>
      </CardContent>
    </Card>
  )
}
