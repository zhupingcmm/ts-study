"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataFormateHandler = void 0;
const message_1 = require("../../../model/shared/message");
const dateFormat = new RegExp('(\\d{4})-(\\d{1,2})-(\\d{1,2})');
const dataFormateHandler = (req, res, next, value, name) => {
    console.log(name + ': ' + value);
    const parseComponents = dateFormat.exec(value);
    console.log(parseComponents);
    if (parseComponents) {
        const [_, year, month, day] = parseComponents.map((item) => parseInt(item));
        const date = new Date(year, month - 1, day);
        req.params[name] = date + '';
        next();
    }
    else {
        next(new message_1.apiError('Parse Error', 'Date could NOT be parse,Date Format: YYYY-MM-DD', 400));
    }
};
exports.dataFormateHandler = dataFormateHandler;
