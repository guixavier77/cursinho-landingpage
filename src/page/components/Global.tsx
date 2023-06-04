type textProps = {
  text: string
}
export const Title = ({ text }: textProps) => {
  return (
    <h1 className="py-4 font-nunito text-5xl font-bold text-primary t:text-4xl s:py-0 s:text-xl">
      {text}
    </h1>
  )
}

export const SubTitle = ({ text }: textProps) => {
  return (
    <h1 className="font-nunito text-2xl font-bold uppercase text-blue t:text-xl s:text-xl">
      {text}
    </h1>
  )
}
export const Description = ({ text }: textProps) => {
  return (
    <p className="font-inter text-xl font-normal leading-9 text-gray200 t:text-lg s:text-xs">
      {text}
    </p>
  )
}
