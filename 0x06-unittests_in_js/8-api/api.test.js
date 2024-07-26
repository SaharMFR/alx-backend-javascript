const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Import the app
const port = 7865;

describe('Index page', function() {
  let server;

  before(function(done) {
    server = app.listen(port, () => {
      console.log(`API available on localhost port ${port}`);
      done();
    });
  });

  after(function(done) {
    server.close(done);
  });

  it('Correct status code?', function(done) {
    request.get(`http://localhost:${port}`, (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', function(done) {
    request.get(`http://localhost:${port}`, (error, response, body) => {
      if (error) return done(error);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
