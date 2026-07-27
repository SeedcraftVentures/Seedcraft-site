/**
 * Seedcraft Ventures — site content.
 * No CMS for v1: everything editable lives here, typed.
 * Note: no em-dashes anywhere on the site (brand rule).
 */

export type ButtonVariant = 'cream' | 'solid' | 'ghost'

export interface NavLink {
  label: string
  href: string
}

export interface VentureStatus {
  label: string
  tone: 'live' | 'building' | 'soon'
}

/** Filter buckets for the ventures grid. Keep in sync with `ventures.filters`. */
export type Stage = 'live' | 'building' | 'early'

export interface Venture {
  name: string
  desc: string
  /** where the product actually lives, e.g. "Web app" or "iOS and Android" */
  platform: string
  status: VentureStatus
  stage: Stage
  href?: string
}

/**
 * A seat we are actively recruiting for. These live in Build with us rather
 * than on the venture cards: a badge on a card is too thin a treatment for
 * something that needs the role, the project and the terms spelled out.
 */
export interface OpenRole {
  role: string
  project: string
  body: string
  equity: string
  href: string
}

export interface WorkStep {
  num: string
  title: string
  body: string
}

export const nav = {
  links: [
    { label: 'Mission', href: '#mission' },
    { label: 'How we work', href: '#how-we-work' },
    { label: 'Ventures', href: '#ventures' },
    { label: 'Games', href: '/games' },
    { label: 'Build with us', href: '#build-with-us' },
  ] as NavLink[],
  cta: { label: 'Get in touch', href: 'mailto:andre@seedcraft.co' },
}

export const hero = {
  eyebrow: 'Seedcraft: A Startup Studio',
  h1: 'Here for the Everyday Hero.',
  // rendered as forced line breaks: "Here for the" / "Everyday Hero."
  h1Lines: ['Here for the', 'Everyday Hero.'],
  // segments let us bold the middle clause without dangerouslySetInnerHTML
  lede: [
    {
      text: "Nobody sets out to be the manager their team resents, or the writer who never finishes anything. The tools we're all handed just make it hard. ",
    },
    {
      text: 'We build the ones that make being who you want to be the easy option.',
      strong: true,
    },
  ],
  buttons: [
    { label: 'See the ventures', href: '#ventures', variant: 'cream' as ButtonVariant },
    { label: 'How we work', href: '#how-we-work', variant: 'ghost' as ButtonVariant },
  ],
}

/**
 * The disambiguation band. Sits directly under the hero, before the mission,
 * because "venture studio" reads as "venture capital" to most people and the
 * correction has to land inside one screen.
 */
export const studio = {
  label: 'What we are',
  title: 'A studio, not a fund.',
  points: [
    {
      title: 'We start the companies.',
      body: 'Idea, product, first users, first revenue. Seedcraft is the founder, not the funder.',
    },
    {
      title: 'We do not write cheques.',
      body: 'No fund, no portfolio, no term sheets. If you are raising, we are not the people to call.',
    },
    {
      title: 'We build with people, not capital.',
      body: 'Every venture gets a small team who own a real share of what they build.',
    },
  ],
}

/** Matches HighlightText's segment type without the component importing content. */
export type MissionSeg = string | { hl: string } | { dim: string }

export const mission = {
  label: 'Our mission',
  /** The live mission copy. `hl` segments come up bright, the rest stays solid. */
  segments: [
    'Everyone has a picture of the person they want to be. The manager whose team actually rates them. The writer who finishes things. The one who quietly stopped smoking and never made a big deal of it. ',
    {
      dim: "Getting there rarely comes down to trying harder. Most of the tools we're handed make the good version of the job slow and awkward, and the careless version quick.",
    },
    ' So we build the other kind. Products with the ',
    { hl: 'fairness and the follow-through already in them' },
    ', so being that person costs you nothing extra.',
  ] as MissionSeg[],
  signoff: 'We are Seedcraft, here for the Everyday Hero.',
  // Long-form variant, used by the /lab typographic experiments.
  blocks: [
    { kind: 'lead', text: 'Everyone has a picture of the person they want to be.' },
    {
      kind: 'body',
      text: 'The manager whose team actually rates them. The writer who finishes things. The one who quietly stopped smoking and never made a big deal of it.',
    },
    {
      kind: 'truth',
      text: 'Getting there rarely comes down to trying harder.',
    },
    {
      kind: 'body',
      text: "Most of the tools we're handed make the good version of the job slow and awkward, and the careless version quick. That is not a failing in the person using them. It is a failing in the thing they were given.",
    },
    {
      kind: 'core',
      text: 'So we build the other kind. Products with the fairness and the follow-through already in them, so being that person costs you nothing extra.',
    },
    { kind: 'signoff', text: 'We are Seedcraft, here for the Everyday Hero.' },
  ] as { kind: 'lead' | 'body' | 'truth' | 'core' | 'signoff'; text: string }[],
}

