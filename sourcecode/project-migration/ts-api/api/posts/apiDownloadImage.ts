import { RequestHandler } from "express";

import path from 'path';
import { apiError } from "../../model/shared/message";
export const apiDownloadImage: RequestHandler =(req, res, next)=>{
    const fileID  =  req.params.id;

    res.download(path.resolve('./','public','img', fileID),(error)=>{
        if(error){
            next(
                new apiError('Dowload Failed', 'Cannot download requested file', 400)
              );
        }
    })


}