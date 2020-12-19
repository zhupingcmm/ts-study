"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiGetPosts = void 0;
const data_1 = require("../../data");
const postQuery_1 = require("../../model/shared/postQuery");
const apiGetPosts = (req, res) => {
    const filters = new postQuery_1.PostQuery(req.query);
    if (filters) {
    }
    res.json(data_1.DataStore.posts);
};
exports.apiGetPosts = apiGetPosts;
