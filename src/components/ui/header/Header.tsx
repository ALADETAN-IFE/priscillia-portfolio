"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button, Typography } from "@/components/common";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [path, setPath] = useState("");
  const navLinks: string[] = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Contact",
  ];

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
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className={`fixed top-0 z-50 flex w-full justify-center max-sm:px-5 min-h-10.25 py-1 transition-[margin,background-color,backdrop-filter,box-shadow,border-color] duration-350 ${
        isScrolled ? "mt-4" : "mt-14.75"
      }`}
    >
      <div className="flex w-full justify-center absolute top-0 left-0 h-full">
        <div
          style={{ alignItems: "self-end" }}
          className={`max-w-7xl w-9/10 sm:w-95/100 h-full rounded-full ${
            isScrolled
              ? "border border-white/30 bg-white/70 shadow-lg backdrop-blur-md"
              : ""
          }`}
        />
      </div>
      <div
        className={`max-w-306 w-9/10 flex ${
          !isMenuOpen ? "items-center" : "items-start"
        } justify-between relative`}
      >
        <Image
          // src="/logo.png"
          src="/Figmora.png"
          alt="Priscilla Ijomah's Logo"
          width={38}
          height={38}
          priority
        />
        <nav className="flex gap-10 [@media(min-width:769px)]:gap-13 max-md:hidden">
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
                    ? "text-primary after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-primary after:content-['']"
                    : "text-header-nav hover:text-primary"
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
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <motion.button
          whileTap={{ scale: 0.92 }}
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="hidden cursor-pointer p-1 text-secondary max-md:block"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </motion.button>

      </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[98%] rounded-lg bg-white/70 shadow-lg backdrop-blur-md p-4 z-10 w-9/10"
            >
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
                        isActive
                          ? "text-primary"
                          : "text-header-nav hover:text-primary"
                      }`}
                    >
                      <Typography className="font-semibold! text-base!">
                        {link}
                      </Typography>
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
    </motion.header>
  );
};

export default Header;
