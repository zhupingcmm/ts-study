import { Request, Response, NextFunction } from 'express';
export interface CustomerRequest extends Request {
    user?: string
}

export interface CustomerReponse extends Response { }

export type CustomerRequestHanlder = (req: CustomerRequest, res: CustomerReponse, next: NextFunction) => any