import { leaderboard } from './mocks/leaderboard';
import { teams } from './mocks/teams';
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import Team from '../database/models/team';
import * as bcrypt from 'bcryptjs';
import jwtUtils from '../utils/jsonWebToken';

import { app } from '../app';
import { allMatches } from '../protocols/ITeamLeaderboard';

chai.use(chaiHttp);

const { expect } = chai;

const token = jwtUtils.generateToken({ id: 1, email: 'admin@admin.com', username: 'Admin', role: 'admin' })

describe('Testa a rota Leaderboards', () => {
  describe('Testa a rota /leaderboards', () => {
    before(async () => {
      sinon.stub(Team, 'findAll').resolves(teams as allMatches[]);
    });

    after(() => {
      (Team.findAll as sinon.SinonStub).restore();
    });

    it('em caso de sucesso, testa se retorna a tabela de classificação', async () => {
      const chaiHttpResponse = await chai.request(app).get('/leaderboard');

      expect(chaiHttpResponse.status).to.be.eq(200);
      expect(chaiHttpResponse.body).to.be.eql(leaderboard);
    });
  });
});