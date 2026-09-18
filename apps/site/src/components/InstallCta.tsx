import { useState } from "react";
import { INSTALL_CMD } from "../brand";

export function InstallCta() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(INSTALL_CMD);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button type="button" className="cta-primary" onClick={copy}>
      <span className="cta-swap">
        <span className={copied ? "is-hidden" : undefined}>{INSTALL_CMD}</span>
        <span className={copied ? undefined : "is-hidden"} aria-live="polite">
          copied
        </span>
      </span>
    </button>
  );
}
