"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicInfo = exports.apiError = void 0;
class apiError extends Error {
    constructor(name, message, status) {
        super();
        this.status = status;
        this.name = name;
        this.message = message;
        this.status = status;
    }
}
exports.apiError = apiError;
class PublicInfo {
    constructor(message, status, properties) {
        this.status = status;
        this.properties = properties;
    }
}
exports.PublicInfo = PublicInfo;
