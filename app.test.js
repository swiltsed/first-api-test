const supertest = require('supertest');
const app = require('./app')


describe('Testing requests from JSONplaceholdder', () => {
    test('GET posts/1/comments', done => {
        supertest(app)
        .get('/posts/1/comments')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    test('Post a photo', done =>{
        supertest(app)
        .post('/albums/1/photos')
        .send({albumId : 1, id : 1, title : 'Hot Rod', url : 'https://via.placeholder.com/600/92c953', thumbnailUrl: 'https://via.placeholder.com/150/92c952'})
        .expect(function(res) {
            res.body.id = 'something specific';
        })
        .expect(200,done)
    })

    test('GET users/1/posts from JSONPlaceholder', () => {
        supertest(app)
        .get('/users/1/posts')
        .expect('Content-Type', /json/)
        .expect('Content-Length', '10')
        .expect(200, done)
    })

})

