import Router from 'koa-router';
import * as postsCtrl from './posts.ctr';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);

const post = new Router();
posts.get('/', postsCtrl.read);
posts.delete('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
posts.patch('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);

// 이렇게 하면 /api/posts/:id 결로를 위한 라우터를 새로 만들고
// posts에 해당 라우터를 등록해 준다.
posts.use('/:id', postsCtrl.getPostById, post.routes());

export default posts;