import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hillers Choi — UI/UX Designer",
    template: "%s | Hillers Choi",
  },
  description:
    "Hillers Choi — UI/UX Designer portfolio. Human-centered design balancing user needs and business goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${dmSans.variable}`}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
