'use client'

import Image from 'next/image'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

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
      return `<div class="${className}">
      ${data.skill[index].label}
      </div>`
    },
  }

  const handleSlideChange = (swiper: any) => {
    const atvI = swiper.activeIndex
    const carculrateScroll = swiper.pagination.bullets[atvI].offsetLeft
    swiper.pagination.el.scrollLeft = carculrateScroll
  }
  return (
    <div style={{ height: '100%' }}>
      <div className="skill-pagination-wrap animate__animated animate__fadeIn"></div>

      <Swiper
        className="skill-swiper animate__animated animate__fadeIn"
        modules={[Pagination]}
        pagination={skill_pagination}
        onSlideChange={handleSlideChange}
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
