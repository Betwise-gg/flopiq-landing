"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="relative px-4 py-2 text-small font-medium text-text-secondary hover:text-text-primary transition-colors"
    >
      {children}
    </Link>
  );
}

export default function MarketingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#players", label: "For Players" },
    { href: "#coaches", label: "For Coaches" },
  ];

  return (
    <>
      {/* Full-width header when at top */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-50 py-5"
          >
            <div className="wrapper">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5">
                  <Image
                    src="/icon.png"
                    alt="FlopIQ"
                    width={32}
                    height={32}
                    className="rounded-lg"
                    priority
                  />
                  <span className="text-lg font-bold text-text-primary tracking-tight">
                    Flop<span className="text-brand-gold">IQ</span>
                  </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} href={link.href}>
                      {link.label}
                    </NavLink>
                  ))}
                </nav>

                {/* Right side */}
                <div className="flex items-center gap-3">
                  <div className="hidden sm:block badge badge-gold">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    Alpha
                  </div>

                  <Link href="#early-access" className="hidden sm:block">
                    <button className="btn-primary text-sm px-5 py-2.5">
                      Get Early Access
                    </button>
                  </Link>

                  {/* Mobile menu button */}
                  <button
                    className="md:hidden w-10 h-10 flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    <div className="flex flex-col gap-1.5">
                      <motion.span
                        animate={{
                          rotate: isMobileMenuOpen ? 45 : 0,
                          y: isMobileMenuOpen ? 6 : 0,
                        }}
                        className="w-5 h-0.5 bg-text-primary rounded-full origin-center"
                      />
                      <motion.span
                        animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                        className="w-5 h-0.5 bg-text-primary rounded-full"
                      />
                      <motion.span
                        animate={{
                          rotate: isMobileMenuOpen ? -45 : 0,
                          y: isMobileMenuOpen ? -6 : 0,
                        }}
                        className="w-5 h-0.5 bg-text-primary rounded-full origin-center"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Floating pill header when scrolled */}
      <AnimatePresence>
        {isScrolled && (
          <motion.header
            initial={{ y: -80, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -80, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
          >
            <div className="flex items-center gap-4 px-4 py-2.5 rounded-2xl bg-bg-elevated/90 backdrop-blur-xl border border-white/10 shadow-lg">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/icon.png"
                  alt="FlopIQ"
                  width={26}
                  height={26}
                  className="rounded-md"
                />
                <span className="text-base font-bold text-text-primary tracking-tight hidden sm:block">
                  Flop<span className="text-brand-gold">IQ</span>
                </span>
              </Link>

              {/* Divider */}
              <div className="hidden md:block w-px h-5 bg-white/10" />

              {/* Nav links */}
              <nav className="hidden md:flex items-center">
                {navLinks.map((link) => (
                  <NavLink key={link.href} href={link.href}>
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              {/* Divider */}
              <div className="hidden md:block w-px h-5 bg-white/10" />

              {/* CTA Button */}
              <Link href="#early-access">
                <button className="btn-primary text-xs px-4 py-2">
                  Get Access
                </button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden w-8 h-8 flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div className="flex flex-col gap-1">
                  <motion.span
                    animate={{
                      rotate: isMobileMenuOpen ? 45 : 0,
                      y: isMobileMenuOpen ? 5 : 0,
                    }}
                    className="w-4 h-0.5 bg-text-primary rounded-full origin-center"
                  />
                  <motion.span
                    animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                    className="w-4 h-0.5 bg-text-primary rounded-full"
                  />
                  <motion.span
                    animate={{
                      rotate: isMobileMenuOpen ? -45 : 0,
                      y: isMobileMenuOpen ? -5 : 0,
                    }}
                    className="w-4 h-0.5 bg-text-primary rounded-full origin-center"
                  />
                </div>
              </button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg-deep/98 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-6">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-4 text-xl font-semibold text-text-secondary hover:text-text-primary border-b border-white/5 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Link
                  href="#early-access"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Get Early Access
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
