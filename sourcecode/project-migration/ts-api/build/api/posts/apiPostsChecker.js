"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiPostsChecker = void 0;
const message_1 = require("../../model/shared/message");
const postQuery_1 = require("../../model/shared/postQuery");
const apiPostsChecker = (req, res, next) => {
    console.log(req.query);
    const filter = new postQuery_1.PostQuery(req.query);
    if (filter.currency) {
        next();
    }
    else {
        next(new message_1.apiError('post query', 'do not contain currency', 500));
    }
};
exports.apiPostsChecker = apiPostsChecker;
