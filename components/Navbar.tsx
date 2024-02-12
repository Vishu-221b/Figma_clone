"use client";
import Image from "next/image";
import { navElements } from "@/constants";
import ShapesMenu from "./ShapesMenu";

import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex select-none items-center justify-between gap-4 px-5 bg-primary-black  text-white">
      <Image src="/assets/logo.svg" alt="logo" width={100} height={100} />
      <ul className="flex flex-row">
        {navElements.map((item) => (
          
          <li>
          <ul>Home</ul>
          <ul>Gallery</ul>
          <ul>contact</ul>
          </li>
        ))}
      </ul>
      <h1>Activeusers</h1>
    </nav>
  );
};

export default Navbar;
