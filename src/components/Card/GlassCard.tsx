import { classNames } from '@/utils/modules/className'
import style from './glassCard.module.scss'

function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={classNames(style.glass_card_wrap, className)}>
      {children}
    </div>
  )
}

export default GlassCard
