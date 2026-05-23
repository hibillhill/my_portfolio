import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { RetroWindow } from "@/components/RetroWindow";
import { Heart, Plane, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "關於我",
  description:
    "認識 Hill Choi — UI/UX Designer，航空服務業背景轉換的設計師，具備同理心與團隊協作精神。",
};

const traits = [
  {
    icon: Heart,
    title: "同理心與溝通",
    text: "航空業高強度服務經驗，讓我能在壓力下保持清晰溝通，換位思考使用者與利害關係人的需求。",
  },
  {
    icon: Plane,
    title: "嚴謹執行力",
    text: "習慣 SOP 與細節檢核，確保設計交付從研究、原型到開發交接都具可追蹤性。",
  },
  {
    icon: Users,
    title: "團隊協作",
    text: "積極開拓、樂於跨職能合作，能將設計決策轉譯為工程與商業夥伴可執行的語言。",
  },
  {
    icon: Zap,
    title: "設計 × 商業",
    text: "每個設計選擇都對齊可衡量的目標 — 在體驗品質與商業成果之間找到最佳解。",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-14 md:space-y-20">
      <header className="space-y-4">
        <p className="font-pixel text-xs uppercase tracking-widest text-y2k-pink dark:text-y2k-green">
          ✧ About Hill — CD Insert
        </p>
        <h1 className="font-display text-3xl font-bold md:text-5xl">
          <span className="holographic-text">關於我</span>
        </h1>
        <p className="max-w-2xl font-mono text-sm leading-relaxed md:text-base">
          我是 Hill Choi，前端 / UI/UX Designer。我相信好的設計不只是好看，
          而是能讓使用者感到被理解，同時為品牌創造可衡量的價值。
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        <RetroWindow title="bio.txt — 個人簡介">
          <div className="space-y-4 font-mono text-sm leading-relaxed">
            <p>
              從航空服務業轉入設計領域，我帶來的不是履歷上的一行字，而是對
              <strong className="text-y2k-pink dark:text-y2k-green">
                {" "}
                高壓溝通、流程嚴謹與使用者情緒
              </strong>
              的深度理解。這些經驗直接轉化為我在 UX Research 與 Service Design
              中的優勢。
            </p>
            <p>
              目前專注於 Web / App 體驗設計，並具備 React、Next.js
              前端實作能力，能獨立完成從研究、原型到可互動交付的完整流程。
            </p>
            <p className="border-l-4 border-y2k-pink pl-4 dark:border-y2k-green">
              「設計為人，亦為商業。」— 這是我每個專案的出發點。
            </p>
          </div>
        </RetroWindow>

        <div className="space-y-4">
          {traits.map((trait) => (
            <div
              key={trait.title}
              className="retro-window flex gap-4 !p-4 transition-transform hover:-translate-y-0.5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-black bg-y2k-cyan dark:border-y2k-green dark:bg-black">
                <trait.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold">{trait.title}</h3>
                <p className="mt-1 font-mono text-xs leading-relaxed opacity-90">
                  {trait.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section id="contact" className="scroll-mt-24">
        <h2 className="mb-4 font-display text-2xl font-bold">
          聯絡我 <span className="animate-blink text-y2k-pink">✧</span>
        </h2>
        <p className="mb-8 max-w-2xl font-mono text-sm leading-relaxed opacity-90 md:text-base">
          歡迎設計同業交流作品與方法、討論 UX 趨勢，也開放品牌方與團隊洽詢合作 —
          無論是產品策略、介面優化或設計顧問，我都很樂意聊聊如何讓體驗與商業目標一起變好。
        </p>
        <ContactForm />
      </section>
    </div>
  );
}
