import { classNames } from '@/utils/modules/className'
import css from './projectGlassCard.module.scss'

function ProjectGlassCard({
  className,
  projectInfo,
}: {
  className?: string
  projectInfo: Project
}) {
  const { project_name, project_subName, project_description } = projectInfo
  return (
    <div className={classNames(css.glass_card_wrap, className)}>
      <h2 className={css.title}>{project_name}</h2>
      <h3 className={css.subTitle}>{project_subName}</h3>
      <p className={css.description}>{project_description}</p>
    </div>
  )
}

export default ProjectGlassCard
