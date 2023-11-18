type Project = {
  id: string
  project_name: string
  project_subName: string
  project_description: string
  project_content: string[]
  project_image: string
  project_skill?: Array
  hyper_list: Array<HyperItem>
}

type HyperItem = {
  id: string
  url: string
}
