import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const navigationLeftSide = [
  { name: "Home", href: "#home", current: true },
  { name: "O nas", href: "#about", current: false },
];

const navigationRightSide = [
  { name: "Trening", href: "#timetable", current: false },
  { name: "Kontakt", href: "#contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <div className="bg-gray-500 absolute left-1/2 -translate-x-1/2 top-10 z-20 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
            <div className="hidden sm:ml-6 sm:flex">
              <div className="flex space-x-4 items-center">
                <a
                  href="#home"
                  className={classNames(
                    "text-white hover:text-white block rounded-md px-10 text-xl uppercase font-black content-center h-16"
                  )}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className={classNames(
                    "text-white hover:text-white block rounded-md px-10 text-xl uppercase font-black content-center h-16"
                  )}
                >
                  O nas
                </a>
              </div>
              <div className="flex space-x-4">
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/logo.png"
                  alt="Next.js Logo"
                  width={120}
                  height={40}
                  priority
                />
              </div>
              <div className="flex space-x-4 items-center">
                <a
                  href="#timetable"
                  className={classNames(
                    "text-white hover:text-white block rounded-md px-10 text-xl uppercase font-black content-center h-16"
                  )}
                >
                  Trening
                </a>
                <a
                  href="#contact"
                  className={classNames(
                    "text-white hover:text-white block rounded-md px-10  text-xl uppercase font-black content-center h-16"
                  )}
                >
                  Kontakt
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
        </div>
      </div>

      <div className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigationLeftSide.concat(navigationRightSide).map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
