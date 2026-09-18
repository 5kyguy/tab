import { useState } from "react";

export function DemoCta() {
  const [soon, setSoon] = useState(false);

  function showSoon() {
    setSoon(true);
    window.setTimeout(() => setSoon(false), 1800);
  }

  return (
    <button type="button" className="cta-secondary" onClick={showSoon}>
      <span className="cta-swap">
        <span className={soon ? "is-hidden" : undefined}>View demo</span>
        <span className={soon ? undefined : "is-hidden"} aria-live="polite">
          Coming soon
        </span>
      </span>
    </button>
  );
}
