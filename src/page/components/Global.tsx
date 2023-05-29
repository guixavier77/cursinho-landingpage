type textProps = {
  text: string
}
export const Title = ({ text }: textProps) => {
  return (
    <h1 className="font-nunito text-primary text-5xl font-bold py-4 l">
      {text}
    </h1>
  )
}

export const SubTitle = ({ text }: textProps) => {
  return (
    <h1 className="font-nunito text-blue text-2xl font-bold uppercase">
      {text}
    </h1>
  )
}
export const Description = ({ text }: textProps) => {
  return (
    <h1 className="font-inter text-gray200 text-xl font-normal leading-9 ">
      {text}
    </h1>
  )
}
