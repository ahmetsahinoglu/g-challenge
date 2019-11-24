import { app, server } from "../src/app";
import request from "supertest";
import { messages } from "../src/exceptions";

afterEach(() => server.close());

describe('Test app', () => {
    it('shouldPassWithValidParameters', done => {
        request(app)
            .post('/v1/record-list')
            .send({
                startDate: '2016-01-26',
                endDate: '2018-02-02',
                minCount: 2700,
                maxCount: 3000
            })
            .then(response => {
                let expectedCode = 0;
                expect(response.statusCode).toBe(200);
                expect(response.body.code).toBe(expectedCode);
                expect(response.body.msg).toBe(messages[expectedCode]);
                done();
            });
    });

    it('shouldTakeBadRequestWithMissingParameters', done => {
        request(app)
            .post('/v1/record-list')
            .send({
                startDate: '2016-01-26',
                endDate: '2018-02-02',
                minCount: 2700
            })
            .then(response => {
                let expectedCode = 1;
                expect(response.statusCode).toBe(400);
                expect(response.body.code).toBe(expectedCode);
                expect(response.body.msg).toBe(messages[expectedCode]);
                done();
            });
    });

    it('shouldTakeBadRequestWithWrongDateFormat', done => {
        request(app)
            .post('/v1/record-list')
            .send({
                startDate: '2016/01/26',
                endDate: '2018-02-02',
                minCount: 2700,
                maxCount: 3000
            })
            .then(response => {
                let expectedCode = 2;
                expect(response.statusCode).toBe(400);
                expect(response.body.code).toBe(expectedCode);
                expect(response.body.msg).toBe(messages[expectedCode]);
                done();
            });
    });

    it('shouldTakeBadRequestWithMinCountGreaterThanMax', done => {
        request(app)
            .post('/v1/record-list')
            .send({
                startDate: '2016-01-26',
                endDate: '2018-02-02',
                minCount: 2700,
                maxCount: 1000
            })
            .then(response => {
                let expectedCode = 3;
                expect(response.statusCode).toBe(400);
                expect(response.body.code).toBe(expectedCode);
                expect(response.body.msg).toBe(messages[expectedCode]);
                done();
            });
    });
});
