
export interface User {
  first_name: string
  last_name: string
  position: string
  photo?: string
}

export interface UserDetail extends User {
  experience: number,
  projects: Project[]
}

export interface Project {
  project_name: string,
  description: string,
  web_url?: string,
  appstore_url?: string,
  playstore_url?: string,
}
