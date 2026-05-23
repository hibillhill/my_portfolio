import type { Metadata } from "next";
import {
  Inter,
  Roboto_Mono,
  Space_Grotesk,
  Silkscreen,
} from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-silkscreen",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hill Choi — UI/UX Designer",
    template: "%s | Hill Choi",
  },
  description:
    "Hill Choi 的 Modern Y2K 風格求職作品集 — UI/UX Designer，在使用者需求與商業目標之間打造卓越體驗。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${silkscreen.variable} ${robotoMono.variable} y2k-grid-bg min-h-screen`}
      >
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <div
              className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
              aria-hidden
            >
              <span className="absolute left-[8%] top-[20%] animate-float font-pixel text-y2k-pink opacity-40 dark:opacity-80">
                ✧
              </span>
              <span className="absolute right-[12%] top-[35%] animate-blink font-pixel text-y2k-cyan dark:text-y2k-green">
                ✦
              </span>
              <span className="absolute bottom-[25%] left-[15%] animate-float font-pixel text-y2k-green opacity-50">
                ☆
              </span>
            </div>
            <Marquee />
            <Header />
            <main className="relative z-10 mx-auto w-full max-w-6xl flex-1 px-4 py-10 md:px-6 md:py-14">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
