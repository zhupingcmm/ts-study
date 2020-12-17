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
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(Authrith);
app.use('/', logger);
// routers
app.get('/', (req, res, next) => {
    console.log('aa');
    res.send("node typescript api is wording!!!");
});
app.get('/posts', apiGetPosts_1.apiGetPosts);
app.get('/posts/:id', apiGetPostDetail_1.apiGetPostDetail);
app.post('/posts', apiNewPost_1.apiNewPost);
app.listen(8092, () => {
    console.log('server is runing...');
});