export const howWeWork = {
  label: 'How we work',
  title: 'Build it. Prove it. Hand it to the right people.',
  sub: 'We get a product to the point where it is genuinely working, then put a team around it who own a real piece of it. We keep a stake and we stick around.',
  steps: [
    {
      num: '01',
      title: 'Build',
      body: 'We find the gap everyone walked past and build the real thing, fast. A working product, not a deck or a maybe.',
    },
    {
      num: '02',
      title: 'Prove',
      body: 'Real users, real revenue. We push to a genuine proof point before anyone says scale. Validation over vanity.',
    },
    {
      num: '03',
      title: 'Hand over',
      body: 'We bring in the right people to grow it, keep our stake, stay close, and go and start the next one.',
    },
  ] as WorkStep[],
}

export const ventures = {
  label: 'The ventures',
  title: "What we have built so far, and what we are in the middle of.",
  sub: 'Each one takes something people were already trying to do right and makes the good version the easy one. Filter by where they have got to.',
  filters: [
    { key: 'all', label: 'All' },
    { key: 'live', label: 'Live' },
    { key: 'building', label: 'Building' },
    { key: 'early', label: 'Early' },
  ],
  // NOTE: `platform` values are my best guess at where each product lives.
  // Correct any that are wrong.
  items: [
    {
      name: 'HiddenGem',
      desc: 'Uncovering remarkable talent.',
      platform: 'Web app',
      status: { label: 'Launched', tone: 'live' },
      stage: 'live',
    },
    {
      name: 'Shiftly',
      desc: 'Fair shifts in a couple of clicks.',
      platform: 'Web and mobile',
      status: { label: 'Final push', tone: 'building' },
      stage: 'building',
      href: 'https://shiftly.so',
    },
    {
      // URL (getsmokeless.io) not live yet
      name: 'Smokeless',
      desc: 'Ritual replacement, giving people control over their cravings.',
      platform: 'Mobile: iOS and Android',
      status: { label: 'Final push', tone: 'building' },
      stage: 'building',
    },
    {
      name: 'Escapage',
      desc: 'Pinterest for creative writers.',
      platform: 'Mobile: iOS and Android',
      status: { label: 'Development', tone: 'building' },
      stage: 'building',
      href: 'https://www.escapage.ink',
    },
    {
      name: 'Vent',
      desc: 'Turning the complaints of people the market stopped listening to into what gets built next.',
      platform: 'Web and mobile',
      status: { label: 'Design phase', tone: 'building' },
      stage: 'early',
      href: 'https://vented.so',
    },
    {
      name: 'Kosmos',
      desc: 'Your universe, on track.',
      platform: 'Mobile: iOS and Android',
      status: { label: 'Development', tone: 'building' },
      stage: 'building',
    },
  ] as Venture[],
}

export interface TeamMember {
  name: string
  role: string
  /** local image path (takes precedence) */
  src?: string
  /** Unsplash photo id placeholder */
  photo?: string
}

export const team = {
  label: 'Who we are',
  title: 'The people behind the pathways',
  sub: 'Small team, and we stay hands on. We build the real thing and stick with it long after launch.',
  members: [
    { src: '/Images/AndreSC.jpg', name: 'Andre Lemaitre', role: 'Founder, Seedcraft Ventures' },
    { src: '/Images/ashley.png', name: 'Ashley Goluoglu', role: 'Founder, Harika Labs, Partner' },
    { src: '/Images/Gabri.jpg', name: 'Gabriele Aimone', role: 'Founder, Grit Studios, Venture Partner (Smokeless)' },
  ] as TeamMember[],
}

/**
 * Build with us — replaces the old Partnerships section.
 * Two public tracks only. The studio co-founder search stays off the site by
 * design: it is handled directly, not advertised.
 */
