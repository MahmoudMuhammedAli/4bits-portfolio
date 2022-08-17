import React from "react";

export default function NavList() {
  return (
    <ul className="flex flex-col md:flex-row gap-3 ">
      <li className="font-semibold text-lg">Home</li>
      <li className="font-semibold text-lg">team</li>
      <li className="font-semibold text-lg">projects</li>
    </ul>
  );
}
