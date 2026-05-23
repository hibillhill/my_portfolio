"use client";

import { useState, type FormEvent } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  MessageSquare,
  Send,
} from "lucide-react";
import { RetroWindow } from "@/components/RetroWindow";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const initialForm: FormData = { name: "", email: "", message: "" };

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "請輸入姓名";
  else if (data.name.trim().length < 2) errors.name = "姓名至少 2 個字元";
  if (!data.email.trim()) errors.email = "請輸入 Email";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Email 格式不正確";
  if (!data.message.trim()) errors.message = "請輸入訊息";
  else if (data.message.trim().length < 10)
    errors.message = "訊息至少 10 個字元";
  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
    name: false,
    email: false,
    message: false,
  });

  const handleBlur = (field: keyof FormData) => {
    setTouched((p) => ({ ...p, [field]: true }));
    const fieldErrors = validate(form);
    setErrors((p) => ({ ...p, [field]: fieldErrors[field] }));
  };

  const handleChange = (field: keyof FormData, value: string) => {
    const next = { ...form, [field]: value };
    setForm(next);
    if (touched[field]) {
      const fieldErrors = validate(next);
      setErrors((p) => ({ ...p, [field]: fieldErrors[field] }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 1200));
      setStatus("success");
      setForm(initialForm);
      setTouched({ name: false, email: false, message: false });
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  return (
    <RetroWindow
      title="IM_HillChoi.exe — 即時通訊"
      icon={<MessageSquare className="h-3.5 w-3.5" />}
      className="max-w-xl"
    >
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {status === "success" && (
          <div
            className="flex items-start gap-2 border-2 border-black bg-y2k-green p-3 font-mono text-sm shadow-hard-sm dark:border-y2k-green"
            role="status"
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
            <div>
              <p className="font-pixel text-xs uppercase">Message Sent!</p>
              <p className="mt-1 opacity-90">感謝聯繫，我會在 1–2 個工作天內回覆 ✧</p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div
            className="flex items-start gap-2 border-2 border-black bg-y2k-pink p-3 font-mono text-sm text-white shadow-hard-sm"
            role="alert"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>傳送失敗，請稍後再試或直接寄信。</p>
          </div>
        )}

        <div>
          <label htmlFor="name" className="mb-1 block font-pixel text-[10px] uppercase">
            姓名
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            className="retro-input"
            placeholder="Your name"
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="mt-1 font-mono text-xs text-red-600 dark:text-y2k-pink">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block font-pixel text-[10px] uppercase">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            className="retro-input"
            placeholder="you@email.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="mt-1 font-mono text-xs text-red-600 dark:text-y2k-pink">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block font-pixel text-[10px] uppercase">
            訊息
          </label>
          <textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            onBlur={() => handleBlur("message")}
            className="retro-input resize-none"
            placeholder="Tell me about your project or role..."
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="mt-1 font-mono text-xs text-red-600 dark:text-y2k-pink">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="retro-btn-pink w-full sm:w-auto"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              SENDING...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              SEND MESSAGE
            </>
          )}
        </button>
      </form>
    </RetroWindow>
  );
}
