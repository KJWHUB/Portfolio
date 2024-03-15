'use client'

import PerfectScrollbar from 'react-perfect-scrollbar'
import Image from 'next/image'

import data from '../../../db.json'
import IconGlassCard from '../Card/IconGlassCard'
import './skillList.scss'

const skillList: SkillDivision[] = data.skill

type SkillItem = {
  skill_id: string
  skill_name: string
  skill_icon: string
}
type SkillDivision = {
  id: string
  label: string
  list: SkillItem[]
}

function SikllSection({ skillDivision }: { skillDivision: SkillDivision }) {
  return (
    <div className="skill-division-wrap">
      <h3 className="skill-title">{skillDivision.label}</h3>
      <div style={{ display: 'flex' }}>
        {skillDivision.list.map((skill, skillIndex) => {
          return (
            <div className="skill-item" key={skillIndex}>
              <IconGlassCard>
                {!skill.skill_icon && skill.skill_name}
                {skill.skill_icon && (
                  <Image
                    src={skill.skill_icon}
                    alt={skill.skill_name}
                    width={40}
                    height={40}
                  />
                )}
              </IconGlassCard>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function SkillList() {
  return (
    <PerfectScrollbar>
      <div className="skill-wrap">
        <div style={{ height: '1000px' }}>
          {skillList.map((skillDivision, i) => {
            return <SikllSection key={i} skillDivision={skillDivision} />
          })}
        </div>
      </div>
    </PerfectScrollbar>
  )
}
