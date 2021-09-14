import Router from 'koa-router';
import * as postsCtrl from './posts.ctr';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);

const post = new Router();
posts.get('/', postsCtrl.read);
posts.delete('/', postsCtrl.remove);
posts.patch('/', postsCtrl.update);

// 이렇게 하면 /api/posts/:id 결로를 위한 라우터를 새로 만들고
// posts에 해당 라우터를 등록해 준다.
posts.use('/:id', postsCtrl.checkObjectId, post.routes());

export default posts;