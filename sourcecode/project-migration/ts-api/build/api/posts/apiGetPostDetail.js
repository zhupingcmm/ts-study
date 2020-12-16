"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiGetPostDetail = void 0;
const data_1 = require("../../data");
const postDetail_1 = require("../../model/shared/postDetail");
const apiGetPostDetail = (req, res) => {
    const postData = data_1.DataStore.posts.find((ele) => { return ele.id == parseInt(req.params.id); });
    const todoData = data_1.DataStore.todos.filter((ele) => { return ele.postid == parseInt(req.params.id); });
    console.log("postData", todoData, postData);
    if (postData) {
        res.json(new postDetail_1.PostDeail(postData, todoData));
    }
    else {
        res.status(404).json({ status: 'failed', message: 'can not fetch the right data' });
    }
    // console.log('id', req.params.id)
    // const {id} = req.params;
    // DataStore.posts.forEach((item:Posts) =>{
    //     if(parseInt(req.params.id) == item.id){
    //         res.json(new PostsSummary(item))
    //     }
    // });
};
exports.apiGetPostDetail = apiGetPostDetail;
