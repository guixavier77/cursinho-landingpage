import University from '../components/University'
import enemLogo from '../../assets/img/universities/enem.png'
import pucLogo from '../../assets/img/universities/pucsp.png'
import fgvLogo from '../../assets/img/universities/fgv.png'
import unespLogo from '../../assets/img/universities/unesp.png'
import unicampLogo from '../../assets/img/universities/unicamp.png'
import einsteinLogo from '../../assets/img/universities/einstein.png'
import fuvestLogo from '../../assets/img/universities/fuvest.png'

const Universities = () => {
  return (
    <div className="center">
      <ul className="flex items-center justify-center gap-12 mt-4">
        <University logo={enemLogo} />
        <University logo={pucLogo} />
        <University logo={fgvLogo} />
        <University logo={unespLogo} />
        <University logo={unicampLogo} />
        <University logo={einsteinLogo} />
        <University logo={fuvestLogo} />
      </ul>
    </div>
  )
}

export default Universities
