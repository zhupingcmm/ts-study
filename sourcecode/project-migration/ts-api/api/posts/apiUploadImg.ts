import { RequestHandler } from 'express';
import { DataStore } from '../../data'
import { getUploaderFile } from '../general/static';

export const apiUploadImg: RequestHandler =(req, res) =>{
    const postIndex = DataStore.posts.findIndex((item: any) =>{
        return item.id == req.params.id;
    });

    console.log(postIndex);

    if(postIndex == -1){
        res.status(404).json({status:"failed", message: "faile upload failed"})
    }else{
        const upload = getUploaderFile(req.app.get("env"));
        upload(req, res, (err: any) =>{
            if(err){
                console.log(err);
                res.json({status: "failed", message: " file upload failed"})
            }else{
                DataStore.posts[postIndex].img.push(req.file.fieldname)
                res.json({status: "failed", message: " file upload failed"})

            }
        })
    }



}