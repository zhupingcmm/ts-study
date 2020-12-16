"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import {DataStore} from './data';
const apiGetPosts_1 = require("./api/posts/apiGetPosts");
const apiGetPostDetail_1 = require("./api/posts/apiGetPostDetail");
const app = express_1.default();
app.get('/', (req, res, next) => {
    console.log('aa');
    res.send("node typescript api is wording!!!");
});
app.get('/posts', apiGetPosts_1.apiGetPosts);
app.get('/posts/:id', apiGetPostDetail_1.apiGetPostDetail);
app.listen(8092, () => {
    console.log('server is runing...');
});
