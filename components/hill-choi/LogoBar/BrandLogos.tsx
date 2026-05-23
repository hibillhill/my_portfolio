type BrandLogoProps = {
  name: string;
};

export function BehanceLogo({ name }: BrandLogoProps) {
  return (
    <svg viewBox="0 0 80 24" fill="currentColor" aria-label={name}>
      <text x="0" y="18" fontSize="18" fontWeight="700" fontFamily="Arial, sans-serif">
        Bē
      </text>
    </svg>
  );
}

export function GoogleLogo({ name }: BrandLogoProps) {
  return (
    <svg viewBox="0 0 74 24" fill="currentColor" aria-label={name}>
      <text x="0" y="17" fontSize="15" fontWeight="500" fontFamily="Arial, sans-serif">
        Google
      </text>
    </svg>
  );
}

export function AppleLogo({ name }: BrandLogoProps) {
  return (
    <svg viewBox="0 0 24 28" fill="currentColor" aria-label={name}>
      <path d="M18.7 14.6c0-2.8 2.3-4.1 2.4-4.2-1.3-1.9-3.3-2.2-4-2.2-1.7-.2-3.3 1-4.2 1-0.9 0-2.2-1-3.6-1-1.8 0-3.5 1.1-4.4 2.7-1.9 3.3-0.5 8.1 1.3 10.8 0.9 1.3 1.9 2.7 3.3 2.7 1.3-.1 1.8-.8 3.4-.8s2 0.8 3.3 0.8c1.4 0 2.2-1.3 3.1-2.6 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.8-1.1-2.8-4.3zM15.5 4.6c0.7-0.9 1.2-2.1 1.1-3.3-1.1 0-2.4 0.7-3.1 1.6-0.7 0.8-1.2 2-1 3.2 1.2 0.1 2.4-0.6 3-1.5z" />
    </svg>
  );
}

export function DribbbleLogo({ name }: BrandLogoProps) {
  return (
    <svg viewBox="0 0 90 24" fill="currentColor" aria-label={name}>
      <text x="0" y="17" fontSize="15" fontStyle="italic" fontFamily="Georgia, serif">
        Dribbble
      </text>
    </svg>
  );
}

export function AwwwardsLogo({ name }: BrandLogoProps) {
  return (
    <svg viewBox="0 0 110 24" fill="currentColor" aria-label={name}>
      <text x="0" y="17" fontSize="14" fontWeight="600" letterSpacing="0.08em" fontFamily="Arial, sans-serif">
        awwwards.
      </text>
    </svg>
  );
}
