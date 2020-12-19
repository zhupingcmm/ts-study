import { RequestHandler } from "express";
import { fileURLToPath } from "url";
import { apiError } from "../../model/shared/message";
import { PostQuery } from "../../model/shared/postQuery";

export const apiPostsChecker: RequestHandler =(req, res, next)=>{
    console.log(req.query);
    const filter = new PostQuery(req.query);
    if(filter.currency){
        next()
    }else{
        next(new apiError('post query', 'do not contain currency', 500))
    }
}