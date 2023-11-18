import Link from 'next/link'
import ProjectGlassCard from '@/components/Card/ProjectGlassCard'
import WhiteTitleText from '@/components/text/WhiteTitleText'

import data from '../../../db.json'

export default function Page() {
  const list = data.project
  return (
    <>
      <WhiteTitleText
        className="animate__animated animate__fadeIn"
        style={{ marginBottom: '3rem', textAlign: 'center' }}
      >
        PROJECT
      </WhiteTitleText>

      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        {list.map((item, i) => {
          return (
            <li
              key={i}
              className="animate__animated animate__fadeIn"
              style={{
                width: '48%',
                margin: '0.5rem',
                animationDelay: `0.${i}s`,
              }}
            >
              <Link href={'/project/' + item.id}>
                <ProjectGlassCard projectInfo={item} />
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
