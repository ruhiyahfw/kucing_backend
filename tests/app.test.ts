import { sequelize } from "../src/config/Database/models";

const request = require('supertest');
const app = require('../src/index');

describe('Testing General Express App', () => {
    it('GET / --> "Hello World" 200', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .then((res: any) => {
                expect(res.text).toBe('Hello World!');
            }).then(done).catch(done);
    })
    it('GET /notfound --> "Not Found" 404', (done) => {
        request(app)
            .get('/notfound')
            .expect(404)
            .then((res: any) => {
                console.log(res.body);
            }).then(done).catch(done);
    })
        
})

afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    sequelize.close();
    done()
  })