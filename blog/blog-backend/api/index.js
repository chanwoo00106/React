const Router = require('koa-router');
const posts = require('./posts');
const api = new Router();

api.get('/test', ctx => {
    ctx.body = 'test 성공';
});

api.use('/posts', posts.routes());

module.exports = api;