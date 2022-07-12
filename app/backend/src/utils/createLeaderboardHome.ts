import ITeamLeaderboard, { IFormattedBoard, match } from '../protocols/ITeamLeaderboard';
import UtilsLeaderboard from './utilsLeaderboard';

export default class BuildLeaderboardHome implements IFormattedBoard {
  public name: string;
  public totalPoints = 0;
  public totalGames = 0;
  public totalVictories = 0;
  public totalDraws = 0;
  public totalLosses = 0;
  public goalsFavor = 0;
  public goalsOwn = 0;
  public goalsBalance = 0;
  public efficiency = 0;

  constructor(team: ITeamLeaderboard) {
    this.name = team.teamName;
    this.totalGames = team.matches.length;
    this.setMatchStatistics(team.matches);
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
    this.efficiency = UtilsLeaderboard.setEfficiency(this.totalPoints, this.totalGames);
  }

  private setMatchQuantityStats(homeTeamGoals: number, awayTeamGoals: number) {
    if (awayTeamGoals > homeTeamGoals) this.totalLosses += 1;
    if (awayTeamGoals < homeTeamGoals) this.totalVictories += 1;
    if (awayTeamGoals === homeTeamGoals) this.totalDraws += 1;
  }

  private setGoalStats(homeTeamGoals: number, awayTeamGoals: number) {
    this.goalsFavor += homeTeamGoals;
    this.goalsOwn += awayTeamGoals;
  }

  private setMatchStatistics(matches: match[]) {
    const totalPoints = matches.reduce((acc, crr) => {
      this.setMatchQuantityStats(crr.homeTeamGoals, crr.awayTeamGoals);
      this.setGoalStats(crr.homeTeamGoals, crr.awayTeamGoals);

      if (crr.homeTeamGoals > crr.awayTeamGoals) return acc + 3;
      if (crr.homeTeamGoals === crr.awayTeamGoals) return acc + 1;
      return acc;
    }, 0);

    this.totalPoints = totalPoints;
  }

  private setEfficiency() {
    this.efficiency = Number(((this.totalPoints / (this.totalGames * 3)) * 100).toFixed(2));
  }
}
