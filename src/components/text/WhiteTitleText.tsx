import { classNames } from '@/utils/modules/className'
import css from './whiteTitleText.module.scss'

const WhiteTitleText = ({
  children,
  style,
  className,
}: {
  children: React.ReactNode
  className?: string
  style?: object
}) => {
  return (
    <h2 className={classNames(css.wrap, className)} style={style}>
      {children}
    </h2>
  )
}

export default WhiteTitleText
