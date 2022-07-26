import { teamsById } from './mocks/teamsById';
import { createdMatch, matches } from './mocks/matches';
import TeamService from '../services/team';
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/match';
import Team from '../database/models/team'
import jwtUtils from '../utils/jsonWebToken';

chai.use(chaiHttp);

const { expect } = chai;

const token = jwtUtils.generateToken({ id: 1, email: 'admin@admin.com', username: 'Admin', role: 'admin' })

const service = new TeamService()

describe('Testa a rota Matches', () => {
  describe('Testa a rota GET /matches', () => {
    before(async () => {
      sinon.stub(Match, 'findAll').resolves(matches as unknown as Match[]);
    });

    after(() => {
      (Match.findAll as sinon.SinonStub).restore();
    });

    it('em caso de sucesso, testa se retorna as partidas', async () => {
      const chaiHttpResponse = await chai.request(app).get('/matches');

      expect(chaiHttpResponse.status).to.be.eq(200);
      expect(chaiHttpResponse.body).to.be.eql(matches);
    });
  });

  describe('Testa a rota POST /matches', () => {
    before(async () => {
      sinon.stub(Match, 'create').resolves(createdMatch as Match);
      sinon.stub(Team, 'findAll').resolves(teamsById as unknown as Team[]);
    });

    after(() => {
      (Match.create as sinon.SinonStub).restore();
      (Team.findAll as sinon.SinonStub).restore();      
    });

    it('em caso de sucesso, testa se retorna a partida criada', async () => {
      const chaiHttpResponse = await chai.request(app).post('/matches')
        .send({
          homeTeam: 2,
          awayTeam: 5,
          homeTeamGoals: 2,
          awayTeamGoals: 3
        })
        .set('Authorization', token);;

      expect(chaiHttpResponse.status).to.be.eq(201);
      expect(chaiHttpResponse.body).to.be.eql(createdMatch);
    });
  });
});