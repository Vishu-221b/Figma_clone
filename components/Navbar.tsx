"use client";

import Image from "next/image";
import { navElements } from "@/constants";
import ActiveUsers from "./users/ActiveUsers"

const Navbar = () => {
  return (
    <nav className="flex py-4 select-none items-center justify-between gap-4 bg-primary-black px-5 text-white">
      <Image src="/assets/logo.svg" alt="logo" width={100} height={100} />
      <ul className="flex flex-row">
          <li>Home</li>
          <li>components</li>
          <li>gallery</li>
      </ul>
      {<ActiveUsers/>}
    </nav>
  );
};

export default Navbar;
