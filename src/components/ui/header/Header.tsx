"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button, Typography } from "@/components/common";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [path, setPath] = useState("");
  const navLinks: string[] = ["Home", "About", "Services", "Portfolio", "Contact"];

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

  useEffect(() => {
    const handleHashChange = () => {
      setPath(window.location.hash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const activePath = path || "#home";
  const handleNavClick = (href: string) => {
    setPath(href);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 flex w-full justify-center max-sm:px-5 min-h-10.25 py-1 transition-[margin,background-color,backdrop-filter,box-shadow,border-color] duration-350 ${
        isScrolled
          ? "mt-4 border border-white/30 bg-white/70 shadow-lg backdrop-blur-md"
          : "mt-14.75 bg-white"
      }`}
    >
      <div
        className={`max-w-306 w-9/10 flex ${!isMenuOpen ? "items-center" : "items-start"} justify-between relative`}
      >
        <Image
          src="/logo.png"
          alt="Priscilla Ijomah's Logo"
          width={38}
          height={38}
        />
        <nav className="flex gap-13 max-md:hidden">
          {navLinks.map((link: string) => {
            const href = `#${link.toLowerCase()}`;
            const isActive = activePath === href;

            return (
              <Link
                href={href}
                key={link}
                aria-current={isActive ? "page" : undefined}
                onClick={() => handleNavClick(href)}
                className={`relative py-2 font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-(--primary) after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-(--primary) after:content-['']"
                    : "text-(--header-nav) hover:text-(--primary)"
                }`}
              >
                <Typography className="font-semibold! text-base!">
                  {link}
                </Typography>
              </Link>
            );
          })}
        </nav>
        <Button
          value="Hire me"
          icon={false}
          rounded={false}
          className="h-8.5! w-28.75 max-md:hidden"
        />
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="hidden cursor-pointer p-1 text-(--secondary) max-md:block"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-full bg-white p-4 z-10 w-full">
            <nav className="flex gap-3 md:hidden flex-col items-center">
              {navLinks.map((link) => {
                const href = `#${link.toLowerCase()}`;
                const isActive = activePath === href;

                return (
                  <Link
                    href={href}
                    key={link}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => handleNavClick(href)}
                    className={`w-full p-2 text-center font-semibold transition-colors duration-200 ${
                      isActive ? "text-(--primary)" : "text-(--header-nav) hover:text-(--primary)"
                    }`}
                  >
                    <Typography className="font-semibold! text-base!">
                      {link}
                    </Typography>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
