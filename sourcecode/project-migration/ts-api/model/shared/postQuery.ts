export class PostQuery{
    readonly currency: string;
    constructor(data: any){
        this.currency = data.currency;
    }
}