import SkillSwiper from '@/components/swiper/SkillSwiper'
import WhiteTitleText from '@/components/text/WhiteTitleText'

export default function Page() {
  return (
    <>
      <WhiteTitleText
        className="animate__animated animate__fadeIn"
        style={{ textAlign: 'center' }}
      >
        SKILL
      </WhiteTitleText>

      <SkillSwiper />
    </>
  )
}
