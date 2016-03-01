const should = require('chai').should();
const expect = require('chai').expect();
const supertest = require('supertest');
const app = supertest(require('../app.js'));

describe('Web application', () => {

  it('should return a 200 response for the home page', (done) => {
    app
      .get('/')
      .expect(200, done);
  });

  it('should return a 404 response for an incorrect page', (done) => {
    app
      .get('/no-such-page')
      .expect(404, done);
  });

});
