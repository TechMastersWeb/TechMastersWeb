import DarkModeButton from "../btns/btn-darkmode";
function NavbarMobile() {
  return (
    <>
      <nav className=" md:hidden items-center flex justify-between px-10 py-2">
        <div className="">
          <i className="bx bx-menu "></i>
        </div>

        <h2>TechMastersWeb</h2>
        <DarkModeButton />
        <input className="hidden" placeholder="Search..." type="search" />
      </nav>
    </>
  );
}

export default NavbarMobile;
