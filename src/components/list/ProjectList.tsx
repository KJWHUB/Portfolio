import Link from 'next/link'
import './projectList.scss'
import ProjectGlassCard from '@/components/Card/ProjectGlassCard'

import data from '../../../db.json'

const ProjectList = () => {
  const list = data.project
  return (
    <ul
      className="project-list-wrap"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
      }}
    >
      {list.map((item, i) => {
        return (
          <li
            key={i}
            className="project-list-item animate__animated animate__fadeIn"
            style={{
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
  )
}

export default ProjectList
