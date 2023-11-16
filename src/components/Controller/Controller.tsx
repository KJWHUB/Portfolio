'use client'

import { useState } from 'react'
import GlassCard from '@/components/Card/GlassCard'
import SideBarRight from '@/components/SideBar/SideBarRight'
import './controller.scss'

import MainView from './chapter/Main'
import SkillView from './chapter/Skill'

const Controller = () => {
  const [chapter, setChapter] = useState('main')

  const changeChapter = (id: string) => {
    setChapter(id)
  }

  let contents = {
    main: <MainView />,
    skill: <SkillView />,
    project: <MainView />,
    career: <MainView />,
  }[chapter]

  return (
    <div className="controller-wrap ">
      <GlassCard className="controller-glassCard animate__animated animate__delay-4s animate__fadeIn">
        {contents}
        <SideBarRight chapter={chapter} changeChapter={changeChapter} />
      </GlassCard>
    </div>
  )
}

export default Controller
