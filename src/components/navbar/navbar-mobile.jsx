import "boxicons";
import DarkModeButton from "../btns/btn-darkmode";
function NavbarMobile() {
  return (
    <>
      <nav className="md:hidden items-center flex justify-between px-10 py-2">
        <box-icon color="" name="menu-alt-left"></box-icon>

        <h2>TechMastersWeb</h2>
        <DarkModeButton />
        <input className="hidden" placeholder="Search..." type="search" />
      </nav>
    </>
  );
}

export default NavbarMobile;
