
export abstract class RocketTeamMember {
    abstract create(name: string, memberFunction: string): Promise<void>
}