export const buildWithUs = {
  label: 'Build with us',
  title: 'We build with people who own a piece of it.',
  sub: 'We do not hire freelancers to plug a gap. Every venture gets a small team who own a piece of what they make.',
  tracks: [
    {
      key: 'venture',
      title: 'Join a venture',
      body: 'Take a seat on a live venture and own a genuine share of what you build. Defined scope, real equity, no vague promises. You build alongside the studio, not underneath it.',
      note: 'The seats we are recruiting for right now are listed below.',
      cta: { label: 'Ask about a seat', href: 'mailto:andre@seedcraft.co?subject=Joining%20a%20Seedcraft%20venture' },
    },
    {
      key: 'partner',
      title: 'Partner your craft',
      body: 'If you are a solopreneur, a small agency, or a company with a skill set you could lend to a project, we would love to talk. We build with people who bring something real to the table.',
      cta: { label: 'Start a conversation', href: 'mailto:andre@seedcraft.co?subject=Partnering%20with%20Seedcraft' },
    },
  ],
  roles: {
    title: 'Who we are looking for right now',
    sub: 'Named seats on named projects. Every one of these is an equity position, not a contract.',
    items: [
      {
        role: 'Founding Go To Market Lead',
        project: 'Shiftly',
        body: 'Shiftly is built and close to launch. This is the person who takes it to market and owns that end of it: first customers, pricing, and the channels that actually move.',
        equity: 'High project equity, plus options in the studio.',
        href: 'mailto:andre@seedcraft.co?subject=Founding%20Go%20To%20Market%20Lead,%20Shiftly',
      },
      {
        role: 'Creative Producer (Marketing)',
        project: 'Seedcraft Games',
        body: 'Tick Down is in testing and in publisher conversations, with Crossword Hero behind it. This is the person who builds the audience: store presence, trailers, community, and the campaign around a launch.',
        equity: 'A mix of project equity and studio options.',
        href: 'mailto:andre@seedcraft.co?subject=Creative%20Producer,%20Seedcraft%20Games',
      },
    ] as OpenRole[],
  },
}

/**
 * Harika Labs stands on its own rather than sitting inside Build with us. It is
 * a standing relationship, not a track we are recruiting for, and it earns its
 * own surface.
 */
export const partnership = {
  label: 'Our engineering partner',
  href: 'https://harikalabs.com',
  title: 'Built in partnership with Harika Labs.',
  body: 'Seedcraft recognises and highly values a long-standing partnership with Harika Labs, who take care of the engineering finesse, turning early prototypes into properly built products.',
  recommend:
    'We highly recommend Harika Labs if you are looking for an expert engineering partner for any product.',
  link: 'Visit Harika Labs',
}

export const cta = {
  title: 'Want to build one of these with us?',
  body: 'Every venture gets a small team who own a real piece of it. If you build things, or you have used something that made the right way harder than it needed to be, get in touch.',
  button: { label: 'Get in touch', href: 'mailto:andre@seedcraft.co' },
}

export const footer = {
  blurb: 'A startup studio for the Everyday Hero. We start the companies and build them ourselves.',
  columns: [
    {
      title: 'Ventures',
      links: [
        { label: 'HiddenGem', href: '/#ventures' },
        { label: 'Shiftly', href: 'https://shiftly.so' },
        { label: 'Vent', href: 'https://vented.so' },
        { label: 'Smokeless', href: '/#ventures' },
        { label: 'Escapage', href: 'https://www.escapage.ink' },
        { label: 'Kosmos', href: '/#ventures' },
      ],
    },
    {
      title: 'Games',
      links: [
        { label: 'Seedcraft Games', href: '/games' },
        { label: 'Tick Down', href: '/games/tick-down' },
        { label: 'For publishers', href: '/games#publishers' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Mission', href: '/#mission' },
        { label: 'How we work', href: '/#how-we-work' },
        { label: 'Ventures', href: '/#ventures' },
        { label: 'Build with us', href: '/#build-with-us' },
      ],
    },
    {
      title: 'Contact',
      links: [{ label: 'andre@seedcraft.co', href: 'mailto:andre@seedcraft.co' }],
    },
  ],
  legal: {
    copyright: '© 2026 Seedcraft Ventures',
    location: 'Auchterarder, Scotland',
  },
}
