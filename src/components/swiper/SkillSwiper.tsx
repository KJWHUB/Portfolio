'use client'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

import './skillSwiper.scss'

import data from '../../../db.json'

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
        modules={[Pagination]}
        pagination={skill_pagination}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {data.skill.map((el, i) => {
          return (
            <SwiperSlide key={i}>
              <div style={{ height: '400px' }}>123 {i}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default SkillSwiper
