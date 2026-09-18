const lines = [
  { n: "01", label: "pay.sh  ·  inference", amount: "0.014" },
  { n: "02", label: "pay.sh  ·  RPC", amount: "0.045" },
  { n: "03", label: "alibaba  ·  inference", amount: "0.022" },
  { n: "04", label: "allowlisted MCP", amount: "0.180" },
];

export function Receipt() {
  return (
    <article className="receipt" id="demo" aria-label="Open tab receipt">
      <div className="receipt-perf" aria-hidden="true" />
      <header className="receipt-head">
        <div className="receipt-meta">
          <span>CHANNEL  ·  DEVNET</span>
          <span>VOUCHER  #04</span>
        </div>
        <h2 className="receipt-title">Open tab</h2>
        <p className="receipt-session">SESSION  sess…k4q</p>
      </header>

      <div className="receipt-rule" />

      <section className="receipt-block">
        <p className="receipt-kicker">Session ceiling</p>
        <p className="receipt-ceiling">
          2.00 <span>USDC</span>
        </p>
        <p className="receipt-kicker">Allowlisted payees</p>
        <ul className="receipt-allow">
          <li>pay.sh</li>
          <li>alibaba inference</li>
          <li>allowlisted MCP</li>
        </ul>
      </section>

      <div className="receipt-rule dashed" />

      <section className="receipt-ledger">
        <p className="receipt-kicker">Session ledger</p>
        <ol>
          {lines.map((row, i) => (
            <li
              key={row.n}
              className="receipt-line"
              style={{ animationDelay: `${0.45 + i * 0.18}s` }}
            >
              <span className="receipt-n">{row.n}.</span>
              <span className="receipt-label">{row.label}</span>
              <span className="receipt-amt">${row.amount}</span>
            </li>
          ))}
        </ol>
      </section>

      <div className="receipt-rule" />

      <dl className="receipt-totals">
        <div>
          <dt>Total charged</dt>
          <dd>$0.261 USDC</dd>
        </div>
        <div className="receipt-remain">
          <dt>Remaining</dt>
          <dd>$1.739 USDC</dd>
        </div>
      </dl>

      <div className="receipt-stamp" aria-label="Human freeze, channel sealed">
        <span className="receipt-stamp-main">HUMAN FREEZE</span>
        <span className="receipt-stamp-sub">CHANNEL SEALED</span>
      </div>

      <div className="receipt-barcode" aria-hidden="true">
        {BAR_WIDTHS.map((w, i) => (
          <span key={i} style={{ width: w }} />
        ))}
      </div>
      <p className="receipt-foot">* PAYMENT CHANNEL SESSION *</p>
    </article>
  );
}

const BAR_WIDTHS = [
  1, 3, 1, 2, 4, 1, 2, 3, 1, 4, 2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 4, 2, 1,
];
