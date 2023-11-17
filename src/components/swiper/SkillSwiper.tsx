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
    <>
      <div className="skill-pagination-wrap"></div>

      <Swiper
        className="skill-swiper"
        modules={[Pagination]}
        pagination={skill_pagination}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
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
                          width={50}
                          height={50}
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
    </>
  )
}

export default SkillSwiper
