'use client'

import Image from 'next/image'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'

import './skillSwiper.scss'

import data from '../../../db.json'
import IconGlassCard from '../Card/IconGlassCard'

const SkillSwiper = () => {
  const skill_pagination = {
    el: '.skill-pagination-wrap',
    clickable: true,
    bulletClass: 'skill-pagination-bullet',
    bulletActiveClass: 'skill-pagination-bullet-active',
    renderBullet: function (index: any, className: any) {
      return `<span class="${className}">
      ${data.skill[index].label}
      </span>`
    },
  }
  return (
    <div style={{ height: '100%' }}>
      <div className="skill-pagination-wrap animate__animated animate__fadeIn"></div>

      <Swiper
        className="skill-swiper animate__animated animate__fadeIn"
        modules={[Pagination]}
        pagination={skill_pagination}
      >
        {data.skill.map((el, i) => {
          return (
            <SwiperSlide key={i}>
              {el.list.map((skill, skillIndex) => {
                return (
                  <div className="skill-item" key={skillIndex}>
                    <IconGlassCard>
                      {!skill.skill_icon && skill.skill_name}
                      {skill.skill_icon && (
                        <Image
                          src={skill.skill_icon}
                          alt={el.id}
                          width={60}
                          height={60}
                        />
                      )}
                    </IconGlassCard>
                  </div>
                )
              })}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default SkillSwiper
