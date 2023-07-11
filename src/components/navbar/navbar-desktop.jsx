import { Link } from "react-router-dom";
import DarkModeButton from "../btns/btn-darkmode";
function NavbarDesktop() {
  const DarkMode = true;
  return (
    <>
      <nav className=" dark hidden text-black bg-white md:flex items-center justify-between px-10 shadow-md">
        <h2 className="font-bold text-xl">TechMastersWeb</h2>
        <ul className="p-5 flex gap-5">
          <Link className="dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white py-2 px-4  font-semibold font-thing">
            Home
          </Link>
          <Link className="dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white py-2 px-4  font-semibold font-thing">
            Services
          </Link>
          <Link className="dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white py-2 px-4  font-semibold font-thing">
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
