import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="hidden dark:bg-[#111827] dark:text-white text-black bg-white md:flex items-center justify-between px-10 shadow-md">
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
        <div>
          <input
            className="p-2 border-2 dark:border-white  w-64 outline-0 text-black"
            placeholder="Search..."
            type="search"
            name=""
            id=""
          />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
