import {Response,Request} from 'express';

export function signIn(req: Request,res: Response){
    res.json({
        msg: 'logIn'
    })
}

export function signUp(req: Request,res: Response){
    res.json({
        msg: 'logUp'
    })
}