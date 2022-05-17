import {
  Avatar,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  IconButton,
  Modal,
  Tooltip,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'black',
  boxSizing: 'border-box',
  border: '2px solid yellow',
  width: '100%',
  maxWidth: '1200px',
  height: '100%',
  maxHeight: '800px',
}

export type WorkCardProps = {
  children?: React.ReactNode
  maxWidth?: string
  initial: string
  title: string
  date: string
  coverImage: string
  slug: string
}

export const WorkCard: React.FC<WorkCardProps> = ({
  children,
  maxWidth,
  initial,
  title,
  date,
  coverImage,
}) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Card sx={{ maxWidth: maxWidth, margin: 3 }} variant="outlined">
        <CardActionArea onClick={openModal}>
          <CardHeader
            avatar={<Avatar>{initial}</Avatar>}
            title={title}
            subheader={date}
          />
          <CardMedia
            component="img"
            image={`/img/${coverImage}`}
            sx={{
              objectFit: 'contain',
              aspectRatio: '16 / 9',
              backgroundColor: 'black',
            }}
          />
        </CardActionArea>
      </Card>
      <Modal open={modalIsOpen} onClose={closeModal}>
        <Box sx={styleModal}>
          <Box sx={{ textAlign: 'right' }}>
            <Tooltip title="Close" onClick={closeModal} placement="top-end">
              <IconButton>
                <CloseIcon htmlColor="white" sx={{ fontSize: 40 }} />
              </IconButton>
            </Tooltip>
          </Box>
          <Box
            sx={{
              width: '90%',
              margin: '0 auto',
              overflow: 'auto',
              height: '90%',
            }}
          >
            {children}
          </Box>
        </Box>
      </Modal>
    </>
  )
}
