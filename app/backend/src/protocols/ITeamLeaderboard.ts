export type matchHome = {
  id: number
  homeTeam: number
  awayTeam: number
  homeTeamGoals: number
  awayTeamGoals: number
  inProgress: boolean
};

export default interface ITeamLeaderboard {
  id: number
  teamName: string
  matchHome: matchHome[]
}
