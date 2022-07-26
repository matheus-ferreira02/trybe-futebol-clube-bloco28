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
    defaultValue: true,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

Match.belongsTo(Team, { foreignKey: 'homeTeam', as: 'teamHome' });

Match.belongsTo(Team, { foreignKey: 'awayTeam', as: 'teamAway' });

Team.hasMany(Match, {
  foreignKey: 'homeTeam', as: 'matchHome',
});

Team.hasMany(Match, {
  foreignKey: 'awayTeam', as: 'matchAway',
});

export default Match;
