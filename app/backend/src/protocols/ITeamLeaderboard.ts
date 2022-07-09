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

export interface IFormattedBoard {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
}
