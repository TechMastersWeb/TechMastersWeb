/* ====== Components ====== */
import Hero from '../../img/Hero.png'
import BtnHero from '../buttons/btn-Hero/btn-Hero'

const HeroHome = () => {
  return (
    <>
        <div className='relative'>
            <img src={Hero} alt="Image Hero" className='w-full'/>
            <div className="absolute inset-0 bg-[#111827] opacity-50"></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold'>
                <h1>Creeamos lo que piensas :D</h1>
                <BtnHero name='Read More' />
            </div>
        </div>
    </>
  )
}
export default HeroHome
