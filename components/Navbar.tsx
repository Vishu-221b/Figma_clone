"use client";
import Image from 'next/image'
import { navElements } from '@/constants';
import ShapesMenu from './ShapesMenu';
import { NewThread } from "./comments/NewThread";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex select-none items-center justify-between gap-4 px-5 bg-primary-black  text-white">
      <Image src="/assets/logo.svg" alt="logo" width={100} height={100} />
      <ul className="flex flex-row">

        {navElements.map((item) => (
          <li
            key={item.name}
          >
            {/* If value is an array means it's a nav element with sub options i.e., dropdown */}
            {Array.isArray(item.value) ? (
              <ShapesMenu/>
            ) : item?.value === "comments" ? (
              // If value is comments, trigger the NewThread component
              <NewThread>
                <Button className="relative w-5 h-5 object-contain">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    fill
                    /* className={isActive(item.value) ? "invert" : ""} */
                  />
                </Button>
              </NewThread>
            ) : (
              <Button className="relative w-5 h-5 object-contain">
                <Image
                  src={item.icon}
                  alt={item.name}
                  fill
/*                   className={isActive(item.value) ? "invert" : ""} */
                />
              </Button>
            )}
          </li>
        ))}

      </ul>
      <h1>Activeusers</h1>
    </nav>
  )
}

export default Navbar