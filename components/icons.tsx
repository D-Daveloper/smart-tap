/**
 * Lucide-derived icons, inlined so no runtime dependency is needed.
 * Each takes size + inherits `currentColor` unless told otherwise.
 */
type IconProps = { size?: number; className?: string; style?: React.CSSProperties };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** The NFC mark. `animated` pulses the arcs outward. */
export function NfcIcon({
  size = 24,
  strokeWidth = 1.6,
  animated = false,
  stroke = "currentColor",
  className = "",
  style,
}: IconProps & { strokeWidth?: number; animated?: boolean; stroke?: string }) {
  const arc = animated ? "nfc-wave" : "";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} stroke={stroke} strokeWidth={strokeWidth} className={className} style={style}>
      <path className={arc} style={{ animationDelay: "0.5s" }} d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
      <path className={arc} style={{ animationDelay: "0.25s" }} d="M7.8 16.2a5.9 5.9 0 0 1 0-8.4" />
      <circle cx="12" cy="12" r="2" />
      <path className={arc} style={{ animationDelay: "0.25s" }} d="M16.2 7.8a5.9 5.9 0 0 1 0 8.4" />
      <path className={arc} style={{ animationDelay: "0.5s" }} d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1" />
    </svg>
  );
}

export function StarIcon({ size = 14, fill = "var(--color-accent)", className = "", style }: IconProps & { fill?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="none" className={className} style={style}>
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
    </svg>
  );
}

export function StarOutlineIcon({ size = 26, strokeWidth = 1.3, style }: IconProps & { strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={strokeWidth} style={style}>
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 17, strokeWidth = 1.7, className = "" }: IconProps & { strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={strokeWidth} className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
    </svg>
  );
}

export function PhoneScreenIcon({ size = 26, strokeWidth = 1.3, style }: IconProps & { strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={strokeWidth} style={style}>
      <rect x="5" y="2" width="14" height="20" rx="2.5" />
      <path d="M10 18h4" />
    </svg>
  );
}

export function BookIcon({ size = 16, stroke = "currentColor" }: IconProps & { stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} stroke={stroke} strokeWidth={1.6}>
      <path d="M12 7v14" />
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
    </svg>
  );
}

export function PinIcon({ size = 16, stroke = "currentColor" }: IconProps & { stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} stroke={stroke} strokeWidth={1.6}>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function InstagramIcon({ size = 16, stroke = "currentColor" }: IconProps & { stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} stroke={stroke} strokeWidth={1.6}>
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

export function PhoneIcon({ size = 16, stroke = "currentColor" }: IconProps & { stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} stroke={stroke} strokeWidth={1.6}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function CheckIcon({ size = 15, stroke = "var(--color-accent)", style }: IconProps & { stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} stroke={stroke} strokeWidth={2} style={style}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function CheckCircleIcon({ size = 34, stroke = "var(--color-accent-300)", style }: IconProps & { stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} stroke={stroke} strokeWidth={1.5} style={style}>
      <circle cx="12" cy="12" r="10" />
      <path d="m8.5 12.5 2.5 2.5 5-5" />
    </svg>
  );
}

export function QuoteIcon({ size = 22, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="var(--color-accent)" stroke="none" style={style}>
      <path d="M7 6c-2.2 0-4 1.8-4 4s1.8 4 4 4c.3 0 .6 0 .9-.1C7.4 16.3 5.6 18 3 18v2c5 0 8-3.6 8-8V6H7zm10 0c-2.2 0-4 1.8-4 4s1.8 4 4 4c.3 0 .6 0 .9-.1C17.4 16.3 15.6 18 13 18v2c5 0 8-3.6 8-8V6h-4z" />
    </svg>
  );
}

export function MoonIcon({ size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={1.6}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

export function SunIcon({ size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={1.6}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4" />
    </svg>
  );
}
