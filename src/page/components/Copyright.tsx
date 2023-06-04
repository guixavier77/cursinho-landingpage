import facebooksvg from '../../assets/img/facebook.svg'
import twittersvg from '../../assets/img/twitter-fill.svg'
import instagramsvg from '../../assets/img/instagram-fill.svg'

const Copyright = () => {
  return (
    <div className="mt-8 flex justify-between border-t pb-8 pt-8  s:flex-col-reverse s:items-center s:border-none s:text-center">
      <p className="font-worksans text-base text-gray200 ">
        © Copyright 2021. All Right Reserved
      </p>

      <div className="flex gap-6 pb-14">
        <a href="">
          <img src={facebooksvg} alt="" />
        </a>
        <a href="">
          <img src={twittersvg} alt="" />
        </a>
        <a href="">
          <img src={instagramsvg} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Copyright
