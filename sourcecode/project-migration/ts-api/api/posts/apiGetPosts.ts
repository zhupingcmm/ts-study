import {DataStore} from '../../data';
import { RequestHandler} from 'express';
import {PostsSummary, Posts} from '../../model/shared/postsSummary';

export const apiGetPosts:RequestHandler = (req, res) =>{
    res.json(DataStore.posts);
}
