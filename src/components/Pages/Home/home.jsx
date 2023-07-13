import { useState, useEffect } from "react";

/* ====== Components ====== */
import HeroHome from "../../HeroHome/HeroHome";
import Footer from "../../footer/footer";
import NavBar from "../../navbar/navbar";
import NotificationHome from "../../notifications/home-notificacion";
/* ====== Pages ====== */
import Beneficios from "../../sections/Benefits/benefits";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <>
      <NavBar dark={toggleDarkMode} />
      <NotificationHome />
      <HeroHome />

      {/* ====== Components ====== */}
      <Beneficios dark={toggleDarkMode} />

      <Footer />
    </>
  );
};

export default Home;
