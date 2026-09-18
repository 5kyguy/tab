import { DemoCta } from "../components/DemoCta";
import { InstallCta } from "../components/InstallCta";
import { MarketingNav } from "../components/MarketingNav";
import { Receipt } from "../components/Receipt";
import { Wordmark } from "../components/Wordmark";

export function Landing() {
  return (
    <div className="landing">
      <div className="landing-atmosphere" aria-hidden="true" />
      <div className="landing-watermark" aria-hidden="true" />
      <MarketingNav />
      <main className="hero">
        <div className="hero-copy">
          <Wordmark size="hero" />
          <h1 className="hero-headline">A bar tab for coding agents.</h1>
          <p className="hero-support">
            Deposit USDC, allowlist payees, give the agent a session key—not
            your wallet. Every spend leaves a receipt. Freeze anytime.
          </p>
          <div className="hero-ctas">
            <InstallCta />
            <DemoCta />
          </div>
        </div>
        <div className="hero-visual">
          <Receipt />
        </div>
      </main>
      <footer className="landing-foot">
        <span className="landing-dot" aria-hidden="true" />
        <span>SOLANA PAYMENT CHANNELS</span>
      </footer>
    </div>
  );
}
