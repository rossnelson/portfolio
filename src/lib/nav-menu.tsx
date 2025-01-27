"use client";

import Link from "next/link";
import { createContext, useContext, useState } from "react";

// Context

type ContextType = {
  active: boolean;
  toggleActive: () => void;
  setInActive?: () => void;
};

const Context = createContext({} as ContextType);

function MenuProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive(!active);
  const setInActive = () => setActive(false);

  const value = { active, toggleActive, setInActive };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

// MenuItems

type MenuItemsProps = {
  className?: string;
};

function MenuItems({ className }: MenuItemsProps) {
  const { setInActive } = useContext(Context);
  return (
    <ul className={className}>
      <li>
        <Link onClick={setInActive} href="#about">
          About
        </Link>
      </li>

      {/*
      <li>
        <Link onClick={setInActive} href="#showcase">
          Showcase
        </Link>
      </li>

      <li>
        <Link onClick={setInActive} href="#training">
          Training
        </Link>
      </li>

      <li>
        <Link onClick={setInActive} href="#contact">
          Contact
        </Link>
      </li>
      */}
    </ul>
  );
}

// Menu

function Menu() {
  const { active, toggleActive } = useContext(Context);

  return (
    <>
      <div className="relative">
        <button
          className="btn btn-square btn-ghost md:hidden"
          onClick={toggleActive}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        <MenuItems
          className={`${!active && "hidden"} absolute menu bg-base-200 right-0 rounded-xl p-2 md:hidden`}
        />
      </div>

      <MenuItems className="hidden font-bold text-[#2CC3DF] px-1 md:flex gap-4 items-center" />
    </>
  );
}

export function NavMenu() {
  return (
    <MenuProvider>
      <Menu />
    </MenuProvider>
  );
}
