import { Link } from "react-router-dom";
import { GITHUB } from "../brand";

export function MarketingNav() {
  return (
    <header className="m-nav">
      <nav className="m-nav-links" aria-label="Primary">
        <Link to="/docs">Docs</Link>
        <a href={GITHUB} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </nav>
    </header>
  );
}
