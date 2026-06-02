import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { AmbientBackground } from "@/components/site/AmbientBackground";
import { SiteLines } from "@/components/site/SiteLines";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hill Choi — UI/UX Designer",
    template: "%s | Hill Choi",
  },
  description:
    "Hill Choi — UI/UX Designer portfolio. Human-centered design balancing user needs and business goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        <LanguageProvider>
          <AmbientBackground />
          <SiteLines />
          <ScrollProgress />
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
