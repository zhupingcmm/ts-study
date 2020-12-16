import {DataStore} from '../../data';
import { RequestHandler} from 'express';
import {PostsSummary, Posts} from '../../model/shared/postsSummary';
import { PostDeail } from '../../model/shared/postDetail'


export const apiGetPostDetail:RequestHandler = (req, res) =>{
    const postData = DataStore.posts.find((ele:any)=>{return ele.id == parseInt(req.params.id);});
    const todoData = DataStore.todos.filter((ele:any)=>{return ele.postid == parseInt(req.params.id);});
    console.log("postData", todoData,postData )
    if(postData){
        res.json(new PostDeail(postData, todoData))
    }else{
        res.status(404).json({status:'failed',message:'can not fetch the right data'})
    }
    
    // console.log('id', req.params.id)
    // const {id} = req.params;
    // DataStore.posts.forEach((item:Posts) =>{
    //     if(parseInt(req.params.id) == item.id){
    //         res.json(new PostsSummary(item))
    //     }
    // });
}