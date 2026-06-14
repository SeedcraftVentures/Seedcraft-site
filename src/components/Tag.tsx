import type { VentureStatus } from '@/lib/content'

export function Tag({
  children,
  live = false,
  className = '',
}: {
  children: React.ReactNode
  live?: boolean
  className?: string
}) {
  return (
    <span className={`shape tag ${live ? 'tag--live' : ''} ${className}`.trim()}>
      {live && (
        <span
          aria-hidden
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: '#1c7a40',
            display: 'inline-block',
          }}
        />
      )}
      {children}
    </span>
  )
}

export function StatusTag({ status }: { status: VentureStatus }) {
  return <Tag live={status.tone === 'live'}>{status.label}</Tag>
}
