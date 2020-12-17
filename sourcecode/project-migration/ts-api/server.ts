import express from 'express';
import { apiGetPosts } from './api/posts/apiGetPosts';
import { apiGetPostDetail } from './api/posts/apiGetPostDetail';
import { apiNewPost } from './api/posts/apiNewPost';
import bodyParser from 'body-parser';
import { CustomerRequestHanlder } from './interface/CustomerRequestHanlder';
const app = express();
//重写 RequestHandler 挂载 user这个新的属性
const Authrith: CustomerRequestHanlder = (req, res, next) => {
    const user = 'zp';
    req.user = user;
    console.log(1)
    next();

}
//自定义 logger中间件
const logger: CustomerRequestHanlder = (req, res, next) => {
    console.log('hello' + req.user);
    next();
}
// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(Authrith);
app.use('/', logger);

// routers
app.get('/', (req, res, next) => {
    console.log('aa')
    res.send("node typescript api is wording!!!")
});

app.get('/posts', apiGetPosts);
app.get('/posts/:id', apiGetPostDetail);
app.post('/posts', apiNewPost)

app.listen(8092, () => {
    console.log('server is runing...')
})
