import request from 'supertest' 

const baseURL = 'https://dog.ceo/api'

describe('Breeds list', () => {
    it('shoud return status code 200', async () => {
        const res = await request(baseURL).get('/breeds/list/all')
  
        expect(res.statusCode).toEqual(200)
    });
});
