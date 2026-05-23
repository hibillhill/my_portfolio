import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <div className="retro-window p-10">
        <p className="font-pixel text-6xl text-y2k-pink dark:text-y2k-green">404</p>
        <p className="mt-4 font-mono text-sm">PAGE NOT FOUND.exe</p>
        <Link href="/" className="retro-btn mt-6 inline-flex">
          返回首頁
        </Link>
      </div>
    </div>
  );
}
