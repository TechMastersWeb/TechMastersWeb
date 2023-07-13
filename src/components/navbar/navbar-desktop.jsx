import { Link } from "react-router-dom";
import DarkModeButton from "../btns/btn-darkmode";
function NavbarDesktop() {
  const DarkMode = true;
  return (
    <>
      <nav className="hidden md:flex  items-center justify-around shadow-md">
        <h2 className="font-bold text-xl">TechMasters</h2>
        <ul className="py-4 flex gap-5">
          <Link className=" hover:bg-black hover:text-white py-2 px-4  font-semibold font-thing">
            Home
          </Link>
          <Link className=" hover:bg-black hover:text-white py-2 px-4  font-semibold font-thing">
            Services
          </Link>
          <Link className=" hover:bg-black hover:text-white py-2 px-4  font-semibold font-thing">
            Projects
          </Link>
        </ul>
        <div className="flex gap-4">
          <DarkModeButton />
        </div>
      </nav>
    </>
  );
}

export default NavbarDesktop;
