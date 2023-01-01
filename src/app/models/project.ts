export class Project{
    id:string
    name:string
    description:string
    tools:string[]
    images:string[]
    link:Link[]
}

class Link{
    link:string
    icon:string
}