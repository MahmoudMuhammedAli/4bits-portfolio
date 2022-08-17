import React from "react";

export default function NavList() {
  return (
    <ul className="flex flex-col md:flex-row gap-3">
      <li className="font-semibold text-lg">Welcome</li>
      <li className="font-semibold text-lg">Company</li>
      <li className="font-semibold text-lg">Careers</li>
      <li className="font-semibold text-lg">Team</li>
      <li className="font-semibold text-lg">Blog</li>
      <li className="font-semibold text-lg">Contact</li>
    </ul>
  );
}
