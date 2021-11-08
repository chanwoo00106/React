require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';

const app = new Koa();
const router = new Router();
const { PORT, MONGO_URL } = process.env;

mongoose.connect(MONGO_URL, (err) => {
  if (err) throw err;
  console.log('connected to MongoDB');
});

router.use('/api', api.routes());

app.use(bodyParser());
app.use(jwtMiddleware);

router.get('/', (ctx) => {
  ctx.body = '홈';
});

router.get('/about/:name?', (ctx) => {
  const { name } = ctx.params;
  ctx.body = name ? `${name}의 소개` : '포스트가 없습니다.';
});

router.get('/about', (ctx) => {
  ctx.body = '소개';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT || 4000, () => {
  console.log('http://localhost:' + PORT);
});
