import type { Project, SkillBadge } from "./types";

export const skillBadges: SkillBadge[] = [
  { name: "Figma", category: "design", emoji: "◈" },
  { name: "Adobe CC", category: "design", emoji: "◆" },
  { name: "UI Systems", category: "design", emoji: "✦" },
  { name: "User Research", category: "design", emoji: "◎" },
  { name: "HTML/CSS", category: "frontend", emoji: "▣" },
  { name: "React", category: "frontend", emoji: "⚡" },
  { name: "Next.js", category: "frontend", emoji: "◉" },
  { name: "TypeScript", category: "frontend", emoji: "⌘" },
  { name: "Tailwind", category: "frontend", emoji: "◇" },
  { name: "Prototyping", category: "process", emoji: "✧" },
  { name: "A11y", category: "process", emoji: "☆" },
  { name: "Design Ops", category: "process", emoji: "✴" },
];

export const projects: Project[] = [
  {
    id: "skyline-air",
    title: "Skyline Air — 航空自助報到 App Redesign",
    summary:
      "重塑高壓服務場景下的自助報到流程，降低焦慮感並提升完成率。",
    thumbnailGradient: "from-y2k-cyan via-y2k-pink to-y2k-green",
    folderColor: "bg-y2k-cyan",
    tags: ["App Redesign", "UI Research", "Service Design", "Mobile UX"],
    overview: {
      challenge:
        "旅客在時間壓力下操作複雜介面，錯誤率高且客服負荷沉重。",
      goal: "打造清晰、可預期的報到動線，讓不同年齡層都能快速完成。",
    },
    userResearch:
      "透過 12 場機場現場觀察與 8 位使用者訪談，發現痛點集中在「資訊過載」「錯誤無法挽回」與「缺乏進度感」。將高頻失敗步驟製成旅程地圖，鎖定 3 個關鍵斷點優先迭代。",
    designProcess:
      "以航空業服務標準為基礎，重新設計資訊架構：單屏一任務、即時狀態回饋、錯誤可回溯。視覺採高對比與大字級，商業上預期降低 15% 櫃檯分流壓力並提升 NPS。",
    resultsReflection:
      "原型測試完成率由 68% 提升至 89%；平均完成時間縮短 40 秒。此專案讓我將服務業同理心轉化為可落地的 UX 策略。",
  },
  {
    id: "neon-commerce",
    title: "Neon Commerce — 潮流電商 Web Experience",
    summary:
      "為 Gen-Z 品牌打造高能量電商體驗，平衡視覺張力與轉換率。",
    thumbnailGradient: "from-y2k-pink via-purple-500 to-y2k-cyan",
    folderColor: "bg-y2k-pink",
    tags: ["Web Design", "E-commerce", "Design System", "Conversion"],
    overview: {
      challenge: "品牌調性強烈但既有網站轉換率低，跳出率高。",
      goal: "建立可擴充的 Design System，在狂野視覺下維持購物流暢度。",
    },
    userResearch:
      "分析熱圖與 200+ 問卷，發現使用者喜歡品牌氛圍卻在「找商品」與「結帳」階段流失。競品分析顯示過度動畫會拖慢決策。",
    designProcess:
      "制定 Y2K 元件庫與互動規範：動效僅用於回饋而非裝飾。商品卡、篩選與 CTA 採一致硬陰影語言；商業 KPI 對齊加購率與結帳完成率。",
    resultsReflection:
      "上線後轉換率 +22%、平均停留時間 +35%。證明強烈風格與良好 UX 可以共存。",
  },
  {
    id: "pulse-health",
    title: "Pulse Health — 健康管理 Dashboard",
    summary:
      "將複雜健康數據轉為可理解的視覺故事，支援醫療新創 B2B 銷售。",
    thumbnailGradient: "from-y2k-green via-emerald-400 to-y2k-cyan",
    folderColor: "bg-y2k-green",
    tags: ["UI Research", "Dashboard", "Data Viz", "B2B SaaS"],
    overview: {
      challenge: "醫護與病患對同一數據理解落差大，儀表板資訊層級混亂。",
      goal: "設計雙角色視圖，讓專業數據與日常行動建議並存。",
    },
    userResearch:
      "與 5 位護理師、10 位慢性病患者進行 co-design workshop。痛點包含術語障礙、警報疲勞與缺乏下一步行動引導。",
    designProcess:
      "建立「洞察 → 建議 → 行動」三層資訊模型；關鍵指標用色彩編碼但保留無障礙對比。與工程對齊元件 API，確保設計系統可維護。",
    resultsReflection:
      "試用客戶 demo 成交率提升 30%；使用者回報「終於看得懂」。我學到 B2B 設計的核心是降低決策成本。",
  },
  {
    id: "retrofolio",
    title: "Retrofolio — Y2K 個人作品集網站",
    summary: "本網站 — 將設計師身份與前端能力整合為沉浸式品牌體驗。",
    thumbnailGradient: "from-y2k-pink via-y2k-cyan to-y2k-green",
    folderColor: "bg-y2k-pink",
    tags: ["Web Design", "Next.js", "Branding", "Front-End"],
    overview: {
      challenge: "傳統作品集無法傳達個人風格與跨領域能力。",
      goal: "打造可記憶、可互動、仍符合求職專業度的數位名片。",
    },
    userResearch:
      "訪談 6 位 HR 與設計主管，確認他們在 30 秒內最想看到：角色定位、代表性專案、聯絡方式。",
    designProcess:
      "以 Modern Y2K 為視覺語言，復古視窗元件承載專業 Case Study；深色模式加入霓虹光暈但不影響可讀性。",
    resultsReflection:
      "完成全站 RWD、主題切換與即時搜尋；證明我能從 0 到 1 交付設計 + 前端整合專案。",
  },
];

export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  email: "mailto:hill.choi@example.com",
};

export const marqueeTexts = [
  "DESIGNING FOR HUMANS & BUSINESS",
  "LET'S BUILD SOMETHING COOL",
  "HILL CHOI — UI/UX DESIGNER",
  "USER NEEDS × BUSINESS GOALS",
  "OPEN TO OPPORTUNITIES ✧",
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
