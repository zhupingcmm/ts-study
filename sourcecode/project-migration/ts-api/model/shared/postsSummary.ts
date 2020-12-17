export interface Posts {
    id: string,
    name: string,
    currency:string,
    price: number
}

export class PostsSummary{
    id: string;
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