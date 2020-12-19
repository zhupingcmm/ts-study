import {DataStore} from '../../data';
import { RequestHandler} from 'express';
import {PostsSummary, Posts} from '../../model/shared/postsSummary';
import { PostQuery } from '../../model/shared/postQuery';

export const apiGetPosts:RequestHandler = (req, res) =>{
    const filters = new PostQuery(req.query);
    if(filters){

    }
    res.json(DataStore.posts);
}
