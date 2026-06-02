import Link from "next/link";

export default function NotFound() {
  return (
    <div className="site-container flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-display text-8xl font-bold">404</p>
      <p className="mt-4 font-body text-sm uppercase tracking-widest">Page not found</p>
      <Link href="/" className="btn-connect mt-8">
        Home
      </Link>
    </div>
  );
}
