import { IFormattedBoard, match, ILeaderboard } from '../protocols/ITeamLeaderboard';
import UtilsLeaderboard from './utilsLeaderboard';

export default class BuildLeaderboard implements IFormattedBoard {
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

  constructor(team: ILeaderboard) {
    this.name = team.teamName;
    this.totalGames = team.matchHome.length + team.matchAway.length;
    this.setHomeMatchStatistics(team.matchHome);
    this.setAwayMatchStatistics(team.matchAway);
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
    this.efficiency = UtilsLeaderboard.setEfficiency(this.totalPoints, this.totalGames);
  }

  private setMatchHomeQuantityStats(homeTeamGoals: number, awayTeamGoals: number) {
    if (awayTeamGoals > homeTeamGoals) this.totalLosses += 1;
    if (awayTeamGoals < homeTeamGoals) this.totalVictories += 1;
    if (awayTeamGoals === homeTeamGoals) this.totalDraws += 1;
  }

  private setMatchAwayQuantityStats(homeTeamGoals: number, awayTeamGoals: number) {
    if (awayTeamGoals < homeTeamGoals) this.totalLosses += 1;
    if (awayTeamGoals > homeTeamGoals) this.totalVictories += 1;
    if (awayTeamGoals === homeTeamGoals) this.totalDraws += 1;
  }

  private setGoalStatsHome(homeTeamGoals: number, awayTeamGoals: number) {
    this.goalsFavor += homeTeamGoals;
    this.goalsOwn += awayTeamGoals;
  }

  private setGoalStatsAway(homeTeamGoals: number, awayTeamGoals: number) {
    this.goalsFavor += awayTeamGoals;
    this.goalsOwn += homeTeamGoals;
  }

  private setAwayMatchStatistics(matches: match[]) {
    const totalPoints = matches.reduce((acc, crr) => {
      this.setMatchAwayQuantityStats(crr.homeTeamGoals, crr.awayTeamGoals);
      this.setGoalStatsAway(crr.homeTeamGoals, crr.awayTeamGoals);

      if (crr.homeTeamGoals < crr.awayTeamGoals) return acc + 3;
      if (crr.homeTeamGoals === crr.awayTeamGoals) return acc + 1;
      return acc;
    }, 0);

    this.totalPoints += totalPoints;
  }

  private setHomeMatchStatistics(matches: match[]) {
    const totalPoints = matches.reduce((acc, crr) => {
      this.setMatchHomeQuantityStats(crr.homeTeamGoals, crr.awayTeamGoals);
      this.setGoalStatsHome(crr.homeTeamGoals, crr.awayTeamGoals);

      if (crr.homeTeamGoals > crr.awayTeamGoals) return acc + 3;
      if (crr.homeTeamGoals === crr.awayTeamGoals) return acc + 1;
      return acc;
    }, 0);

    this.totalPoints += totalPoints;
  }
}
