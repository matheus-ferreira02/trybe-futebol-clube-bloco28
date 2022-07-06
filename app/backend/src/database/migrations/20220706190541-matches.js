'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      homeTeam: {
        allowNull: false,
        primaryKey: true,
        field: 'home_team',
        type: Sequelize.INTEGER
      },
      awayTeam: {
        allowNull: false,
        primaryKey: true,
        field: 'away_team',
        type: Sequelize.INTEGER
      },
      homeTeamGoals: {
        allowNull: false,
        field: 'home_team_goals',
        type: Sequelize.INTEGER
      },
      awayTeamGoals: {
        allowNull: false,
        field: 'away_team_goals',
        type: Sequelize.INTEGER
      },
      inProgress: {
        allowNull: false,
        field: 'in_progress',
        type: Sequelize.BOOLEAN
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('matches');
  }
};
