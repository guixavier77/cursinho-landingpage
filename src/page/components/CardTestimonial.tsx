import doubleQuotes from '../../assets/img/double-quotes.png'
import star from '../../assets/img/star.png'
type CardProps = {
  userRating: string
  user: string
  userFunction: string
  userTestimonial: string
}
const CardTestimonial = ({
  user,
  userRating,
  userFunction,
  userTestimonial,
}: CardProps) => {
  return (
    <div className="drop-shadow-xl p-6 bg-white max-w-[370px]">
      <img className="pb-3" src={star} alt="" />
      <p className="font-inter text-gray200 text-base font-normal leading-6 max-w-[320px] ">
        {userTestimonial}
      </p>

      <div className="pt-6 flex items-center ">
        <img src={userRating} alt="" />
        <div className="font-inter pl-4">
          <p className=" font-medium text-xl text-primary max-w-[185px]">
            {user}
          </p>
          <p className="max-w-[185px] text-xs text-gray200">{userFunction}</p>
        </div>
        <img className="ml-auto" src={doubleQuotes} alt="" />
      </div>
    </div>
  )
}

export default CardTestimonial
