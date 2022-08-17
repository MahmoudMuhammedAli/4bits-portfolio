import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import NavList from "./NavList";

export default function Navbar() {
  const [ toggleMenu, editToggleMenu ] = useState(false);
  console.log(toggleMenu);

  return (
    <div className="h-full w-full">
      <div className=" px-[10vw] py-4 flex items-center justify-between shadow-lg">
        <div className="text-green-500">
          <span className="">development_</span>SEED
        </div>
        <button
          className="block lg:hidden"
          onClick={() => {
            editToggleMenu(!toggleMenu);
          }}
        >
          <BiMenu className="text-3xl" />
        </button>
        <div className="hidden lg:block ">
          <NavList />
        </div>
      </div>
      
      <div
        className={`flex flex-col gap-3 h-screen w-screen bg-white transition absolute lg:hidden
        ${toggleMenu ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[100vw]"}`}
      >
        <NavList />
      </div>

    </div>
  );
}
