type UniversityProps = {
  logo: string
}
const University = ({ logo }: UniversityProps) => {
  return (
    <li>
      <a href="">
        <img className="grayscale " src={logo} alt="" />
      </a>
    </li>
  )
}

export default University
