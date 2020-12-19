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
import { dataFormateHandler } from './api/general/reqParams/dataParams';
import { apiPostsChecker } from './api/posts/apiPostsChecker';
import { apiDownloadImage } from './api/posts/apiDownloadImage';
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
//设置允许跨域
app.use((req,res, next)=>{
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,DELETE,PATCH,POST'
    });
    next();
})
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
app.get('/posts', apiPostsChecker, apiGetPosts);
app.get('/posts/:id', apiGetPostDetail);
app.post('/posts', apiNewPost);
app.post('/posts/:id/img', apiUploadImg);
app.get('/booking/:startData/:endData',(req, res, next) =>{
    console.log(req.params);
    res.json(req.params)
})
// app.param('startData',dataFormateHandler);
// app.param('endData',dataFormateHandler);

// response Object
/**
 * res.send
 * res.json
 * res.format
 * res.sendFile
 * res.download
 *
 * res.headers : res.get res.set
 * res.status
 */

app.get('/static/download/:id', apiDownloadImage);
app.disable('x-powered-by');
app.listen(8092, () => {
    console.log('server is runing...')
})
