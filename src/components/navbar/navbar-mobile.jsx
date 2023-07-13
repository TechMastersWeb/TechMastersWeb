import DarkModeButton from "../btns/btn-darkmode";
function NavbarMobile() {
  return (
    <>
      <nav className=" md:hidden items-center flex justify-between px-10 py-2">
        <div className="px-4 py-2 rounded-md bg-gray-800 text-white">
          <i class="bx bx-menu "></i>
        </div>

        <h2>TechMastersWeb</h2>
        <DarkModeButton />
        <input className="hidden" placeholder="Search..." type="search" />
      </nav>
    </>
  );
}

export default NavbarMobile;
