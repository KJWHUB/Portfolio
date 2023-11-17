import { classNames } from '@/utils/modules/className'
import css from './iconGlassCard.module.scss'

function IconGlassCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={classNames(css.glass_card_wrap, css.borderOn, className)}>
      {children}
    </div>
  )
}

export default IconGlassCard
