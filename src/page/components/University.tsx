type UniversityProps = {
  logo: string
}
const University = ({ logo }: UniversityProps) => {
  return (
    <div className="flex  items-center justify-center">
      <img
        draggable="false"
        className="cursor-default select-none grayscale "
        src={logo}
        alt=""
      />
    </div>
  )
}

export default University
