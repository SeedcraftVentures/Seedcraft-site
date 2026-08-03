/**
 * The Head of Operations deck, behind a password.
 *
 * Served by a route handler rather than a page so the original document is
 * returned byte for byte, with its own styles, untouched by the site's CSS.
 * The file lives in content/private/, so it is not in the static asset tree
 * and cannot be fetched by guessing a path.
 *
 * Set the password in .env.local (and in the host's env for production):
 *   GATE_PASSWORD_OPS="something-you-can-say-down-the-phone"
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { cookies } from 'next/headers'
import { checkPassword, cookieName, isConfigured, isUnlocked, tokenFor } from '@/lib/gate'

export const dynamic = 'force-dynamic'

const GATE = 'ops'
const DOC = 'content/private/head-of-operations.html'
const TITLE = 'Seedcraft · Head of Operations'

/* Never indexed, never cached by a shared cache. */
const HEADERS = {
  'content-type': 'text/html; charset=utf-8',
  'x-robots-tag': 'noindex, nofollow, noarchive',
  'cache-control': 'no-store, private',
  'referrer-policy': 'no-referrer',
}

function shell(body: string, status = 200) {
  return new Response(
    `<!doctype html><html lang="en-GB"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>${TITLE}</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{min-height:100dvh;display:flex;align-items:center;justify-content:center;padding:24px;
    font-family:system-ui,-apple-system,"Segoe UI",sans-serif;color:#fff;
    background:radial-gradient(ellipse at 80% 110%,#a5d68a 0%,transparent 50%),
      linear-gradient(135deg,#5fb14a 0%,#2e7d32 50%,#0b3d0b 100%)}
  .card{width:100%;max-width:420px;text-align:center}
  svg{margin:0 auto 26px;display:block}
  h1{font-size:1.6rem;font-weight:600;letter-spacing:-.4px;margin-bottom:10px}
  p{color:rgba(255,255,255,.82);line-height:1.6;font-size:15px;margin-bottom:26px}
  form{display:flex;flex-direction:column;gap:12px}
  input{padding:15px 18px;border-radius:10px;border:1px solid rgba(255,255,255,.28);
    background:rgba(255,255,255,.1);color:#fff;font:inherit;font-size:16px;text-align:center}
  input::placeholder{color:rgba(255,255,255,.55)}
  button{padding:15px 18px;border-radius:10px;border:0;background:#F2EBDD;color:#16562F;
    font:inherit;font-size:15px;font-weight:700;cursor:pointer}
  button:hover{background:#fff}
  .err{color:#ffd7a1;font-size:14px;margin-bottom:0;margin-top:4px}
  .foot{margin-top:30px;font-size:12px;letter-spacing:2px;text-transform:uppercase;
    color:rgba(255,255,255,.5)}
</style></head><body><div class="card">
<svg width="46" height="57" viewBox="0 0 551.54 686" fill="#fff" aria-hidden="true">
<path d="M301.95,33.31L123.81,211.46c-3.55,3.55-8.36,5.54-13.38,5.54H19.97c-16.86,0-25.31-20.39-13.38-32.31L184.72,6.54c3.55-3.55,8.36-5.54,13.38-5.54h90.46c16.86,0,25.31,20.39,13.38,32.31Z"/>
<path d="M288.57,451h-90.46c-5.02,0-9.83-1.99-13.38-5.54L6.58,267.31c-11.92-11.92-3.48-32.31,13.38-32.31h90.46c5.02,0,9.83,1.99,13.38,5.54l178.14,178.14c11.92,11.92,3.48,32.31-13.38,32.31Z"/>
<path d="M301.95,501.31l-178.14,178.14c-3.55,3.55-8.36,5.54-13.38,5.54H19.97c-16.86,0-25.31-20.39-13.38-32.31l178.14-178.14c3.55-3.55,8.36-5.54,13.38-5.54h90.46c16.86,0,25.31,20.39,13.38,32.31Z"/>
<path d="M544.95,267.31l-170.3,170.3c-7.39,7.39-19.38,7.39-26.77,0l-45.23-45.23c-7.39-7.39-7.39-19.38,0-26.77l125.07-125.07c3.55-3.55,8.36-5.54,13.38-5.54h90.46c16.86,0,25.31,20.39,13.38,32.31Z"/>
</svg>
${body}
<div class="foot">Seedcraft Ventures</div>
</div></body></html>`,
    { status, headers: HEADERS }
  )
}

function unlockPage(error?: string) {
  return shell(
    `<h1>This one is private.</h1>
     <p>Andre will have sent you a password along with this link.</p>
     <form method="POST" autocomplete="off">
       <input type="password" name="password" placeholder="Password" required autofocus
              aria-label="Password">
       <button type="submit">Open the deck</button>
       ${error ? `<p class="err">${error}</p>` : ''}
     </form>`,
    error ? 401 : 200
  )
}

export async function GET() {
  if (!isConfigured(GATE)) {
    return shell(
      `<h1>Not configured yet.</h1>
       <p>GATE_PASSWORD_OPS is not set in this environment, so the deck cannot be unlocked.</p>`,
      503
    )
  }

  const jar = await cookies()
  if (!isUnlocked(GATE, jar.get(cookieName(GATE))?.value)) return unlockPage()

  const html = await fs.readFile(path.join(process.cwd(), DOC), 'utf8')
  return new Response(html, { headers: HEADERS })
}

export async function POST(req: Request) {
  if (!isConfigured(GATE)) return unlockPage('Not configured.')

  const form = await req.formData()
  const supplied = String(form.get('password') ?? '')

  if (!checkPassword(GATE, supplied)) {
    // A deliberate pause: makes guessing at scale tedious without needing a
    // rate limiter, and is imperceptible to someone who typed it correctly.
    await new Promise((r) => setTimeout(r, 700))
    return unlockPage('That is not it. Check the message Andre sent you.')
  }

  const jar = await cookies()
  jar.set(cookieName(GATE), tokenFor(GATE)!, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/roles/head-of-operations',
    maxAge: 60 * 60 * 24 * 30,
  })

  const html = await fs.readFile(path.join(process.cwd(), DOC), 'utf8')
  return new Response(html, { headers: HEADERS })
}
