'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import BackController from '@/components/BackController/BackController'

import WhiteTitleText from '@/components/text/WhiteTitleText'

import data from '../../../../db.json'
import HyperList from './components/hyperList/HyperList'

const Page = () => {
  const { project_id } = useParams()
  const info = data.project.find((el) => el.id === project_id)

  if (info) {
    return (
      <>
        <BackController />

        <WhiteTitleText
          className="animate__animated animate__fadeIn"
          style={{ textAlign: 'center' }}
        >
          {info.project_name}
        </WhiteTitleText>

        <div
          className="content-wrap"
          style={{
            display: 'flex',
            marginTop: '3rem',
          }}
        >
          <div
            className="left"
            style={{
              width: '50%',
              paddingRight: '3rem',
              display: 'flex',
              flexDirection: 'row-reverse',
            }}
          >
            <Image
              src={info.project_image}
              alt={info.id}
              width={400}
              height={400}
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>

          <div className="right" style={{ width: '50%', paddingLeft: '3rem' }}>
            <HyperList list={info.hyper_list} />

            <h3>내용</h3>
            <p>{info.project_content}</p>
          </div>
        </div>
      </>
    )
  }

  return <>none</>
}

export default Page
