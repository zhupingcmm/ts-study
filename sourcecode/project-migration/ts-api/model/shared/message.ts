export class apiError extends Error{
    constructor(name: string, message: string, public status: number){
        super();
        this.name = name;
        this.message = message;
        this.status = status;
    }
}

export class PublicInfo{
    constructor(message: string, public status: number, public properties?: any){}
}