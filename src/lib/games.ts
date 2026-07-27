/**
 * Seedcraft Games — the games house inside Seedcraft Ventures.
 * Same mark, same studio, its own identity and its own front door at /games.
 * Note: no em-dashes anywhere on the site (brand rule).
 */

import type { VentureStatus } from './content'

export interface GameShot {
  src: string
  alt: string
}

export interface Game {
  slug: string
  name: string
  tagline: string
  /** short line used on cards and the hub */
  blurb: string
  /** longer pitch, game page only. Each string is a paragraph. */
  body: string[]
  status: VentureStatus
  platforms: string[]
  /** what makes it worth a publisher's time */
  highlights: { title: string; body: string }[]
  /**
   * Marketing screens, rendered as plain screenshots rather than in the brand
   * parallelogram: cropping a store screenshot on the slant cuts off UI.
   * Drop files in public/Images/games/<slug>/ and list them here. An empty
   * array renders placeholder frames so the page is presentable meanwhile.
   */
  shots: GameShot[]
  /**
   * False while a title is too early to have anything worth showing. The hub
   * and the home band then stop linking to it and say so instead, rather than
   * sending a publisher to an empty page.
   */
  pageReady: boolean
  privacyHref?: string
  storeHref?: string
}

export const gamesBrand = {
  name: 'Seedcraft Games',
  /** the umbrella line, used under the lockup */
  parent: 'A Seedcraft Ventures studio',
  tagline: 'Short sessions. Real craft.',
  intro:
    'Seedcraft Games is the games house inside Seedcraft Ventures. We build word and number puzzle games that run on shared systems, so every title we ship feeds the ones already out there and the next one starts further along.',
  contact: 'andre@seedcraft.co',
}

export const games: Game[] = [
  {
    slug: 'tick-down',
    name: 'Tick Down',
    tagline: 'Letters, numbers and conundrums, against the clock and the CPU.',
    blurb: 'Three game types, one clock, and a CPU that plays to win.',
    body: [
      'Tick Down is a brain game built around one honest pressure: the clock. Letters rounds, numbers rounds and a closing conundrum, every one of them scored against a CPU opponent.',
      'You choose how long you have got. Three rounds for a coffee break, or eleven for a marathon, at easy, normal or hard. A daily challenge of three seeded puzzles runs alongside it, with a streak to keep alive and eighty one trophies behind that.',
      'It plays offline and keeps your progress on the device. There is no account and no sign-up, and the only thing that ever leaves the phone is a display name and a score, if you choose to join the leaderboards. That was a product decision rather than a shortcut, and it is a large part of why the game feels quick to open and quick to trust.',
    ],
    status: { label: 'In testing', tone: 'building' },
    platforms: ['Android'],
    highlights: [
      {
        title: 'The player picks the gap',
        body: 'Three rounds fits a coffee break, eleven fills a commute, with the CPU set to easy, normal or hard. The game bends to the time somebody has rather than the other way round.',
      },
      {
        title: 'Familiar, and not',
        body: 'Letters, numbers and conundrums are instantly readable to a mass audience, and the banking and buzzing mechanics give each round a decision worth getting wrong.',
      },
      {
        title: 'Somebody to beat',
        body: 'Every game is scored against a beatable CPU, so a session ends in a result rather than a number. Medals sit on top of that, which is what makes a near miss worth replaying.',
      },
      {
        title: 'A reason to come back tomorrow',
        body: 'A daily challenge of three seeded puzzles, a streak, a clean sweep bonus, eighty one tiered trophies and a rank that climbs. The retention loop is already built and running.',
      },
      {
        title: 'Offline first, social when you want it',
        body: 'Full game with no account and no tracking, so it works on a train. Leaderboards are opt in, and a player can delete their entry from inside the app.',
      },
    ],
    shots: [
      {
        src: '/Images/games/tick-down/home.png',
        alt: 'The Tick Down home screen, with Play, Daily Challenges and a Novice rank badge',
      },
      {
        src: '/Images/games/tick-down/letters.png',
        alt: 'A letters round: nine tiles, a ten second clock, and a button to bank the best word so far',
      },
      {
        src: '/Images/games/tick-down/numbers.png',
        alt: 'A numbers round: reaching a target of 929 from six numbers using add, subtract, multiply and divide',
      },
      {
        src: '/Images/games/tick-down/conundrum.png',
        alt: 'The final conundrum round: one scrambled nine-letter word and a buzz in button',
      },
      {
        src: '/Images/games/tick-down/modes.png',
        alt: 'Choosing a game: three, five, seven or eleven rounds, at easy, normal or hard difficulty',
      },
      {
        src: '/Images/games/tick-down/daily.png',
        alt: 'The daily challenge: three seeded puzzles, a day streak, and a clean sweep bonus for finishing all three',
      },
      {
        src: '/Images/games/tick-down/trophies.png',
        alt: 'The trophy room, showing eight of eighty one trophies earned and the next one in progress',
      },
      {
        src: '/Images/games/tick-down/results.png',
        alt: 'The results screen: a final score of 590, a bronze medal, and the score set against the CPU',
      },
    ],
    pageReady: true,
    privacyHref: '/games/tick-down/privacy',
  },
  {
    slug: 'crossword-hero',
    name: 'Crossword Hero',
    tagline: 'An anagram crossword. Unscramble the letters, fill the grid.',
    blurb: 'The crossword grid, solved by anagram instead of cryptic clue. In development.',
    body: [
      'Crossword Hero is an anagram crossword. Every answer arrives as a jumble of letters, and the grid is what tells you where it belongs. Solve the anagram, place the word, and the crossings hand you the next one.',
      'It keeps what makes a crossword satisfying, the grid filling in around you, and swaps the barrier for something anyone can start immediately. There is no general knowledge to have and no clue conventions to learn. The letters are all there in front of you.',
    ],
    status: { label: 'In development', tone: 'building' },
    platforms: ['To be confirmed'],
    highlights: [
      {
        title: 'No knowledge barrier',
        body: 'Cryptic and quick crosswords both gate on what you happen to know. An anagram is solvable by anyone the moment they see it, which opens the format to a far wider audience.',
      },
      {
        title: 'Two puzzles in one',
        body: 'Each answer is an anagram, and the grid is a crossword. The crossings make the anagrams easier as you go, so difficulty falls away exactly as momentum builds.',
      },
      {
        title: 'A format that never went away',
        body: 'Crosswords have outlasted every trend in mobile gaming. The demand is proven, the on-ramp is what has always been missing.',
      },
    ],
    shots: [],
    pageReady: false,
  },
]

export function getGame(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug)
}

export const publishers = {
  label: 'For publishers',
  title: 'We are open to publishing conversations.',
  body: [
    'Seedcraft Games is small, fast and owns its work outright. Tick Down is built, in testing, and ready to talk about. Crossword Hero is in development behind it.',
    'If you publish short-session titles and want to talk about either, or about what we build next, the door is open.',
  ],
  points: [
    { title: 'Built, not pitched', body: 'Playable products, not concept decks.' },
    {
      title: 'One system, many titles',
      body: 'Our games share the same underlying systems, so each one ships faster than the last and players move between them rather than away.',
    },
    { title: 'Clean rights', body: 'Art and code owned outright by the studio, with nothing licensed in.' },
    { title: 'A studio behind it', body: 'Seedcraft Ventures ships products for a living. Games get the same discipline.' },
  ],
  cta: {
    label: 'Talk to us about publishing',
    href: 'mailto:andre@seedcraft.co?subject=Seedcraft%20Games%20publishing',
  },
}
