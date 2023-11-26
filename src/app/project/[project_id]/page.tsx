'use client'

import { useParams } from 'next/navigation'
import BackController from '@/components/BackController/BackController'

import WhiteTitleText from '@/components/text/WhiteTitleText'

import data from '../../../../db.json'
import ProjectLayout from './components/detailLayout/ProjectLayout'

const Page = () => {
  const { project_id } = useParams()
  const info = data.project.find((el) => el.id === project_id)

  if (info) {
    return (
      <>
        <BackController />

        <WhiteTitleText
          className="animate__animated animate__fadeIn"
          style={{ marginBottom: '3rem', textAlign: 'center' }}
        >
          {info.project_name}
        </WhiteTitleText>

        <ProjectLayout info={info} />
      </>
    )
  }

  return <>none</>
}

export default Page
