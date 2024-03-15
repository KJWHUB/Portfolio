'use client'

import { useEffect, useState } from 'react'
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import './sideBarRight.scss'
import { classNames } from '@/utils/modules/className'

const RightSideBar = () => {
  const [navIsOn, setNavIsOn] = useState(false)
  const [activeRoute, setActiveRoute] = useState('/')
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    setActiveRoute(pathname)
    setNavIsOn(false)
  }, [pathname, searchParams])

  const navList = [
    {
      id: '/',
      label: 'home',
    },
    {
      id: '/skill',
      label: 'skill',
    },
    {
      id: '/project',
      label: 'project',
    },
    // TODO: 더많은 회사를 경험후 추가
    // {
    //   id: '/career',
    //   label: 'career',
    // },
  ]

  const bottomLink = [
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/KJWHUB',
    },
    {
      id: 'notion',
      label: 'Notion',
      url: 'https://odd-vacuum-f21.notion.site/1fe9bf3e4e1544d793739a1c4359de12?pvs=4',
    },
    {
      id: 'pdf',
      label: 'PDF',
      url: 'https://odd-vacuum-f21.notion.site/1fe9bf3e4e1544d793739a1c4359de12?pvs=4',
    },
  ]

  const isNavOn = (e: React.MouseEvent) => {
    e.stopPropagation()
    setNavIsOn(true)
  }
  const isNavOff = (e: React.MouseEvent) => {
    e.stopPropagation()
    setNavIsOn(false)
  }

  const handleOpenWindow = (el: { id: string; label: string; url: string }) => {
    window.open(el.url)
  }

  return (
    <>
      <button
        className={classNames('open-btn', navIsOn ? 'hide' : '')}
        onClick={isNavOn}
      >
        <ChevronDoubleLeftIcon style={{ color: 'white', width: '1.5rem' }} />
      </button>

      <div
        className={classNames(
          'nav-side-right',
          'animate__animated',
          navIsOn ? 'animate__fadeInRight' : 'animate__fadeOutRight',
        )}
        onClick={isNavOff}
      ></div>

      <div
        className={classNames(
          'nav-list-wrap',
          'animate__animated',
          navIsOn ? 'animate__fadeInRight' : 'animate__fadeOutRight',
        )}
      >
        <ul>
          {navList.map((el) => {
            return (
              <li key={el.id}>
                <Link href={el.id} className={classNames('nav-text-wrap')}>
                  <span
                    className={classNames(
                      'nav-text',
                      el.id === activeRoute ? 'isOn' : '',
                    )}
                  >
                    {el.label.toLocaleUpperCase()}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="bottom-list">
          {bottomLink.map((el, i) => {
            return (
              <span
                key={i}
                onClick={() => {
                  handleOpenWindow(el)
                }}
              >
                {el.label}
              </span>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default RightSideBar
