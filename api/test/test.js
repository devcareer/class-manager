require ('chai').should()
import chai from 'chai';
import chaiHttp from 'chai-http';
//import './chai/register-should';
import app from '../index';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testing the class-manager endpoints:', () => {


  it('It should get a welcome message at the root endpoint', (done) => {
    const bookId = 1;
    chai.request(app)
      .get("/")
      .set('Accept', 'application/json')
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data.message).to.include("Welcome to this API. hazimmmmm")
      })
      .catch((err) => {
        console.log(err);
      });
      done();
  });

});