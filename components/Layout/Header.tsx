"use client";
import React from "react";
import Link from "next/link";
import { ImHome3 } from "react-icons/im";
import { usePathname } from "next/navigation";

import { useTheme } from "@/hooks/useTheme";

function Header() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const classLinks =
    "flex items-center py-2.5 gap-[4px] text-text font-fontweight";
  return (
    <>
      <header className="w-full bg-primary sticky top-0 z-50 shadow ">
        <div className="flex justify-between px-[.8rem] mx-auto w-full max-w-maxwidth text-text font-semibold text-[1.2rem]">
          <div className="flex items-stretch">
            <Link
              className={pathname === "/" ? `${classLinks} active` : classLinks}
              href="/"
              passHref
            >
              <ImHome3 className={"relative bottom-[3px] text-xl"} /> Douglas
            </Link>
          </div>

          <div>
            {theme === "light" ? <div onClick={()=>setTheme('dark')}>is light</div> : <div onClick={()=>setTheme('light')}>is dark</div>}
          </div>
          <nav className="flex items-stretch">
            <Link
              className={
                pathname === "/projects/" ? `${classLinks} active` : classLinks
              }
              href="/projects"
              passHref
            >
              Projetos
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
