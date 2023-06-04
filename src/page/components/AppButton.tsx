import googlePlay from '../../assets/img/google-play.svg'
import appleStore from '../../assets/img/apple.svg'

const AppButton = () => {
  return (
    <div className="flex  flex-wrap gap-5 s:flex-col">
      <a
        href=""
        className="flex max-w-[160px] items-center justify-center gap-3 rounded-lg border-[1px] border-[#D5D5DF] px-4 py-2 font-inter"
      >
        <img src={appleStore} alt="" className=" h-6 w-6" />
        <p className="text-xs text-[#4E4C7A] ">
          Disponível na
          <br />
          <b className="font-extrabold">App Store</b>
        </p>
      </a>

      <a
        href=""
        className="flex max-w-[160px] items-center justify-center gap-3 rounded-lg border-[1px] border-[#D5D5DF] px-4 py-2 font-inter"
      >
        <img src={googlePlay} alt="" className=" h-6 w-6" />
        <p className="text-xs text-[#4E4C7A] ">
          Disponível na
          <br />
          <b className="font-extrabold">Google Play</b>
        </p>
      </a>
    </div>
  )
}

export default AppButton
