import CardPlans from '../components/CardPlans'
import { SubTitle, Title } from '../components/Global'

const Plans = () => {
  const planRecommended = [
    'Acesso a todos os benefícios da Plataforma Videoaulas, Exercícios, Apostilas e muito mais',
    '36 aulas ao vivo',
    'Revisão do ENEM',
    'Grupo no Whatsapp com professores e alunos',
    'Reforço para FUVEST,UNicamp e Vestibulares de Medicina',
  ]
  const planApproved = [
    'Acesso a todos as videoaulas',
    'Ganhe pontos resolvendo questões e troque por premi',
    '3.000 exercícios com resolução em vídeo',
    '4 apostilas com todo o conteúdo de Matemática',
    'Reforço para FUVEST, Unicamp e Vestibulares de Medicina',
  ]
  return (
    <div className="center pt-16 t:pt-7 ">
      <div className="pb-14 t:pb-7">
        <SubTitle text="Nosso planos" />
        <Title text="Invista no seu futuro" />
      </div>
      <div className="flex gap-7 t:flex-wrap ">
        <CardPlans
          subtitle="1 ano de acesso"
          title="Plano Recomendado"
          bg="bg-primary"
          advantage={planRecommended}
          advtextColor="text-white"
          titleColor="text-white"
          display=""
          price="49,90"
          plan="/ano"
          textPrice="text-white"
          textPlan="text-white opacity-40"
          priceInfo=""
          bgbutton="bg-gradient-to-r from-[#26E9CF] to-[#25CDE1]"
        />
        <CardPlans
          subtitle="6 meses de acesso"
          title="Plano aprovado"
          bg="bg-white border-[1px] border-solid border-[#201E54]"
          advantage={planApproved}
          advtextColor="text-primary "
          titleColor="text-primary"
          display="after:hidden"
          price="39,90"
          plan="/semestre"
          textPrice="text-primary"
          textPlan="text-primary"
          priceInfo="opacity-0"
          bgbutton="bg-primary"
        />
      </div>
    </div>
  )
}

export default Plans
