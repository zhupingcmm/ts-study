import { PostsSummary } from './postsSummary';
import { Todos } from './todos';

export class PostDeail extends PostsSummary{
    age:number;
    sex:string;
    todos: Todos;
    img: string[] | undefined;
    constructor(postData:any, todoData: any, imgUrls: string[] | undefined){
        super(postData);
        this.age = postData.age;
        this.sex = postData.sex;
        this.todos = todoData.map((item: Todos) =>{return new Todos(item)});
        this.img = imgUrls;
    }
}