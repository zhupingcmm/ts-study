"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStore = void 0;
const posts_json_1 = __importDefault(require("./posts.json"));
const todo_json_1 = __importDefault(require("./todo.json"));
class DataStore {
}
exports.DataStore = DataStore;
DataStore.posts = posts_json_1.default;
DataStore.todos = todo_json_1.default;
