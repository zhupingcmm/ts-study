import {DataStore} from '../../data';
import { RequestHandler} from 'express';
import {PostsSummary, Posts} from '../../model/shared/postsSummary';
import { PostDeail } from '../../model/shared/postDetail'
import { apiError, PublicInfo } from '../../model/shared/message';


export const apiGetPostDetail:RequestHandler = (req, res, next) =>{
    const postData = DataStore.posts.find((ele:any)=>{return ele.id == parseInt(req.params.id);});
    const todoData = DataStore.todos.filter((ele:any)=>{return ele.postid == parseInt(req.params.id);});
    const requireFields =["id"];
    const givenFields = Object.getOwnPropertyNames(req.body);
    if(!requireFields.every(field => givenFields.includes(field))){
        return next(new apiError('Data missing', 'Not all required fields supplied', 400))
    }

    console.log("postData", todoData,postData )
    const imgUrls = postData?.img.map((item:string) =>{
        if(req.app.get("env") === "development"){
            return `http://localhost:8092/static/${item}`
        }else{
            return `http://baidu.com/${item}`
        }
    });
    console.log("env::", req.app.get("env"))
    if(postData){
        // res.json(new PostDeail(postData, todoData, imgUrls ))
        res.json(new PublicInfo('get success',200, {get: new PostDeail(postData, todoData, imgUrls )}))
    }else{
        res.status(404).json({status:'failed',message:'can not fetch the right data'})
    }
    
}