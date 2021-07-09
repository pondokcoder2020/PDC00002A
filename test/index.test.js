import { expect, server, BASE_URL } from './setup.js';

describe('Index page test', () => {
  it('gets base url', done => {
    server
      .get(`${BASE_URL}/`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal(
          'SIMRSv3'
        );
        done();
      });
  });

  //Get Master Inventori
  /*it('posts messages', done => {
    const data = { name: 'some name', message: 'new message' };
    server
      .post(`${BASE_URL}/master/inventori`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.messages).to.be.instanceOf(Array);
        res.body.messages.forEach(m => {
          expect(m).to.have.property('id');
          expect(m).to.have.property('name', data.name);
          expect(m).to.have.property('message', data.message);
        });
        done();
      });
  });*/
});
