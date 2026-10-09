import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-shell grid gap-7 py-9 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <p className="text-base font-semibold tracking-tight text-white">AN Digital Studio<span className="text-blue-400">.</span></p>
          <p className="mt-2 max-w-md text-xs leading-5 text-slate-400">
            Websites and enquiry systems for UK trades businesses. Clear scope, considered design and dependable delivery.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <Link href="/work" className="footer-link">Work</Link>
          <Link href="/about" className="footer-link">About</Link>
          <Link href="/privacy" className="footer-link">Privacy</Link>
          <a href="mailto:hello@andigitalstudio.com" className="footer-link">hello@andigitalstudio.com</a>
        </div>
        <p className="text-xs text-slate-500 sm:col-span-2">© {new Date().getFullYear()} AN Digital Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}
