type CardProps = {
  bg: string
  title: string
  subtitle: string
}

const CardPlans = ({ bg, title, subtitle }: CardProps) => {
  return (
    <div className={`${bg} `}>
      <div>
        <p>{title}</p>
        <h4>{subtitle}</h4>
      </div>
    </div>
  )
}

export default CardPlans
