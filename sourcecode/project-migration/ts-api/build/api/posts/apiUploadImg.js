"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiUploadImg = void 0;
const data_1 = require("../../data");
const static_1 = require("../general/static");
const apiUploadImg = (req, res) => {
    const postIndex = data_1.DataStore.posts.findIndex((item) => {
        return item.id == req.params.id;
    });
    console.log(postIndex);
    if (postIndex == -1) {
        res.status(404).json({ status: "failed", message: "faile upload failed" });
    }
    else {
        const upload = static_1.getUploaderFile(req.app.get("env"));
        upload(req, res, (err) => {
            if (err) {
                console.log(err);
                res.json({ status: "failed", message: " file upload failed" });
            }
            else {
                data_1.DataStore.posts[postIndex].img.push(req.file.fieldname);
                res.json({ status: "failed", message: " file upload failed" });
            }
        });
    }
};
exports.apiUploadImg = apiUploadImg;
