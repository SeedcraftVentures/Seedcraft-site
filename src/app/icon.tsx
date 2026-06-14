import { ImageResponse } from 'next/og'
import { MARK_PARTS, MARK_VIEWBOX } from '@/components/mark-parts'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#16562f',
        }}
      >
        <svg width="22" height="22" viewBox={MARK_VIEWBOX} fill="#fafbf8">
          {MARK_PARTS.map((p) => (
            <path key={p.id} d={p.d} />
          ))}
        </svg>
      </div>
    ),
    { ...size }
  )
}
