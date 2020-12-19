import express from 'express';
import { apiGetPosts } from './api/posts/apiGetPosts';
import { apiGetPostDetail } from './api/posts/apiGetPostDetail';
import { apiNewPost } from './api/posts/apiNewPost';
import bodyParser from 'body-parser';
import { CustomerRequestHanlder } from './interface/CustomerRequestHanlder';
import path from 'path';
import {apiUploadImg} from './api/posts/apiUploadImg';
import { apiErrorHandler } from './api/general/errorHandling';
import { apiError } from './model/shared/message';
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
app.use(apiErrorHandler);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(Authrith);
app.use('/', logger);
app.use('/static', express.static(path.resolve('./','public','img')));
app.use((req, res, next)=>{
    if(req.accepts("application/json")){
        next()
    }else{
        next(new apiError('content Type', 'not supported', 500))
    }
})


// routers
app.get('/', (req, res, next) => {
    console.log('aa')
    res.send("node typescript api is wording!!!")
});

app.get('/headers', (req, res, next)=> res.json(req.headers));
app.get('/posts', apiGetPosts);
app.get('/posts/:id', apiGetPostDetail);
app.post('/posts', apiNewPost);
app.post('/posts/:id/img', apiUploadImg);

app.listen(8092, () => {
    console.log('server is runing...')
})
