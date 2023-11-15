'use client'

import GlassCard from '@/components/Card/GlassCard'
import './controller.scss'

const MyInfo = () => {
  const infoList = [
    {
      label: 'Email',
      value: 'art.1025p@gmail.com',
    },
    {
      label: 'Birth',
      value: '2001.10.25',
    },
    {
      label: 'Residence',
      value: 'Gyeonggi-do, Seongnam',
    },
  ]
  return (
    <div className="myInfo-wrap">
      <p className="job-title">web-developer</p>
      <ul>
        {infoList.map((el, i) => {
          return (
            <li key={i}>
              <span className="label">{el.label}</span>
              <span className="value">{el.value}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const Controller = () => {
  return (
    <div className="controller-wrap ">
      <GlassCard className="controller-glassCard animate__animated animate__delay-4s animate__fadeIn">
        <h2 className="title-01 portfoilo-text">Portfoilo</h2>

        <MyInfo />
      </GlassCard>
    </div>
  )
}

export default Controller
