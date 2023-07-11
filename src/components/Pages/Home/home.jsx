/* ====== Components ====== */
import HeroHome from '../../HeroHome/HeroHome'
import NavBar from '../../navbar/navbar'
/* ====== Pages ====== */
import Beneficios from '../../sections/Benefits/benefits'

const Home = () => {
    return(
        <>
            <NavBar />
            <HeroHome />

            {/* ====== Components ====== */}
            <Beneficios />
        </>
    )
}

export default Home