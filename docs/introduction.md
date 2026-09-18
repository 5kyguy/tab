# Introduction

Tab is a spend-capped runtime for coding agents.

A developer deposits a USDC ceiling into a Solana payment channel, allowlists who the agent may pay, and hands the agent a **session key** — not the wallet. Every spend leaves a receipt. Freeze is one action. Unused USDC returns.

## The problem

Coding agents now pay for inference, RPC, MCP tools, and deploys. The default is a god-mode keypair in `.env`. One prompt injection or a loop and the wallet is empty.

x402 solved “can the agent pay.” It did not solve who set the ceiling, which payees are allowed, how you freeze without rotating a leaked key, or how you replay what the agent bought.

## Who it is for

A developer running Claude Code, Cursor, or Hermes who will let an agent spend USDC this week — not the whole treasury.

Not enterprises with compliance teams. Not MCP marketplace operators. Not shopping agents.

## What Tab is

1. Human opens a channel with USDC and a policy (max per call, allowlisted payees).
2. Agent receives a session key that can only sign vouchers inside that policy.
3. Spends hit allowlisted payees (pay.sh, Alibaba inference, a specific MCP) via x402 / MPP.
4. Each spend writes a receipt: tool, reason, payee, amount, voucher index.
5. Human freeze seals the channel. Unused USDC returns.

## One-line pitch

x402 lets an agent pay. Tab decides **whether it is allowed to**, **to whom**, and **leaves a receipt you can audit**.
