import { IFormattedBoard } from '../protocols/ITeamLeaderboard';

export default class UtilsLeaderboard {
  static setEfficiency(totalPoints: number, totalGames: number) {
    return Number(((totalPoints / (totalGames * 3)) * 100).toFixed(2));
  }

  static orderTable(table: IFormattedBoard[]) {
    return table.sort((a, b) => (
      b.totalPoints - a.totalPoints
      || b.totalVictories - a.totalVictories
      || b.goalsBalance - a.goalsBalance
      || b.goalsFavor - a.goalsFavor
      || b.goalsOwn - a.goalsOwn));
  }
}
