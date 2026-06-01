# Hillers Choi — Portfolio (ChungiYoo-inspired)

極簡、大膽排版的 UI/UX 設計師求職作品集原型，視覺風格參考 [chungiyoo.com](https://chungiyoo.com/)。

## 頁面

| 路由 | 說明 |
|------|------|
| `/` | 主頁 — Hero、跑馬燈、精選作品 |
| `/about` | 關於我 — 經歷、特質、專注領域 |
| `/portfolio` | 作品集 — 特質、作品、軟體工具 |

## 功能

- 中 / 英切換（Header 右上角）
- Connect 按鈕（彈窗聯絡）
- Footer：© 2026、網站地圖、Instagram / Facebook / Threads、Legal 彈窗（Terms / Privacy / Cookies）
- 響應式（手機 / 平板 / 桌面）

## 開發

```bash
npm install
npm run dev
```

## 結構

```
app/                    # 三頁路由
components/site/        # Header, Footer, 頁面區塊
components/i18n/        # LanguageProvider
lib/i18n/               # en.ts / zh.ts 文案
```

文案與作品請編輯 `lib/i18n/en.ts` 與 `lib/i18n/zh.ts`。
