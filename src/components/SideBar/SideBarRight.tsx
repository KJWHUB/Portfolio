'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/solid'
import './sideBarRight.scss'
import { classNames } from '@/utils/modules/className'

const RightSideBar = () => {
  const [navIsOn, setNavIsOn] = useState(false)
  const [activeRoute, setActiveRoute] = useState('/')
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    setActiveRoute(pathname)
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
    {
      id: '/career',
      label: 'career',
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

  return (
    <div className="nav-side-right" onClick={isNavOff}>
      <button
        className={classNames('open-btn', navIsOn ? 'hide' : '')}
        onClick={isNavOn}
      >
        <ChevronDoubleLeftIcon style={{ color: 'white', width: '1.5rem' }} />
      </button>

      <ul
        className={classNames(
          'nav-list',
          'animate__animated',
          navIsOn ? 'animate__fadeInRight' : 'animate__fadeOutRight',
        )}
      >
        {navList.map((el) => {
          return (
            <li key={el.id}>
              <Link href={el.id}>
                <p
                  className={classNames(
                    'nav-text',
                    el.id === activeRoute ? 'isOn' : '',
                  )}
                >
                  {el.label.toLocaleUpperCase()}
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RightSideBar
