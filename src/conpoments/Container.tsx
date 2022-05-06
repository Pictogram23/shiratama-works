export type ContainerProps = {
  children?: React.ReactNode
}

export const Container: React.FC<ContainerProps> = (prop) => {
  return (
    <>
      <div className="container">{prop.children}</div>

      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          flex-flow: column;
        }
      `}</style>
    </>
  )
}
