# Allowlisting

Ceiling-only is not the product. The channel already does that. Tab owns **who** the agent may pay.

Policy `allowlist[]` holds payee pubkeys and pay.sh merchant ids — not random API hostnames.

## What belongs on the list

- pay.sh (inference / API gateway)
- Alibaba Cloud inference (launch payee on Foundation channels)
- A specific MCP or deploy program you named

## What happens on a miss

A voucher to a payee **not** on the allowlist cannot settle. The agent sees a hard fail. That path is part of the demo: allowlist miss, ceiling hit, and freeze are three different stops.

Coming this sprint: policy account enforcement before settle.
