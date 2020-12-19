import { V4MAPPED } from 'dns';
import {RequestHandler} from 'express';
import { v4 as uuidv4 } from 'uuid';
import { NewPost} from '../../interface/NewPost';
import {DataStore} from '../../data/index';

export const apiNewPost: RequestHandler =(req, res) => {
    const newPost: NewPost={
        id:uuidv4(),
        name: req.body.name,
        currency: req.body.currency,
        price: req.body.price,
        img: [],
    }
    DataStore.posts.push(newPost);

    // console.log(req.body);
    res.json(newPost);
}