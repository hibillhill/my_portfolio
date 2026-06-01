import type { Dictionary } from "./types";

export const zh: Dictionary = {
  meta: {
    siteName: "Hillers Choi",
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
      "（ 你好！我是 Hillers Choi，來自香港的 UI/UX 設計師。我專注於在使用者需求與商業目標之間取得平衡。 ）",
    nameLine1: "hillers",
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
      },
      {
        id: "neon",
        index: 2,
        title: "Neon Commerce — 品牌官網",
        description: "在視覺張力與轉換導向 UX 之間取得平衡的電商體驗。",
        tags: ["網頁設計", "設計系統"],
        color: "bg-[#FFF3B0]",
      },
      {
        id: "pulse",
        index: 3,
        title: "Pulse Health — 健康儀表板",
        description: "為醫護與病患設計的清晰數據視覺層級。",
        tags: ["Dashboard", "B2B"],
        color: "bg-[#B8F0D4]",
      },
    ],
  },
  about: {
    headline: ["一起", "創造", "些什麼。"],
    headlineParen:
      "（ 我致力於開發獨特的設計方案，平衡使用者同理心與商業影響力。 ）",
    hiTitle: "hi-im hillers",
    role: "UI/UX 設計師 & 用研",
    bio1:
      "定居香港的 UI/UX 設計師，專注產品設計、使用者研究與設計系統。我喜歡創造清晰、大膽且具目的性的介面體驗。",
    bio2:
      "航空 hospitality 背景教會我在壓力下保持沉著、嚴謹溝通與深度同理 — 這些能力貫穿我的每一次設計評審與跨職能工作坊。",
    bio3: "我開放正職、自由接案與同業設計交流，準備迎接新的挑戰。",
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
      },
      {
        id: "neon",
        index: 2,
        title: "Neon Commerce",
        description: "Z 世代電商 — 設計系統 + 轉換導向流程。",
        tags: ["網頁設計"],
        color: "bg-[#FFF3B0]",
      },
      {
        id: "pulse",
        index: 3,
        title: "Pulse Health",
        description: "B2B 健康儀表板 — 雙角色視圖。",
        tags: ["Dashboard"],
        color: "bg-[#B8F0D4]",
      },
      {
        id: "retro",
        index: 4,
        title: "Retrofolio",
        description: "探索 Y2K 與極簡語言的個人作品集。",
        tags: ["品牌", "前端"],
        color: "bg-[#FFD0E0]",
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
    copyright: "© 2026 Hillers Choi. 版權所有。",
    sitemap: "網站地圖",
    social: "社群",
    legal: "法律",
    terms: "條款",
    privacy: "隱私",
    cookies: "Cookies",
    links: { home: "主頁", about: "關於我", portfolio: "作品集" },
    legalPlaceholder: "法律條款內容將於稍後補充，此為原型占位文字。",
  },
  connect: {
    title: "聯絡",
    text: "歡迎合作、商業諮詢與設計同業交流。",
    email: "hillers.choi@example.com",
    close: "關閉",
  },
  lang: {
    label: "EN",
  },
};
