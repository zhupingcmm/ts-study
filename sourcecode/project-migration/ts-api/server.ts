import express from 'express';
// import {DataStore} from './data';
import {apiGetPosts} from './api/posts/apiGetPosts';
import {apiGetPostDetail } from './api/posts/apiGetPostDetail';

const app = express();

app.get('/', (req, res, next) =>{
    console.log('aa')
    res.send("node typescript api is wording!!!")
});

app.get('/posts', apiGetPosts);
app.get('/posts/:id', apiGetPostDetail);

app.listen(8092, () => {
    console.log('server is runing...')
})
