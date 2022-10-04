import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import { useState } from 'react'
import {
  CodeComponent,
  ReactMarkdownNames,
} from 'react-markdown/lib/ast-to-react'

export const CustomImg: CodeComponent | ReactMarkdownNames = ({
  node,
  ...props
}) => {
  const [imgURL, setImgURL] = useState<string>()
  const storage = getStorage()
  const reference = ref(storage, node.properties.src as string)
  getDownloadURL(reference).then((url) => {
    setImgURL(url)
  })

  return (
    <a href={imgURL} data-lightbox="group">
      <img {...props} src={imgURL} />
    </a>
  )
}

export const CustomAudio: CodeComponent | ReactMarkdownNames = ({
  node,
  ...props
}) => {
  const [audioURL, setAudioURL] = useState<string>()

  const storage = getStorage()
  const reference = ref(storage, node.properties.src as string)
  getDownloadURL(reference).then((url) => {
    setAudioURL(url)
  })
  return <audio {...props} src={audioURL} />
}
