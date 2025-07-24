import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const navigationLeftSide = [
  { name: "Home", href: "#", current: true },
  { name: "O nas", href: "#", current: false },
];

const navigationRightSide = [
  { name: "Trening", href: "#", current: false },
  { name: "Kontakt", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const RenderHalfMenu = (navElements: any[]) => {
  return (
    <>
      {navElements.map((item) => (
        <DisclosureButton
          key={item.name}
          as="a"
          href={item.href}
          aria-current={item.current ? "page" : undefined}
          className={classNames(
            "text-white hover:text-white block rounded-md px-10 py-2 text-xl uppercase font-black content-center"
          )}
        >
          {item.name}
        </DisclosureButton>
      ))}
    </>
  );
};

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-gray-500 absolute left-1/2 -translate-x-1/2 top-10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
            <div className="hidden sm:ml-6 sm:flex">
              <div className="flex space-x-4">
                {RenderHalfMenu(navigationLeftSide)}
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
              <div className="flex space-x-4">
                {RenderHalfMenu(navigationRightSide)}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigationLeftSide.concat(navigationRightSide).map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
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
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
