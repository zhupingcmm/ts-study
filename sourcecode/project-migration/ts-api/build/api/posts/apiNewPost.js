"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiNewPost = void 0;
const uuid_1 = require("uuid");
const index_1 = require("../../data/index");
const apiNewPost = (req, res) => {
    const newPost = {
        id: uuid_1.v4(),
        name: req.body.name,
        currency: req.body.currency,
        price: req.body.price,
        img: [],
    };
    index_1.DataStore.posts.push(newPost);
    // console.log(req.body);
    res.json(newPost);
};
exports.apiNewPost = apiNewPost;
