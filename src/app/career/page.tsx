import CareerList from '@/components/list/CareerList'
import WhiteTitleText from '@/components/text/WhiteTitleText'

export default function Page() {
  return (
    <>
      <WhiteTitleText
        className="animate__animated animate__fadeIn"
        style={{ textAlign: 'center' }}
      >
        CAREER
      </WhiteTitleText>

      <CareerList />
    </>
  )
}
