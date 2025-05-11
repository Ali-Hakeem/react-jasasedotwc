"use client";
import { navLinks } from "@/constant/constant";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import ThemeToggle from "@/components/Helper/ThemeToggle";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.addEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all ${
        navBg ? "bg-green-700 shadow-md" : "fixed"
      } duration-200 h-[12vh] z-[100] fixed w-full bg-green-600`}
    >
      <div className="flex items-center h-full justify-between sm:w-[80%] w-[90%] mx-auto">
        {/* logo */}
        <div className="text-white font-bold text-2xl sm:text-3xl">
          <span className="relative">AGUS SEDOT WC</span>
        </div>
        {/* nav */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                className="text-white hover:text-gray-300 font-semibold transition-all duration-200"
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
          {/* theme */}
          <ThemeToggle />
        </div>
        <div className="flex items-center space-x-4 lg:hidden ml-auto">
          {/* theme */}
          <ThemeToggle />
          {/*close*/}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white"
          ></HiBars3BottomRight>
        </div>
      </div>
    </div>
  );
};

export default Nav;
