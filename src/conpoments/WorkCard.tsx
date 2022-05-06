import { Card, CardActionArea, makeStyles } from '@mui/material'

export type WorkCardProps = {
  children?: React.ReactNode
  maxWidth?: string
}

export const WorkCard: React.FC<WorkCardProps> = (prop) => {
  return (
    <>
      <Card sx={{ maxWidth: prop.maxWidth, margin: 3 }} variant="outlined">
        <CardActionArea>{prop.children}</CardActionArea>
      </Card>
    </>
  )
}
