export type ContentJustify = 'left' | 'center' | 'right'

export type ContentAlign = 'top' | 'center' | 'bottom'

export type ContentProps = {
  children?: React.ReactNode
  justify?: ContentJustify
  align?: ContentAlign
  height?: string
  fullWidth?: boolean
}

export const Content: React.FC<ContentProps> = (prop) => {
  return (
    <>
      <div className="content">{prop.children}</div>

      <style jsx>{`
        .content {
          display: flex;
          ${prop.justify ? `justify-content: ${prop.justify};` : ''}
          ${prop.align ? `align-items: ${prop.align};` : ''}
                flex-flow: column;

          ${prop.fullWidth && 'max-width: 1200px;'}
          width: 100%;
          ${prop.height && `height: ${prop.height};`}
        }
      `}</style>
    </>
  )
}
