# Session keys

Created at `open`. Lives in the agent environment. Signs vouchers only.

It cannot:

- `withdraw_payer`
- change policy
- drain leftover
- freeze or unfreeze (the human does that)

Never put the human root key in the agent process env. That is an acceptance test.

If the session key leaks, freeze the tab. Unused USDC still returns to the human. You do not rotate the root wallet to stop spend.
