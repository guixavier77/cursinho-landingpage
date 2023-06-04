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
    <div className="max-w-[370px] cursor-pointer select-none bg-white p-6 drop-shadow-xl">
      <img className="pb-3" src={star} alt="" />
      <p className="max-w-[320px] font-inter text-base font-normal leading-6 text-gray200 ">
        {userTestimonial}
      </p>

      <div className="flex items-center pt-6 ">
        <img src={userRating} alt="" />
        <div className="pl-4 font-inter">
          <p className=" max-w-[185px] text-xl font-medium text-primary">
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
