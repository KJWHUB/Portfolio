import style from './whiteTitleText.module.scss'

const WhiteTitleText = ({ children }: { children: React.ReactNode }) => {
  return <h2 className={style.wrap}>{children}</h2>
}

export default WhiteTitleText
