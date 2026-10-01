/**
 * The "Seedcraft Site" Supabase project, for the website's own data (beta
 * sign-ups). This is the PUBLISHABLE key: it is meant to be in the browser.
 * Row-level security is what protects the data: with this key the public can
 * only add a sign-up, never read, change or delete one.
 */
export const SITE_SUPABASE_URL = 'https://qsrhzzsjtshiijwwbzak.supabase.co'
export const SITE_SUPABASE_KEY = 'sb_publishable_8XLUoVCJ_ghdqPmulwPgAQ_22y_ix0Y'

export type BetaPlatform = 'android' | 'ios' | 'both'

/** Adds a beta sign-up. Signing up twice counts as success: you're already on the list. */
export async function joinBeta(input: { product: string; email: string; platform: BetaPlatform; source?: string | null }): Promise<'joined' | 'already' | 'invalid' | 'failed'> {
  try {
    const res = await fetch(`${SITE_SUPABASE_URL}/rest/v1/beta_signups`, {
      method: 'POST',
      headers: { apikey: SITE_SUPABASE_KEY, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
      body: JSON.stringify({ ...input, email: input.email.trim(), source: input.source?.slice(0, 60) || null, consent: true }),
    })
    if (res.ok) return 'joined'
    const err = (await res.json().catch(() => null)) as { code?: string } | null
    if (err?.code === '23505') return 'already'
    if (res.status === 400 || err?.code === '23514') return 'invalid'
    return 'failed'
  } catch {
    return 'failed'
  }
}
