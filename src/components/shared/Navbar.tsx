"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`rounded-full px-4 py-1 font-normal transition-colors ${
            pathname === "/"
              ? "bg-[#1A2312] text-[#C2F800]"
              : "text-[#9CA3AF] hover:bg-[#1A2312] hover:text-[#C2F800]"
          }`}
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/my-plan"
          className={`rounded-full px-4 py-1 font-normal transition-colors ${
            pathname === "/my-plan"
              ? "bg-[#1A2312] text-[#C2F800]"
              : "text-[#9CA3AF] hover:bg-[#1A2312] hover:text-[#C2F800]"
          }`}
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <nav className="border-b border-[#1C1F26]">
      <div className="navbar mx-auto  max-w-7xl px-4">
        {/* Left */}
        <div className="navbar-start">
          {/* Mobile menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-1 mt-3 w-52 gap-2 bg-base-100 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-md font-bold">
            <Image src={logo} alt="FitLog logo" width={25} />
            <span className="text-[18px] uppercase">FitLog</span>
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">{links}</ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full px-2 py-1 font-normal transition-colors text-[16px] text-[#9CA3AF] hover:bg-[#1C1F26] hover:text-white"
          >
            Plan{" "}
            <span className="rounded-full px-[8px] text-black bg-[#C2F800]">
              0
            </span>
          </Link>
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full px-2 py-1 font-normal transition-colors text-[16px] text-[#9CA3AF] hover:bg-[#1C1F26] hover:text-white"
          >
            Saved
            <span className="rounded-full outline outline-[#2d313bd3] px-[8px] text-white ">
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
