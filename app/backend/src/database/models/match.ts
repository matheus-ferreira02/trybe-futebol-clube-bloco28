import { Model, NUMBER, BOOLEAN } from 'sequelize';
import db from '.';
import Team from './team';

class Match extends Model {
  id!: number;
  homeTeam!: number;
  awayTeam!: number;
  homeTeamGoals!: number;
  awayTeamGoals!: number;
  inProgress!: boolean;
}

Match.init({
  homeTeam: {
    type: NUMBER,
  },
  awayTeam: {
    type: NUMBER,
  },
  homeTeamGoals: {
    type: NUMBER,
  },
  awayTeamGoals: {
    type: NUMBER,
  },
  inProgress: {
    type: BOOLEAN,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

Match.hasMany(Team, { foreignKey: 'homeTeam', as: 'homeTeam' });
Match.hasMany(Team, { foreignKey: 'awayTeam', as: 'awayTeam' });

export default Match;
