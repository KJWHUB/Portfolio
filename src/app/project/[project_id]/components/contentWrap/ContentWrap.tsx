import css from './contentWrap.module.scss'

const ContentWrap = ({ list }: { list: string[] }) => {
  return (
    <div className={css.contentsWrap}>
      {list.map((str, i) => {
        return (
          <p className={css.text} key={i}>
            {str}
          </p>
        )
      })}
    </div>
  )
}

export default ContentWrap
