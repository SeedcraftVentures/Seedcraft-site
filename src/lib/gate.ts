import crypto from 'node:crypto'

/**
 * Password gate for private documents.
 *
 * The document itself lives in content/private/, never in public/, so it is
 * not a fetchable asset. The only way to it is through a route that checks the
 * cookie below.
 *
 * The cookie holds an HMAC of a fixed string keyed by the password, so:
 *   - it cannot be forged without the password
 *   - changing the password invalidates every existing session
 *   - the password itself never lands in the browser
 */

const COOKIE_PREFIX = 'sc_gate_'

function secretFor(gate: string): string | null {
  const key = `GATE_PASSWORD_${gate.toUpperCase().replace(/[^A-Z0-9]/g, '_')}`
  const value = process.env[key]
  return value && value.length > 0 ? value : null
}

export function cookieName(gate: string) {
  return COOKIE_PREFIX + gate.replace(/[^a-z0-9]/gi, '')
}

export function tokenFor(gate: string): string | null {
  const secret = secretFor(gate)
  if (!secret) return null
  return crypto.createHmac('sha256', secret).update(`gate:${gate}`).digest('hex')
}

/** Constant time, so a wrong password cannot be narrowed down by timing. */
export function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a)
  const bb = Buffer.from(b)
  if (ab.length !== bb.length) return false
  return crypto.timingSafeEqual(ab, bb)
}

export function checkPassword(gate: string, supplied: string): boolean {
  const secret = secretFor(gate)
  if (!secret) return false
  return safeEqual(supplied, secret)
}

export function isUnlocked(gate: string, cookieValue: string | undefined): boolean {
  const expected = tokenFor(gate)
  if (!expected || !cookieValue) return false
  return safeEqual(cookieValue, expected)
}

export function isConfigured(gate: string): boolean {
  return secretFor(gate) !== null
}
