export interface Posts {
    id: string,
    name: string,
    currency:string,
    price: number,
    img: string[] | undefined,
}

export class PostsSummary{
    id: string;
    name: string;
    currency: string;
    price: number;
    img: string[] | undefined;
    constructor(data: Posts){
        this.id = data.id;
        this.name = data.name;
        this.currency = data.currency;
        this.price = data.price;
        this.img = data.img;
    }
}