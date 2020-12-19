"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiGetPostDetail = void 0;
const data_1 = require("../../data");
const postDetail_1 = require("../../model/shared/postDetail");
const message_1 = require("../../model/shared/message");
const apiGetPostDetail = (req, res, next) => {
    const postData = data_1.DataStore.posts.find((ele) => { return ele.id == parseInt(req.params.id); });
    const todoData = data_1.DataStore.todos.filter((ele) => { return ele.postid == parseInt(req.params.id); });
    const requireFields = ["id"];
    const givenFields = Object.getOwnPropertyNames(req.body);
    if (!requireFields.every(field => givenFields.includes(field))) {
        return next(new message_1.apiError('Data missing', 'Not all required fields supplied', 400));
    }
    console.log("postData", todoData, postData);
    const imgUrls = postData === null || postData === void 0 ? void 0 : postData.img.map((item) => {
        if (req.app.get("env") === "development") {
            return `http://localhost:8092/static/${item}`;
        }
        else {
            return `http://baidu.com/${item}`;
        }
    });
    console.log("env::", req.app.get("env"));
    if (postData) {
        // res.json(new PostDeail(postData, todoData, imgUrls ))
        res.json(new message_1.PublicInfo('get success', 200, { get: new postDetail_1.PostDeail(postData, todoData, imgUrls) }));
    }
    else {
        res.status(404).json({ status: 'failed', message: 'can not fetch the right data' });
    }
};
exports.apiGetPostDetail = apiGetPostDetail;
