# Freeze

Freeze is a **human** action: `tab freeze` → channel `request_close` / seal.

It is not “the ceiling was hit.” Those are two stops:

| Event | Who | What |
| ----- | --- | ---- |
| Ceiling hit | Protocol | Further vouchers over remaining cannot settle. Agent stops. |
| Freeze | Human | Invalidates further settles. Tab is sealed. |
| Allowlist miss | Policy | Payee not permitted. Hard fail. |

Stamp copy on the landing receipt is `HUMAN FREEZE` / `CHANNEL SEALED` — not “limit reached.”

After freeze, leftover USDC returns to the human on close.
