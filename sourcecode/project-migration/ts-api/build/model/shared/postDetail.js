"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDeail = void 0;
const postsSummary_1 = require("./postsSummary");
const todos_1 = require("./todos");
class PostDeail extends postsSummary_1.PostsSummary {
    constructor(postData, todoData) {
        super(postData);
        this.age = postData.age;
        this.sex = postData.sex;
        this.todos = todoData.map((item) => { return new todos_1.Todos(item); });
    }
}
exports.PostDeail = PostDeail;
