type Project = {
  id: string
  project_name: string
  project_subName: string
  project_description: string
  project_content: string[]
  project_image: string
  project_skill?: Array<ProjectSkill>
  hyper_list: Array<HyperItem>
}

type HyperItem = {
  id: string
  url: string
}

type ProjectSkill = {
  id: string
  skill_list: string[]
}
