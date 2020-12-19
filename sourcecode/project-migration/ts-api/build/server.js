"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiGetPosts_1 = require("./api/posts/apiGetPosts");
const apiGetPostDetail_1 = require("./api/posts/apiGetPostDetail");
const apiNewPost_1 = require("./api/posts/apiNewPost");
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const apiUploadImg_1 = require("./api/posts/apiUploadImg");
const errorHandling_1 = require("./api/general/errorHandling");
const message_1 = require("./model/shared/message");
const apiPostsChecker_1 = require("./api/posts/apiPostsChecker");
const apiDownloadImage_1 = require("./api/posts/apiDownloadImage");
const app = express_1.default();
//重写 RequestHandler 挂载 user这个新的属性
const Authrith = (req, res, next) => {
    const user = 'zp';
    req.user = user;
    console.log(1);
    next();
};
//自定义 logger中间件
const logger = (req, res, next) => {
    console.log('hello' + req.user);
    next();
};
// middleware
//设置允许跨域
app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,DELETE,PATCH,POST'
    });
    next();
});
app.use(errorHandling_1.apiErrorHandler);
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(Authrith);
app.use('/', logger);
app.use('/static', express_1.default.static(path_1.default.resolve('./', 'public', 'img')));
app.use((req, res, next) => {
    if (req.accepts("application/json")) {
        next();
    }
    else {
        next(new message_1.apiError('content Type', 'not supported', 500));
    }
});
// routers
app.get('/', (req, res, next) => {
    console.log('aa');
    res.send("node typescript api is wording!!!");
});
app.get('/headers', (req, res, next) => res.json(req.headers));
app.get('/posts', apiPostsChecker_1.apiPostsChecker, apiGetPosts_1.apiGetPosts);
app.get('/posts/:id', apiGetPostDetail_1.apiGetPostDetail);
app.post('/posts', apiNewPost_1.apiNewPost);
app.post('/posts/:id/img', apiUploadImg_1.apiUploadImg);
app.get('/booking/:startData/:endData', (req, res, next) => {
    console.log(req.params);
    res.json(req.params);
});
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
app.get('/static/download/:id', apiDownloadImage_1.apiDownloadImage);
app.disable('x-powered-by');
app.listen(8092, () => {
    console.log('server is runing...');
});
