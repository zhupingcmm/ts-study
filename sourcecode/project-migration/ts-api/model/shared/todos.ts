export class Todos {
    postid: number;
    name: string;
    star: number;
    constructor(data: any){
        this.postid = data.postid;
        this.name = data.name;
        this.star = data.star
    }
}