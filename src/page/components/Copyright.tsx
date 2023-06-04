import facebooksvg from '../../assets/img/facebook.svg'
import twittersvg from '../../assets/img/twitter-fill.svg'
import instagramsvg from '../../assets/img/instagram-fill.svg'

const Copyright = () => {
  return (
    <div className="mt-8 pt-8 pb-8 flex justify-between border-t">
      <p className="text-gray200 font-worksans text-base ">
        © Copyright 2021. All Right Reserved
      </p>

      <div className="flex gap-6">
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
