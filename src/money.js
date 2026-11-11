/** Formats a raw USDC amount (6 decimals, a bigint) with exactly 2 decimals, rounding down. */
export function formatUsdc(raw) {
  const cents = raw / 10_000n;
  const whole = cents / 100n;
  const frac = (cents % 100n).toString().padStart(2, '0');
  return `${whole === 0n ? '' : whole}.${frac}`;
}
