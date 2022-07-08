import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import User from '../database/models/user';
import * as bcrypt from 'bcryptjs';

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a rota Login', () => {
  describe('Em casos de sucesso', () => {
    before(async () => {
      sinon.stub(User, 'findOne').resolves({ email: 'admin@admin.com', password: 'senha', id: 1, role: 'admin' } as User);

      sinon.stub(bcrypt, 'compare').resolves(true);
    });

    after(() => {
      (User.findOne as sinon.SinonStub).restore();
      (bcrypt.compare as sinon.SinonStub).restore();
    });

    it('Verifica se retorna o token e o status correto', async () => {
      const chaiHttpResponse = await chai.request(app).post('/login')
        .send({ email: 'admin@admin.com', password: 'secret_admin' });        

      expect(chaiHttpResponse.status).to.be.eq(200);
      expect(chaiHttpResponse.body).to.have.property('token');
    });
  });
  
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  /* it('Seu sub-teste', () => {
    expect(false).to.be.eq(true);
  }); */
});
