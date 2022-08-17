import { useState } from "react";
import { BiMenu } from "react-icons/bi";

export default function Navbar() {
  const [toggleMenu, editToggleMenu] = useState(false);
  console.log(toggleMenu);
  
  return (
    <div class="bg-red-700 px-[10vw] py-4 flex items-center justify-between">
      <div className="text-green-500">
        <span className="text-white">development_</span>SEED
      </div>
      <button
        onClick={() => {
          editToggleMenu(!toggleMenu);
        }}
        >
        <BiMenu className="text-3xl" />
      </button>
    </div>
  );
}
