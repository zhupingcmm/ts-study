"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsSummary = void 0;
class PostsSummary {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.currency = data.currency;
        this.price = data.price;
    }
}
exports.PostsSummary = PostsSummary;
