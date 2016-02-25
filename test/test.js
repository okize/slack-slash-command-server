const should = require('chai').should();
const expect = require('chai').expect();
const supertest = require('supertest');
const api = supertest('http://localhost:9000');

describe('Web application', () => {

  it('should return a 200 response for the home page', (done) => {
    api
      .get('/')
      .set('Accept', 'text/html')
      .expect(200, done);
  });

  it('should return a 404 response for an incorrect page', (done) => {
    api
      .get('/no-such-page')
      .set('Accept', 'text/html')
      .expect(404, done);
  });

});
