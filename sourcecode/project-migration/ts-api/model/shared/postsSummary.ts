export interface Posts {
    id: number,
    name: string,
    currency:string,
    price: number
}

export class PostsSummary{
    id: number;
    name: string;
    currency: string;
    price: number;
    constructor(data: Posts){
        this.id = data.id;
        this.name = data.name;
        this.currency = data.currency;
        this.price = data.price;
    }
}