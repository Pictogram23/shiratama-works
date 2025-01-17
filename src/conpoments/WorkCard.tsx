import {
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
import { getDownloadURL, getStorage, ref } from 'firebase/storage'

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

const styleModalContent = {
  width: '90%',
  margin: 'auto',
  height: '80%',
  overflow: 'auto',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&:-webkit-scrollbat': {
    display: 'none',
  },
}

export type WorkCardProps = {
  children?: React.ReactNode
  maxWidth?: string
  title: string
  date: string
  coverImage: string
  slug: string
}

export const WorkCard: React.FC<WorkCardProps> = ({
  children,
  maxWidth,
  title,
  date,
  coverImage,
  slug,
}) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const storage = getStorage()
  const reference = ref(storage, coverImage)

  getDownloadURL(reference).then((url) => {
    if (typeof document !== 'undefined') {
      const img = document.getElementById(slug)
      img.setAttribute('src', url)
    }
  })

  return (
    <>
      <Card sx={{ maxWidth: maxWidth, margin: 3 }} variant="outlined">
        <CardActionArea onClick={openModal}>
          <CardHeader title={title} subheader={date} />
          <CardMedia
            id={slug}
            component="img"
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
          <Box sx={{ textAlign: 'right', height: '10%' }}>
            <Tooltip title="Close" onClick={closeModal} placement="top-end">
              <IconButton>
                <CloseIcon htmlColor="white" sx={{ fontSize: 40 }} />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={styleModalContent}>{children}</Box>
        </Box>
      </Modal>
    </>
  )
}
