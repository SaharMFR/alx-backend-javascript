const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');
const { expect } = chai;
const { before, after } = require('mocha');

chai.use(chaiHttp);

let server;

describe('Index page', () => {
    before((done) => {
        server = app.listen(7865, done);
    });

    after((done) => {
        server.close(done);
    });

    it('Correct status code?', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('Correct result?', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                expect(res.text).to.equal('Welcome to the payment system');
                done();
            });
    });
});
