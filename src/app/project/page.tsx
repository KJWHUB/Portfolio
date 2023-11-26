import ProjectList from '@/components/list/ProjectList'
import WhiteTitleText from '@/components/text/WhiteTitleText'

export default function Page() {
  return (
    <>
      <WhiteTitleText
        className="animate__animated animate__fadeIn"
        style={{ marginBottom: '3rem', textAlign: 'center' }}
      >
        PROJECT
      </WhiteTitleText>

      <ProjectList />
    </>
  )
}
