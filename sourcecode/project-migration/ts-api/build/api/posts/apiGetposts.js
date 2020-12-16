"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiGetPosts = void 0;
const data_1 = require("../../data");
const apiGetPosts = (req, res) => {
    res.json(data_1.DataStore.posts);
};
exports.apiGetPosts = apiGetPosts;
