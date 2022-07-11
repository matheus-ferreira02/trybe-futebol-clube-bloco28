import Team from '../database/models/team';

export type match = {
  id: number
  homeTeam: number
  awayTeam: number
  homeTeamGoals: number
  awayTeamGoals: number
  inProgress: boolean
};

export interface homeMatches extends Team {
  matchHome: match[]
}

export interface awayMatches extends Team {
  matchAway: match[]
}

export default interface ITeamLeaderboard {
  id: number
  teamName: string
  matches: match[]
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
