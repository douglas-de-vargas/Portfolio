import Link from "next/link";
import { ImHome3 } from "react-icons/im";

function Header() {
  return (
    <>
      <header className="w-full bg-primary sticky top-0 z-50 shadow font-fontsecondary">
        <div
          id="header-container"
          className="flex justify-between px-1 mx-auto w-full max-w-maxwidth text-textcolor font-semibold"
        >
          <div id="menu-logo" className="flex items-stretch px-[8px]">
            <Link
              className={
                "flex items-center py-3 gap-[4px] text-textcolor font-fontweight"
              }
              href="/"
            >
              <ImHome3 className={"relative top-[-2px] text-xl"} /> Douglas
            </Link>
          </div>

          <nav className="flex items-stretch px-[10px]">
            <Link
              href="/projects"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              className={
                "flex items-center py-[3px] px-[8px] m-[3px] text-textcolor font-fontweight"
              }
            >
              # Projetos
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
