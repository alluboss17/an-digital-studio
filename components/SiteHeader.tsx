"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container-shell nav-shell">
        {/* =========================
            LOGO
        ========================== */}
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          aria-label="AN Digital Studio home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark">
            <Image
              src="/logo-make1.png"
              alt=""
              width={42}
              height={42}
              priority
              className="h-full w-full object-contain"
            />
          </span>

          <span className="brand-name">
            AN Digital Studio<span className="brand-dot">.</span>
          </span>
        </Link>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}
        <nav
          aria-label="Main navigation"
          className="desktop-nav"
        >
          <Link
            href="/#services"
            className="nav-link"
          >
            Services
          </Link>

          <Link
            href="/work"
            className="nav-link"
          >
            Work
          </Link>

          <Link
            href="/about"
            className="nav-link"
          >
            About
          </Link>

          <Link
            href="/privacy"
            className="nav-link"
          >
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

        {/* =========================
            MOBILE ACTIONS
        ========================== */}
        <div className="mobile-actions">
          <Link
            href="/audit"
            className="button-primary button-small"
          >
            Free review
            <span aria-hidden="true">↗</span>
          </Link>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={
              menuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-site-menu"
            onClick={() =>
              setMenuOpen((open) => !open)
            }
          >
            <span aria-hidden="true">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* =========================
          MOBILE MENU
      ========================== */}
      {menuOpen && (
        <nav
          id="mobile-site-menu"
          aria-label="Mobile navigation"
          className="mobile-menu-panel container-shell md:hidden"
        >
          <Link
            href="/#services"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>

          <Link
            href="/work"
            onClick={() => setMenuOpen(false)}
          >
            Selected work
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
          >
            About the studio
          </Link>

          <Link
            href="/privacy"
            onClick={() => setMenuOpen(false)}
          >
            Privacy notice
          </Link>

          <Link
            href="/audit"
            onClick={() => setMenuOpen(false)}
          >
            Free website review
          </Link>

          <a
            href="mailto:hello@andigitalstudio.com"
            onClick={() => setMenuOpen(false)}
          >
            Email AN Digital Studio
          </a>
        </nav>
      )}
    </header>
  );
}