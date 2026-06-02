import type { Dictionary } from "./types";
import { legalZh } from "./legal-zh";

export const zh: Dictionary = {
  meta: {
    siteName: "Hill Choi",
    role: "UI/UX 設計師",
  },
  nav: {
    home: "主頁",
    about: "關於我",
    portfolio: "作品集",
    connect: "聯絡",
  },
  home: {
    welcome: ["歡迎來到", "創意", "遊樂場"],
    playground: "遊樂場",
    of: "",
    introParen:
      "（ 你好！我是 Hill Choi，來自香港的 UI/UX 設計師。我專注於在使用者需求與商業目標之間取得平衡。 ）",
    nameLine1: "hill",
    nameLine2: "choi",
    roleLines: ["UI/UX", "設計師", "&", "用研"],
    tagline: "一起打造有意義的產品",
    marquee: [
      "空閒時你會看到我在畫介面草圖",
      "研究設計系統",
      "以及尋找好喝的咖啡",
      "空閒時你會看到我在畫介面草圖",
      "研究設計系統",
      "以及尋找好喝的咖啡",
    ],
    clickMore: "點擊查看更多",
    philosophy: "我始終致力於打造以人為本的設計方案，提升數位生活的品質。",
    worksTitle: "精選作品",
    works: [
      {
        id: "skyline",
        index: 1,
        title: "Skyline Air — 自助報到重塑",
        description: "高壓旅遊場景的服務設計，為多元使用者簡化流程。",
        tags: ["App 重塑", "用研"],
        color: "bg-[#E8D4F8]",
        image: "/images/works/skyline-air-checkin.png",
      },
      {
        id: "neon",
        index: 2,
        title: "Neon Commerce — 品牌官網",
        description: "在視覺張力與轉換導向 UX 之間取得平衡的電商體驗。",
        tags: ["網頁設計", "設計系統"],
        color: "bg-[#FFF3B0]",
        image: "/images/works/neon-commerce-brand.png",
      },
      {
        id: "pulse",
        index: 3,
        title: "Pulse Health — 健康儀表板",
        description: "為醫護與病患設計的清晰數據視覺層級。",
        tags: ["Dashboard", "B2B"],
        color: "bg-[#B8F0D4]",
        image: "/images/works/pulse-health-dashboard.png",
      },
    ],
  },
  about: {
    hiTitle: "hi-im hill",
    role: "UI/UX 設計師 & 用研",
    bio1:
      "我是定居香港的 UI/UX 設計師，專注產品設計、使用者研究與設計系統。從早期探索到高保真介面，我與團隊一起把複雜問題整理成清晰、可信的流程。我重視層級、語氣，以及載入狀態、錯誤文案、空狀態等細節——讓體驗感覺被認真對待，而不是倉促上線。",
    bio2:
      "進入設計領域前，我曾在航空 hospitality 工作，沉著應對壓力、精準溝通、真誠關懷旅客是日常。這段經歷仍影響我如何進行訪談、帶領工作坊，以及向產品與工程呈現取捨。我先聆聽、記錄洞察，再以證據而非假設來設計。",
    bio3:
      "我開放正職、自由接案與同業設計交流。無論你在打造新產品、重塑服務旅程，或從零建立設計系統，都歡迎聊聊。一起做出清晰、大膽、真正好用的體驗。",
    cta: "來聊聊吧 !",
    clientsTitle: "專注領域",
    clientsParen: "（ 橫跨網頁與行動端的產品、服務與品牌體驗。 ）",
    clients: [
      "產品設計",
      "使用者研究",
      "設計系統",
      "服務設計",
      "原型設計",
      "前端協作",
    ],
    traitsTitle: "我的工作方式",
    traits: [
      {
        title: "同理優先",
        text: "航空服務經驗 → 以真誠進行訪談與旅程地圖。",
      },
      {
        title: "嚴謹交付",
        text: "從探索到交付的結構化流程，對齊工程限制。",
      },
      {
        title: "團隊協作",
        text: "連結設計、產品與開發，用清晰敘事推動共識。",
      },
    ],
  },
  portfolio: {
    title: ["我的", "作品集", "&", "工具"],
    introParen: "（ 精選作品、個人特質，以及碩士級的設計與開發軟體。 ）",
    traitsTitle: "個人特質",
    traits: [
      {
        title: "使用者 × 商業",
        text: "設計決策錨定可衡量成果與真實痛點。",
      },
      {
        title: "視覺清晰",
        text: "受編輯與極簡網頁啟發的大膽排版與版面紀律。",
      },
      {
        title: "可落地",
        text: "熟悉 Figma 與 React — 團隊能真正交付的原型。",
      },
    ],
    worksTitle: "精選作品",
    works: [
      {
        id: "skyline",
        index: 1,
        title: "Skyline Air",
        description: "機場自助報到 App — 降低焦慮，完成率 +21%。",
        tags: ["用研", "App"],
        color: "bg-[#E8D4F8]",
        image: "/images/works/skyline-air-checkin.png",
      },
      {
        id: "neon",
        index: 2,
        title: "Neon Commerce",
        description: "Z 世代電商 — 設計系統 + 轉換導向流程。",
        tags: ["網頁設計"],
        color: "bg-[#FFF3B0]",
        image: "/images/works/neon-commerce-brand.png",
      },
      {
        id: "pulse",
        index: 3,
        title: "Pulse Health",
        description: "B2B 健康儀表板 — 雙角色視圖。",
        tags: ["Dashboard"],
        color: "bg-[#B8F0D4]",
        image: "/images/works/pulse-health-dashboard.png",
      },
    ],
    softwareTitle: "軟體與應用",
    softwareParen: "（ 研究、設計與交付時使用的碩士級工具。 ）",
    software: [
      { name: "Figma", category: "設計" },
      { name: "Adobe Creative Cloud", category: "視覺" },
      { name: "Miro / FigJam", category: "研究" },
      { name: "Principle / ProtoPie", category: "原型" },
      { name: "React / Next.js", category: "前端" },
      { name: "Notion", category: "協作" },
    ],
  },
  footer: {
    copyright: "© 2026 Hill Choi. 版權所有。",
    sitemap: "網站地圖",
    social: "社群",
    legal: "法律",
    terms: "條款",
    privacy: "隱私",
    cookies: "Cookies",
    links: { home: "主頁", about: "關於我", portfolio: "作品集" },
  },
  legal: legalZh,
  connect: {
    title: "聯絡",
    text: "歡迎合作、商業諮詢與設計同業交流。",
    email: "connect@hillchoi.com",
    close: "關閉",
  },
  lang: {
    label: "EN",
  },
};
