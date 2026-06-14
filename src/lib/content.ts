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

export interface Venture {
  name: string
  desc: string
  status: VentureStatus
  href?: string
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
  ] as NavLink[],
  cta: { label: 'Get in touch', href: 'mailto:andre@seedcraft.co' },
}

export const hero = {
  eyebrow: 'A studio for the everyday hero',
  h1: 'Here for the Everyday Hero.',
  // rendered as forced line breaks: "Here for the" / "Everyday Hero."
  h1Lines: ['Here for the', 'Everyday Hero.'],
  // segments let us bold the middle clause without dangerouslySetInnerHTML
  lede: [
    { text: 'The world has a way of slowing people down. ' },
    { text: 'We build the products that clear the obstacles', strong: true },
    {
      text: ', and open new pathways to the lives people are trying to live.',
    },
  ],
  buttons: [
    { label: 'See the ventures', href: '#ventures', variant: 'cream' as ButtonVariant },
    { label: 'How we work', href: '#how-we-work', variant: 'ghost' as ButtonVariant },
  ],
}

export const mission = {
  label: 'Our mission',
  // Verbatim copy, em-dashes removed. `emphasis` controls hierarchy:
  // 'lead' + 'core' + 'signoff' are large Cal Sans forest; 'truth' is bold; rest is --read body.
  blocks: [
    { kind: 'lead', text: 'Everyone wants to live a good life.' },
    {
      kind: 'body',
      text: 'To pursue ambitions, to achieve what they aspire to, to be who they aspire to be, to create, to inspire, to do what they think is important, and to spend time with those who are important to them.',
    },
    {
      kind: 'truth',
      text: "That's the way it's always been, and the way it always will be. It's what it means to be human.",
    },
    {
      kind: 'body',
      text: 'And yet the world, somehow, finds a way to slow us down. Technology, markets, the economy. When the world changes, for better or worse, it can create obstacles that make living our best lives harder to achieve.',
    },
    {
      kind: 'core',
      text: 'Our mission is to remove those obstacles, and create new pathways, so people have the freedom to be who they want to be.',
    },
    { kind: 'body', text: 'That is what we stand for.' },
    { kind: 'signoff', text: 'We are Seedcraft. Here for the everyday hero.' },
  ] as { kind: 'lead' | 'body' | 'truth' | 'core' | 'signoff'; text: string }[],
}

export const howWeWork = {
  label: 'How we work',
  title: 'Build it. Prove it. Hand it to the right people.',
  sub: 'We take a product to a real proof point, then bring in operators to grow it, keeping a stake and staying in for the long run.',
  steps: [
    {
      num: '01',
      title: 'Build',
      body: 'We find a gap everyone else walked past and build the real thing, fast. A working product in front of real people, not a deck or a maybe.',
    },
    {
      num: '02',
      title: 'Prove',
      body: 'Real users, real revenue. We push to a genuine proof point before anyone says the word "scale". Validation over vanity.',
    },
    {
      num: '03',
      title: 'Hand over',
      body: 'We bring in the right operators to grow it, keep a stake and stay close, then start clearing the next obstacle.',
    },
  ] as WorkStep[],
}

export const ventures = {
  label: 'The ventures',
  title: "Pathways we've cleared, and the ones we're clearing now.",
  items: [
    {
      name: 'HiddenGem',
      desc: 'Uncovering remarkable talent.',
      status: { label: 'Launched', tone: 'live' },
    },
    {
      name: 'Shiftly',
      desc: 'Fair shifts in a couple of clicks.',
      status: { label: 'Final push', tone: 'building' },
      href: 'https://shiftly.so',
    },
    {
      name: 'Vent',
      desc: 'Turning the complaints of people the market stopped listening to into what gets built next.',
      status: { label: 'Build', tone: 'building' },
      href: 'https://vented.so',
    },
    {
      // URL (getsmokeless.io) not live yet
      name: 'Smokeless',
      desc: 'Ritual replacement, giving people control over their cravings.',
      status: { label: 'Build', tone: 'building' },
    },
    {
      name: 'Escapage',
      desc: 'Pinterest for creative writers.',
      status: { label: 'Research', tone: 'building' },
      href: 'https://www.escapage.ink',
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
  sub: 'A small team that builds the real thing, proves it, and stays in for the long run.',
  members: [
    { src: '/Images/AndreSC.jpg', name: 'Andre Lemaitre', role: 'Founder, Seedcraft Ventures' },
    { photo: '1494790108377-be9c29b29330', name: 'Ashley Goluoglu', role: 'Founder, Harika Labs, Partner' },
    // TODO: third member to be confirmed
    { photo: '1500648767791-00dcc994a43e', name: 'Builder', role: 'Product' },
  ] as TeamMember[],
}

export const partnerships = {
  label: 'Partnerships',
  title: 'Built in partnership with Harika Labs.',
  harika: {
    href: 'https://harikalabs.com',
    body: 'Seedcraft recognises and highly values a long-standing partnership with Harika Labs, who take care of the engineering finesse, turning early prototypes into properly built products.',
    recommend:
      'We highly recommend Harika Labs if you are looking for an expert engineering partner for any product.',
    link: 'Visit Harika Labs',
  },
  open: {
    title: 'Open to new partnerships',
    body: 'If you are a solopreneur, a small agency, or a company with a skill set you could lend to a project, we would love to talk. We build with people who bring something real to the table.',
    cta: { label: 'Start a conversation', href: 'mailto:andre@seedcraft.co' },
  },
}

export const cta = {
  title: 'Spotted a gap we should clear?',
  body: 'We build with operators and guest co-founders. If you have seen the obstacle, we want to hear it.',
  button: { label: 'Get in touch', href: 'mailto:andre@seedcraft.co' },
}

export const footer = {
  blurb: 'A studio for the everyday hero.',
  columns: [
    {
      title: 'Ventures',
      links: [
        { label: 'HiddenGem', href: '#ventures' },
        { label: 'Shiftly', href: 'https://shiftly.so' },
        { label: 'Vent', href: 'https://vented.so' },
        { label: 'Smokeless', href: '#ventures' },
        { label: 'Escapage', href: 'https://www.escapage.ink' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Mission', href: '#mission' },
        { label: 'How we work', href: '#how-we-work' },
        { label: 'Ventures', href: '#ventures' },
        { label: 'Partnerships', href: '#partnerships' },
      ],
    },
    {
      title: 'Contact',
      links: [{ label: 'andre@seedcraft.co', href: 'mailto:andre@seedcraft.co' }],
    },
  ],
  legal: {
    copyright: '© 2026 Seedcraft Ventures',
    location: 'Edinburgh, Scotland',
  },
}
