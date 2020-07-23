export enum SkillType {
    technical = 0,
    interpersonal = 0,
}

class Skill {
    name: string
    type: SkillType
    relevancy: number
    projectsId: string[]

    constructor(name: string, type: SkillType, relevancy: number = 1, projectsId: string[] = null) {
        this.name = name
        this.type = type
        this.relevancy = relevancy
        this.projectsId = projectsId
    }
}

export const skills: Skill[] = [
    new Skill("Angular", SkillType.technical, 100),
]
