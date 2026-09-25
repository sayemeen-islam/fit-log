import Image from "next/image";
import React from "react";
import logo from "@/assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#090A0D] border-t border-[#1A1D24] py-8">
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-4 mx-auto w-full max-w-7xl px-4">
        <div className="flex gap-2 items-center">
          <Image src={logo} alt="Footer Logo"></Image>
          <h2 className="uppercase font-medium heading">Fitlog</h2>
        </div>
        <p className="text-[#6B7280] text-[12px]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
