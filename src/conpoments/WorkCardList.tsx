export type WorkCardListProps = {
  children?: React.ReactNode
}

export const WorkCardList: React.FC<WorkCardListProps> = (prop) => {
  return (
    <>
      <div className="work-card-list">{prop.children}</div>

      <style jsx>{`
        .work-card-list {
          display: flex;
          justify-content: center;
          flex-flow: row wrap;
        }
      `}</style>
    </>
  )
}
