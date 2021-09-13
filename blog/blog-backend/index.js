const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    ctx.body = 'hello world koa';
});

app.listen(4000, () => {
    console.log('http://localhost:4000');
});