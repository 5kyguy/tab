# Spend channels

A Tab is a USDC payment channel: the human escrows a **ceiling**, the agent signs cumulative off-chain vouchers, settle happens on Solana.

The channel already *is* a spending limit. Tab does not invent a new payment protocol. It opens, settles, and closes Foundation channels, and binds a policy hash at `open`.

## Open

```bash
tab open --usdc 2 --max-call 0.02 --allow pay.sh,alibaba
```

Deposit plus policy (max per call, allowlist, expiry) are committed when the human signs.

## Settle

The agent session key signs vouchers only. Settle / distribute moves funds to allowlisted payees. The agent cannot `withdraw_payer`, change policy, or take leftover.

## Close

Unused USDC returns to the human after close. Freeze is how the human seals the tab before leftover is returned.

Coming this sprint: a working `open` against the Foundation program on devnet.
