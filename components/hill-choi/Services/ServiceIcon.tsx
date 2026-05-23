import styles from "./ServiceIcon.module.css";

type Variant = "lines" | "texture" | "strokes";

interface ServiceIconProps {
  variant: Variant;
}

export function ServiceIcon({ variant }: ServiceIconProps) {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 120 80"
      fill="none"
      aria-hidden
    >
      <path
        d="M10 70 Q60 5 110 70"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {variant === "lines" && (
        <>
          <path d="M28 58 Q45 42 58 58" stroke="currentColor" strokeWidth="2.5" />
          <path d="M38 52 Q55 36 68 52" stroke="currentColor" strokeWidth="2.5" />
          <path d="M48 46 Q65 30 78 46" stroke="currentColor" strokeWidth="2.5" />
        </>
      )}
      {variant === "texture" && (
        <>
          <rect x="32" y="38" width="14" height="10" fill="currentColor" opacity="0.5" />
          <rect x="50" y="42" width="18" height="12" fill="currentColor" opacity="0.65" />
          <rect x="42" y="52" width="22" height="10" fill="currentColor" opacity="0.4" />
          <rect x="62" y="36" width="12" height="14" fill="currentColor" opacity="0.55" />
        </>
      )}
      {variant === "strokes" && (
        <>
          <path
            d="M35 55 Q50 35 65 50"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M48 48 Q62 28 78 42"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M55 58 Q72 45 85 55"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}
