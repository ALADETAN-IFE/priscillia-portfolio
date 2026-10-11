"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Typography } from "@/components/common";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinks = ["Home", "About", "Services", "Portfolio", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full flex justify-center max-sm:px-5 min-h-10.25 py-1 fixed top-0 transition-[margin,background-color,backdrop-filter,box-shadow,border-color] duration-350 ${
        isScrolled
          ? "mt-4 border border-white/30 bg-white/70 shadow-lg backdrop-blur-md"
          : "mt-14.75 bg-white"
      }`}
    >
      <div className="max-w-306 w-9/10 flex max-md:flex-col justify-between items-center">
        <Image
          src="/logo.png"
          alt="Priscilla Ijomah's Logo"
          width={38}
          height={38}
        />
        <nav className="flex max-md:hidden gap-13">
          {navLinks.map((e, i) => (
            <Link href={`#${e.toLowerCase()}`} key={i}>
              <Typography className="font-semibold! text-base!">
                {e}
              </Typography>
            </Link>
          ))}
        </nav>
        <Button
          value="Hire me"
          icon={false}
          rounded={false}
          className="w-28.75 h-8.5!"
        />
      </div>
    </header>
  );
};

export default Header;
