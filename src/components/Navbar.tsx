"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const navigationLeftSide = [
  { name: "Home", href: "/" },
  { name: "O nas", href: "/about" },
];

const navigationRightSide = [
  { name: "Grafik", href: "https://gdanskaszkolafechtunku.wod.guru/zajecia" },
  { name: "Cennik", href: "https://gdanskaszkolafechtunku.wod.guru/karnety" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-black fixed left-1/2 -translate-x-1/2 z-50 w-full font-fira h-32 md:h-28"
    >
      {({ open }) => (
        <>
          {/* DESKTOP */}
          <div className="hidden sm:block pt-10 pb-2">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center justify-center">
                  <div className="flex">
                    <div className="flex space-x-4 items-center">
                      {navigationLeftSide.map((item) => (
                        <div key={item.name} className="w-44">
                          <a
                            href={item.href}
                            className={classNames(
                              "relative text-white text-center block rounded-md px-10 text-xl uppercase font-black content-center h-16",
                              "after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white",
                              "after:transition-all after:duration-300",
                              "hover:after:w-1/2 hover:after:left-1/4"
                            )}
                          >
                            {item.name}
                          </a>
                        </div>
                      ))}
                    </div>

                    <div className="flex space-x-4 px-8">
                      <Image
                        src="/logo_white.png"
                        alt="Logo"
                        width={120}
                        height={40}
                        priority
                        className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                      />
                    </div>

                    <div className="flex space-x-4 items-center">
                      {navigationRightSide.map((item) => (
                        <div key={item.name} className="w-44">
                          <a
                            href={item.href}
                            className={classNames(
                              "relative text-white text-center block rounded-md px-10 text-xl uppercase font-black content-center h-16",
                              "after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white",
                              "after:transition-all after:duration-300",
                              "hover:after:w-1/2 hover:after:left-1/4"
                            )}
                          >
                            {item.name}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:hidden flex items-center justify-between h-20 px-4 relative">
            <DisclosureButton className="text-white p-2">
              {open ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </DisclosureButton>

            <Image
              src="/logo_white.png"
              className="relative top-5"
              alt="Logo"
              width={100}
              height={40}
              priority
            />
          </div>

          <DisclosurePanel className="sm:hidden bg-black border-t border-white/10">
            <div className="space-y-2 px-6 py-6">
              {[...navigationLeftSide, ...navigationRightSide].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-center text-white text-lg font-semibold py-3 rounded-md hover:bg-white/10 transition"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
