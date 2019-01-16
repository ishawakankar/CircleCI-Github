/* eslint import/no-unresolved: 0 */
/* global it describe beforeEach: true */

const chai = require('chai');

chai.should();
const supertest = require('supertest');
const chaiHttp = require('chai-http');
const serverObject = require('../server');

const { app } = serverObject;
chai.use(chaiHttp);
const request = supertest(app);

describe('Test server routes:', () => {
  beforeEach(() => {
  });

  it('Home route', (done) => {
    request.get('/')
      .end((err, res) => {
        if (err) throw err;
        // console.log(res.text);
        res.should.status(200);
        done();
      });
  });

  it('Dash route', (done) => {
    request.get('/dash')
      .end((err, res) => {
        if (err) throw err;
        // console.log(res.text);
        res.should.status(200);
        done();
      });
  });

  it('Exit test cases', (done) => {
    process.exit();
    done();
  })

  // it('Undefined route', (done) => {
  //   request.get('/random')
  //     .end((err, res) => {
  //       if (err) throw err;
  //       res.should.status(200);
  //       done();
  //     });
  // });
});
