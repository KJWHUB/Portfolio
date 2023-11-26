import Image from 'next/image'

import ContentWrap from '../contentWrap/ContentWrap'
import HyperList from '../hyperList/HyperList'
import ProjectSkill from '../projectSkill/ProjectSkill'

import './projectLayout.scss'

const ProjectLayout = ({
  info,
}: {
  info: {
    id: string
    project_image: string
    hyper_list: Array<HyperItem>
    project_content: string[]
    project_skill: ProjectSkill[]
  }
}) => {
  return (
    <div className="project-detail-wrap">
      <div className="left">
        <Image
          src={info.project_image}
          alt={info.id}
          width={400}
          height={400}
          style={{ width: 'auto', height: 'auto', objectFit: 'contain' }}
        />
      </div>

      <div className="right">
        {/* link */}
        <HyperList list={info.hyper_list} />

        {/* content */}
        <ContentWrap list={info.project_content} />

        {/* skill */}
        <ProjectSkill list={info.project_skill} />
      </div>
    </div>
  )
}

export default ProjectLayout
