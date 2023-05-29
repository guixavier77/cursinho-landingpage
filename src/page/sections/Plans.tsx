import CardPlans from '../components/CardPlans'
import { SubTitle, Title } from '../components/Global'

const Plans = () => {
  return (
    <div className="center pt-16">
      <SubTitle text="Nosso planos" />
      <Title text="Invista no seu futuro" />

      <div>
        <CardPlans title="" subtitle="" bg="bg-primary" />
      </div>
    </div>
  )
}

export default Plans
