type MarkTone = "ink" | "paper" | "stamp";

const fills: Record<MarkTone, { plate: string; dots: string }> = {
  ink: { plate: "var(--ink)", dots: "var(--paper)" },
  paper: { plate: "var(--paper)", dots: "var(--ink)" },
  stamp: { plate: "var(--stamp)", dots: "var(--paper)" },
};

export function TabMark({
  tone = "ink",
  className = "",
}: {
  tone?: MarkTone;
  className?: string;
}) {
  const { plate, dots } = fills[tone];
  return (
    <svg
      className={`tab-mark ${className}`.trim()}
      viewBox="0 0 32 16"
      aria-hidden="true"
    >
      <rect width="32" height="16" rx="2.5" fill={plate} />
      <circle cx="8" cy="8" r="1.7" fill={dots} />
      <circle cx="16" cy="8" r="1.7" fill={dots} />
      <circle cx="24" cy="8" r="1.7" fill={dots} />
    </svg>
  );
}

export function Wordmark({
  size = "nav",
}: {
  size?: "hero" | "nav" | "docs";
}) {
  return (
    <span className={`wordmark wordmark-${size}`}>
      Tab
      <span className="wordmark-dot" aria-hidden="true" />
    </span>
  );
}
