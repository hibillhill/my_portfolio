# Hill Choi — Modern Y2K Portfolio

Modern Y2K / Cyber-Brutalism 風格的 UI/UX Designer 求職作品集，使用 Next.js App Router、TypeScript、Tailwind CSS、lucide-react 與 next-themes 建置。

## 技術棧

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**（自定義 Y2K 色彩、hard-shadow、marquee 動畫）
- **Google Fonts**: Space Grotesk、Silkscreen、Inter、Roboto Mono
- **lucide-react** + **next-themes**

## 開始使用

```bash
npm install
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000)

## 路由

| 路徑 | 說明 |
|------|------|
| `/` | 首頁 Hero、技能卡牌、精選專案 |
| `/portfolio` | 作品集畫廊 + 復古搜尋 |
| `/portfolio/[id]` | 專案 Case Study |
| `/about` | 關於我 + 聯絡表單 |

## 專案結構

```
app/
  layout.tsx
  page.tsx
  portfolio/
  about/
components/
  Header.tsx, Footer.tsx, Marquee.tsx
  RetroWindow.tsx, ProjectCard.tsx
  ProjectSearch.tsx, ContactForm.tsx
lib/
  data.ts, types.ts
```

## 自訂內容

編輯 `lib/data.ts` 更新專案、技能與社群連結。
