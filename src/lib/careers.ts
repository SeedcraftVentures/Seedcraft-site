/**
 * Careers: the open seats. Each role has a list entry for /careers and the
 * full spec for /careers/<slug>. Every seat is an equity position.
 * Note: no em-dashes anywhere on the site (brand rule).
 */

export const CAREERS_EMAIL = 'andre@seedcraft.co'

/** A link inside a paragraph. Opens in a new tab. */
export interface InlineLink {
  text: string
  href: string
}
/** Plain text, or text with links in it. */
export type Para = string | (string | InlineLink)[]

export interface RoleSection {
  title: string
  /** paragraphs before the list */
  intro?: Para[]
  items?: string[]
  /** paragraphs after the list */
  outro?: Para[]
}

export interface Role {
  slug: string
  title: string
  location: string
  terms: string
  /** one line for the careers list */
  summary: string
  /** the equity line on the careers list */
  equity: string
  lede: string
  sections: RoleSection[]
  applySubject: string
}

export const careers = {
  label: 'Careers',
  title: 'Build Seedcraft with us.',
  sub: 'We build with people who own a piece of it. Every seat here is an equity position, not a contract, alongside a founder who is in it with you.',
  openTitle: 'Open roles',
  noneTitle: 'Not seeing your seat?',
  noneBody:
    'If you are a solopreneur, a small agency, or a company with a skill set you could lend to a project, we would love to talk. We build with people who bring something real to the table.',
  noneCta: { label: 'Start a conversation', href: `mailto:${CAREERS_EMAIL}?subject=Partnering%20with%20Seedcraft` },
}

export const roles: Role[] = [
  {
    slug: 'founding-partner',
    title: 'Founding Partner, Go-to-Market',
    location: 'Central Scotland',
    terms: 'Equity partnership',
    summary:
      'Lead go-to-market across a growing portfolio of B2B and consumer products, working side by side with the founder.',
    equity: '25% of the Seedcraft Ventures holding company, earned over two years.',
    lede: "Seedcraft Ventures is looking for a Founding Partner to own go-to-market across a growing portfolio of B2B and consumer products. It's an equity partnership with a local founder, for someone who would rather build something that lasts than chase this week's numbers.",
    sections: [
      {
        title: 'About Seedcraft',
        intro: [
          [
            'Seedcraft builds and runs its own portfolio of products. They include ',
            { text: 'Shiftly', href: 'https://shiftly.so' },
            ', ',
            { text: "What's On", href: 'https://showmewhatson.live' },
            ', ',
            { text: 'Escapage', href: 'https://www.escapage.ink' },
            ', ',
            { text: 'Herald', href: 'https://useherald.app' },
            ' and a series of mobile word games. We also build apps with partners.',
          ],
          'Founder Andre leads product and has started on go-to-market. The next step is a partner who takes the lead on how our products reach people.',
        ],
      },
      {
        title: "What you'll do",
        intro: ['Roughly 70% go-to-market and 30% product.'],
        items: [
          'Lead research and user insight: market research, user interviews and collecting data we can trust.',
          'Co-manage field go-to-market with Andre: walk into venues, demo live, set customers up, and sell the product and the vision.',
          'Lead user acquisition, paid and organic.',
          'Host demos and launch events, from one-to-ones to a room of 50.',
          'Co-manage our online and social presence.',
          'Shape product narrative and direction, and bring your own product ideas.',
          'Support our partner relationships.',
        ],
        outro: [
          "This is shoulder-to-shoulder work. If we decide, for example, that university creative writing societies should see Escapage, we'll plan it together and split the visits.",
        ],
      },
      {
        title: 'Who you are',
        items: [
          'Based in Central Scotland and happy to be out and about.',
          'Experienced in go-to-market across B2B and consumer tech.',
          'Fluent in mobile UA. CPI, LTV and ROAS are second nature.',
          'Experienced in a client-facing role: BD, account management, stakeholder management or consulting.',
          'A clear, credible communicator who can go deep on detail and knows when not to.',
          'Tech literate, with a working understanding of how apps get built.',
          'Confident in a room and low on ego.',
          'Driven to win, but playing the long game.',
          "Ideally, you've worked inside a tech startup. Consulting is a good alternative.",
        ],
      },
      {
        title: 'How we work',
        intro: [
          "We work open-to-goal. We agree a goal, keep it visible, and make time for it until it's done. Some weeks that's a few hours, some weeks it's a lot more. We care about goals closed, not hours logged.",
          "Andre has one other solid work commitment that pays his bills, and we'd expect you to have one that pays yours. Beyond that, Seedcraft is your main focus.",
        ],
      },
      {
        title: "What's on offer",
        items: [
          '25% equity in the Seedcraft Ventures holding company, earned over two years, with exposure to every product in the portfolio.',
          'A lead role in research and user acquisition, field GTM shared equally with Andre, and a voice across product.',
          "A founder who'll be out in venues and on stage alongside you.",
        ],
        outro: [
          "There's no salary at the outset, so you'll need your own income alongside this. We'd rather say that now than in the third conversation.",
        ],
      },
      {
        title: 'Interested?',
        intro: [`Have a look at shiftly.so, then email Andre at ${CAREERS_EMAIL}. One page is plenty. Include:`],
        items: [
          "Your first week. What would you do in your first week to get Shiftly into people's hands?",
          'One real conversation. Talk to someone who runs shifts, such as a pub manager, a café owner or a friend in hospitality. What did you learn?',
          "A bit about you. What you've taken to market, and how you currently work and earn.",
        ],
        outro: [
          "We'll talk your plan through together when we meet. There's no right answer, and we care more about your thinking than polish.",
        ],
      },
    ],
    applySubject: 'Founding Partner, Go-to-Market',
  },
]

export function getRole(slug: string): Role | undefined {
  return roles.find((r) => r.slug === slug)
}

export const applyHref = (r: Role) => `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(r.applySubject)}`
