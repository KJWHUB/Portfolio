'use client'

import { ChevronDoubleLeftIcon } from '@heroicons/react/24/solid'
import './sideBarRight.scss'
import { useState } from 'react'
import { classNames } from '@/utils/modules/className'

const RightSideBar = () => {
  const [navIsOn, setNavIsOn] = useState(false)
  const navList = [
    {
      id: '/',
      label: 'home',
    },
    {
      id: 'skill',
      label: 'skill',
    },
    {
      id: 'project',
      label: 'project',
    },
    {
      id: 'career',
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
              <p
                className={classNames(
                  'nav-text',
                  // el.id === chapter ? 'isOn' : '',
                )}
                onClick={() => {}}
              >
                {el.label.toLocaleUpperCase()}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RightSideBar
