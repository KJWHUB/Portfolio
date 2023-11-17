import {
  LinkIcon,
  CodeBracketIcon,
  DocumentIcon,
} from '@heroicons/react/24/solid'

import css from './hyperList.module.scss'

const HyperList = ({ list }: { list: Array<HyperItem> }) => {
  const iconFind = [
    {
      id: 'service',
      icon: <LinkIcon className={css.icon} />,
    },
    {
      id: 'notion',
      icon: <DocumentIcon className={css.icon} />,
    },
    {
      id: 'code',
      icon: <CodeBracketIcon className={css.icon} />,
    },
  ]

  const handleUrl = (url: string) => {
    window.open(url)
  }

  return (
    <ul className={css.wrap}>
      {list.map((el, i: number) => {
        return (
          <li
            key={i}
            onClick={() => {
              handleUrl(el.url)
            }}
          >
            {iconFind.find((iconInfo) => iconInfo.id === el.id)?.icon}
          </li>
        )
      })}
    </ul>
  )
}

export default HyperList
