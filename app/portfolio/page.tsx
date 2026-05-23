import type { Metadata } from "next";
import { PortfolioGallery } from "./PortfolioGallery";

export const metadata: Metadata = {
  title: "作品集",
  description: "Hill Choi 的 UI/UX 設計作品集 — 專案 Case Study 與設計歷程。",
};

export default function PortfolioPage() {
  return <PortfolioGallery />;
}
