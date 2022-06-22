"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../src/config/Database/models");
const request = require('supertest');
const app = require('../src/index');
describe('Testing General Express App', () => {
    it('GET / --> "Hello World" 200', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .then((res) => {
            expect(res.text).toBe('Hello World!');
        }).then(done).catch(done);
    });
    it('GET /notfound --> "Not Found" 404', (done) => {
        request(app)
            .get('/notfound')
            .expect(404)
            .then((res) => {
            console.log(res.body);
        }).then(done).catch(done);
    });
});
afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    models_1.sequelize.close();
    done();
});
