import { RequestHandler } from "express";
import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export function getUploaderFile(env:string): RequestHandler{
    switch (env) {
        case 'development':
          const fileID = uuidv4();
          const fileStore = multer.diskStorage({
            destination: function(req, file, callback) {
              callback(null, path.resolve('./', 'public', 'img'));
            },
            filename: function(req, file, callback) {
              callback(null, fileID + path.extname(file.originalname));
            }
          });
          return multer({ storage: fileStore }).single('file');
        case 'production':
          return (req, res, next) => {
            next();
          };
        default:
          return (req, res, next) => {
            next();
          };
      }
}