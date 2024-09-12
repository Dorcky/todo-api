const request = require('supertest');
const app = require('../app');

describe('Todo API', () => {
  it('should create a new todo', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({ title: 'Test todo', completed: false });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should get all todos', async () => {
    const res = await request(app).get('/api/todos');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  // Ajoutez d'autres tests pour les opérations GET, PUT et DELETE
});