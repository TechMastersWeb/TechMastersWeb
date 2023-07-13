/* ====== Components ====== */
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Hero from "../../img/Hero.png";
import BtnHero from "../buttons/btn-Hero/btn-Hero";

const HeroHome = () => {
  const { text } = useTypewriter({
    words: ["Somos developers", "somos creadores", "somos diseñadores :V"],
    loop: true,
    delaySpeed: 1500,
    typeSpeed: 1000,
    delaySpeed: 500,
  });
  return (
    <>
      <div className="relative overflow-hidden m-6">
        <h2>HOla</h2>
        <span className="text-black">{text}</span>
        <span>
          <Cursor />
        </span>
        <img src={Hero} alt="Image Hero" className=" m-auto hidden md:flex" />
        <div className="absolute px-[-50] hidden md:flex  m-auto inset-0 bg-[#111827] opacity-50"></div>
        <div className="absolute w-auto top-1/2 left-1/2 hidden md:flex transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold">
          <h1 className="hidden md:flex">Creeamos lo que piensas :D</h1>
          <BtnHero name="Read More" />
        </div>
      </div>
    </>
  );
};
export default HeroHome;
