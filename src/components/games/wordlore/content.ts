/**
 * Wordlore: Norse Saga, page content. Facts come from the game repo
 * (Runestone: src/content/saga.ts, src/content/realms.ts, store/shots.json,
 * store/listing.md) as of 28 September 2026. Keep them in step with the game.
 */

export const WORDLORE = {
  contact: 'admin@seedcraft.co',
  company: 'Seedcraft Ventures Ltd',
  country: 'United Kingdom',
  androidPackage: 'co.seedcraft.wordlore',
  href: '/games/wordlore',
  privacyHref: '/games/wordlore/privacy',
  supportHref: '/games/wordlore/support',
  betaHref: '/games/wordlore/beta',
}

export interface Realm {
  numeral: string
  name: string
  usurper: string
  patron: string
  stones: number
  /** ground / stone / accent, from the game's realm palettes */
  ground: string
  stone: string
  accent: string
}

export const realms: Realm[] = [
  { numeral: 'I', name: 'Midgard', usurper: 'Skarde the Liar', patron: 'Heimdall', stones: 5, ground: '#2E3A2B', stone: '#8C7B5A', accent: '#D9C28A' },
  { numeral: 'II', name: 'Alfheim', usurper: 'Gullveig, the thrice-burned', patron: 'Freyr', stones: 5, ground: '#1F3B3A', stone: '#6FAF9A', accent: '#F3E9B5' },
  { numeral: 'III', name: 'Vanaheim', usurper: 'Jörmungandr, the world serpent', patron: 'Njörðr', stones: 10, ground: '#14283D', stone: '#3F6E8C', accent: '#BFE3E8' },
  { numeral: 'IV', name: 'Svartalfheim', usurper: 'Andvari, the cursed dwarf', patron: 'Brokkr the smith', stones: 10, ground: '#1A1614', stone: '#5A4A42', accent: '#E58A2E' },
  { numeral: 'V', name: 'Jotunheim', usurper: 'Thrym, who stole the hammer', patron: 'Thor', stones: 20, ground: '#1C2633', stone: '#6C7F94', accent: '#DCE9F2' },
  { numeral: 'VI', name: 'Niflheim', usurper: 'Níðhöggr, root-gnawer', patron: 'Mímir', stones: 20, ground: '#15181C', stone: '#4A525C', accent: '#9FD4C8' },
  { numeral: 'VII', name: 'Muspelheim', usurper: 'Surtr, the fire giant', patron: 'Freyja', stones: 20, ground: '#2A0F0A', stone: '#7A2E1A', accent: '#FFB03B' },
  { numeral: 'VIII', name: 'Asgard', usurper: "Loki, on Odin's throne", patron: 'Odin, deposed', stones: 20, ground: '#1E1A2E', stone: '#4E4A7A', accent: '#F2C14E' },
  { numeral: 'IX', name: 'Helheim', usurper: 'Hel', patron: 'Baldr, held in Hel', stones: 20, ground: '#0F0F12', stone: '#3A3440', accent: '#E8DFD0' },
]

/**
 * Store captions from store/shots.json. `*...*` marks the words that glow in
 * runelight, as on the store art.
 */
export const screens: { src: string; title: string; line: string }[] = [
  { src: '/Images/games/wordlore/stone.jpg', title: 'Carve runes. *Read words.*', line: 'Roll, carve and read in a turn-based duel of wits.' },
  { src: '/Images/games/wordlore/boss.jpg', title: 'Outwit the *usurpers*', line: 'Every boss strikes with a curse: frost, fire, rot.' },
  { src: '/Images/games/wordlore/home.jpg', title: 'Free the *Nine Realms*', line: 'A Norse saga across 130 stones.' },
  { src: '/Images/games/wordlore/realms.jpg', title: 'Nine realms. *Nine usurpers.*', line: "Win stars to face each realm's generals and bosses." },
  { src: '/Images/games/wordlore/prepare.jpg', title: 'Choose your *patron*', line: 'Bring patrons, relics and wards into every fight.' },
  { src: '/Images/games/wordlore/daily.jpg', title: 'A new rune *every day*', line: 'Slide the stones until the rune is whole.' },
  { src: '/Images/games/wordlore/raid.jpg', title: 'Raid the *barrows*', line: 'Beat the draugr and the clock. Claim the hoard.' },
  { src: '/Images/games/wordlore/result.jpg', title: 'Earn stars and *hacksilver*', line: 'Three stars on every stone. Can you win them all?' },
]

/** Elder Futhark, one rune per Latin letter. Decorative: realm names in runes. */
const FUTHARK: Record<string, string> = {
  a: 'ᚨ', b: 'ᛒ', c: 'ᚲ', d: 'ᛞ', e: 'ᛖ', f: 'ᚠ', g: 'ᚷ', h: 'ᚺ', i: 'ᛁ', j: 'ᛃ',
  k: 'ᚲ', l: 'ᛚ', m: 'ᛗ', n: 'ᚾ', o: 'ᛟ', p: 'ᛈ', q: 'ᚲ', r: 'ᚱ', s: 'ᛊ', t: 'ᛏ',
  u: 'ᚢ', v: 'ᚹ', w: 'ᚹ', x: 'ᛉ', y: 'ᛃ', z: 'ᛉ',
}

export function toRunes(word: string): string {
  return word
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .split('')
    .map((ch) => FUTHARK[ch] ?? (ch === ' ' ? '᛫' : ''))
    .join('')
}
