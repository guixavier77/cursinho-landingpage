import googlePlay from '../../assets/img/google-play.svg'
import appleStore from '../../assets/img/apple.svg'

const AppButton = () => {
  return (
    <div className="flex  gap-5 flex-wrap">
      <a
        href=""
        className="font-inter border-[1px] border-[#D5D5DF] py-2 px-4 rounded-lg flex items-center max-w-[160px] justify-center gap-3"
      >
        <img src={appleStore} alt="" className=" w-6 h-6" />
        <p className="text-[#4E4C7A] text-xs ">
          Disponível na
          <br />
          <b className="font-extrabold">App Store</b>
        </p>
      </a>

      <a
        href=""
        className="font-inter border-[1px] border-[#D5D5DF] py-2 px-4 rounded-lg flex items-center max-w-[160px] justify-center gap-3"
      >
        <img src={googlePlay} alt="" className=" w-6 h-6" />
        <p className="text-[#4E4C7A] text-xs ">
          Disponível na
          <br />
          <b className="font-extrabold">Google Play</b>
        </p>
      </a>
    </div>
  )
}

export default AppButton
