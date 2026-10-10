import Link from "next/link";

function getCalUrl() {
  const value = process.env.NEXT_PUBLIC_CAL_URL?.trim();
  return value && value.startsWith("https://cal.com/") ? value : null;
}

export default function SiteFooter() {
  const calUrl = getCalUrl();

  return (
    <footer className="site-footer">
      <div className="container-shell grid gap-7 py-9 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <p className="text-base font-semibold tracking-tight text-white">
            AN Digital Studio<span className="text-blue-400">.</span>
          </p>
          <p className="mt-2 max-w-md text-xs leading-5 text-slate-400">
            Websites and enquiry systems for UK trades businesses. Clear scope,
            considered design and dependable delivery.
          </p>
        </div>

        <div className="flex max-w-xl flex-wrap items-center gap-x-5 gap-y-3 sm:justify-end">
          <Link href="/#services" className="footer-link">
            Services
          </Link>
          <Link href="/work" className="footer-link">
            Work
          </Link>
          <Link href="/about" className="footer-link">
            About
          </Link>
          <Link href="/audit" className="footer-link">
            Free review
          </Link>
          {calUrl && (
            <a
              href={calUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Book a call
            </a>
          )}
          <Link href="/privacy" className="footer-link">
            Privacy
          </Link>
          <a href="mailto:hello@andigitalstudio.com" className="footer-link">
            hello@andigitalstudio.com
          </a>
        </div>

        <p className="text-xs text-slate-500 sm:col-span-2">
          © {new Date().getFullYear()} AN Digital Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
