/* ====== React Router ====== */
import { Link } from "react-router-dom";
import NavbarDesktop from "./navbar-desktop";
import NavbarMobile from "./navbar-mobile";

function NavBar() {
  return (
    <>
      <NavbarDesktop />
      <NavbarMobile />
    </>
  );
}

export default NavBar;
