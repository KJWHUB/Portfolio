import css from './projectSkill.module.scss'

const ProjectSkill = ({ list }: { list: ProjectSkill[] }) => {
  return (
    <div className={css.wrap}>
      {list.map((field, i) => {
        return (
          <div className={css.fieldWrap} key={i}>
            <p className={css.fieldTitle}>{field.id}</p>
            <p>{field.skill_list.join(', ')}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectSkill
