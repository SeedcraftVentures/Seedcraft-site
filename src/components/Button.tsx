import type { ButtonVariant } from '@/lib/content'
import { MarkPartGlyph } from './Mark'

type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: ButtonVariant
  size?: Size
  /** show the chevron part as a "forward" glyph after the label */
  withChevron?: boolean
  className?: string
  children: React.ReactNode
}

type AnchorProps = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & {
    href: string
  }

type ButtonElProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
    href?: undefined
  }

export function Button(props: AnchorProps | ButtonElProps) {
  const {
    variant = 'cream',
    size = 'md',
    withChevron = false,
    className = '',
    children,
    ...rest
  } = props as AnchorProps

  const cls = `shape btn btn--${variant} btn--${size} ${className}`.trim()
  const inner = (
    <>
      {children}
      {withChevron && (
        <MarkPartGlyph part="chevron" size={12} color="currentColor" />
      )}
    </>
  )

  if ('href' in props && props.href) {
    return (
      <a className={cls} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {inner}
      </a>
    )
  }
  return (
    <button className={cls} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {inner}
    </button>
  )
}
