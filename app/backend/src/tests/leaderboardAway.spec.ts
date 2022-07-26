import { leaderboardAway } from './mocks/leaderboardAway';
import { teamsAway } from './mocks/teamsAway';
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import Team from '../database/models/team';
import { app } from '../app';
import { allMatches } from '../protocols/ITeamLeaderboard';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a rota Leaderboards dos times visitantes', () => {
  describe('Testa a rota /leaderboards/away', () => {
    before(async () => {
      sinon.stub(Team, 'findAll').resolves(teamsAway as allMatches[]);
    });

    after(() => {
      (Team.findAll as sinon.SinonStub).restore();
    });

    it('em caso de sucesso, testa se retorna a tabela de classificação', async () => {
      const chaiHttpResponse = await chai.request(app).get('/leaderboard/away');

      expect(chaiHttpResponse.status).to.be.eq(200);
      expect(chaiHttpResponse.body).to.be.eql(leaderboardAway);
    });
  });
});