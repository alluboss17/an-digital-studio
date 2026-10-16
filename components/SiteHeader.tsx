"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container-shell nav-shell">
        {/* Logo and business name */}
        <Link
          href="/"
          className="site-brand"
          aria-label="AN Digital Studio home"
          onClick={closeMenu}
        >
          <span className="brand-mark">
            <Image
              src="/logo.png"
              alt=""
              width={42}
              height={42}
              priority
              className="h-full w-full object-contain"
            />
          </span>

          <span className="brand-name">
            AN Digital Studio
            <span className="brand-dot">.</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="desktop-nav"
        >
          <Link href="/#services" className="nav-link">
            Services
          </Link>

          <Link href="/work" className="nav-link">
            Work
          </Link>

          <Link href="/about" className="nav-link">
            About
          </Link>

          <Link href="/privacy" className="nav-link">
            Privacy
          </Link>

          <Link
            href="/audit"
            className="button-primary button-small"
          >
            Free website review
            <span aria-hidden="true">↗</span>
          </Link>
        </nav>

        {/* Mobile actions */}
        <div className="mobile-actions">
          <Link
            href="/audit"
            className="button-primary button-small mobile-review-link"
            onClick={closeMenu}
          >
            Free review
            <span aria-hidden="true">↗</span>
          </Link>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-site-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav
          id="mobile-site-menu"
          aria-label="Mobile navigation"
          className="mobile-menu-panel container-shell"
        >
          <Link href="/#services" onClick={closeMenu}>
            Services
          </Link>

          <Link href="/work" onClick={closeMenu}>
            Selected work
          </Link>

          <Link href="/about" onClick={closeMenu}>
            About the studio
          </Link>

          <Link href="/privacy" onClick={closeMenu}>
            Privacy notice
          </Link>

          <Link href="/audit" onClick={closeMenu}>
            Free website review ↗
          </Link>

          <a
            href="mailto:hello@andigitalstudio.com"
            onClick={closeMenu}
          >
            Email AN Digital Studio
          </a>
        </nav>
      )}
    </header>
  );
}