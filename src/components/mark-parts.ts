/**
 * The four parts of the Seedcraft mark, cut from seedcraft-scv-parts.svg.
 * barTop + barMid + barBot read as the S/C on the left; chevron is the V
 * on the right (also "forward / hand-over"). Each part is individually
 * addressable so it can be used alone as a UI atom.
 *
 * Source viewBox is 0 0 551.54 829 with ~144px of empty canvas below the
 * artwork ("the box"); we crop to the artwork height so nothing reads as a
 * stray rounded container.
 */

export const MARK_VIEWBOX = '0 0 551.54 686'

export type PartId = 'barTop' | 'barMid' | 'barBot' | 'chevron'

export interface MarkPart {
  id: PartId
  d: string
  /** assemble snap-in offset along the part's own diagonal (in viewBox units) */
  from: { x: number; y: number }
  /** tight bounding box [x, y, w, h] so a single part renders as a clean glyph */
  box: [number, number, number, number]
}

export const MARK_PARTS: MarkPart[] = [
  {
    id: 'barTop',
    d: 'M301.95,33.31L123.81,211.46c-3.55,3.55-8.36,5.54-13.38,5.54H19.97c-16.86,0-25.31-20.39-13.38-32.31L184.72,6.54c3.55-3.55,8.36-5.54,13.38-5.54h90.46c16.86,0,25.31,20.39,13.38,32.31Z',
    from: { x: -70, y: -70 },
    box: [5, 5, 298, 213],
  },
  {
    id: 'barMid',
    d: 'M288.57,451h-90.46c-5.02,0-9.83-1.99-13.38-5.54L6.58,267.31c-11.92-11.92-3.48-32.31,13.38-32.31h90.46c5.02,0,9.83,1.99,13.38,5.54l178.14,178.14c11.92,11.92,3.48,32.31-13.38,32.31Z',
    from: { x: -80, y: 0 },
    box: [5, 233, 298, 219],
  },
  {
    id: 'barBot',
    d: 'M301.95,501.31l-178.14,178.14c-3.55,3.55-8.36,5.54-13.38,5.54H19.97c-16.86,0-25.31-20.39-13.38-32.31l178.14-178.14c3.55-3.55,8.36-5.54,13.38-5.54h90.46c16.86,0,25.31,20.39,13.38,32.31Z',
    from: { x: -70, y: 70 },
    box: [5, 467, 298, 219],
  },
  {
    id: 'chevron',
    d: 'M544.95,267.31l-170.3,170.3c-7.39,7.39-19.38,7.39-26.77,0l-45.23-45.23c-7.39-7.39-7.39-19.38,0-26.77l125.07-125.07c3.55-3.55,8.36-5.54,13.38-5.54h90.46c16.86,0,25.31,20.39,13.38,32.31Z',
    from: { x: 90, y: 0 },
    box: [301, 233, 245, 207],
  },
]

/** Default lighting order for the `lit` mechanic. */
export const LIT_ORDER: PartId[] = ['barTop', 'barMid', 'barBot', 'chevron']
