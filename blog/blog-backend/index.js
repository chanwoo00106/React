const Koa = require('koa');
const Router = require('koa-router');
const api = require('./api');
const app = new Koa();
const router = new Router();

router.use("/api", api.routes());

router.get('/', ctx => {
    ctx.body = '홈';
});

router.get('/about/:name?', ctx => {
    const {name} = ctx.params;
    ctx.body = name ? `${name}의 소개` : '포스트가 없습니다.';
});

router.get('/about', ctx => {
    ctx.body = '소개';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('http://localhost:4000');
});