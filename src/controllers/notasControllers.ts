import {Request, Response} from 'express';

/*
interface Nota{
    id_nota: number;
    title: string;
    body: string;
}
*/

export  const getNotas = (req: Request, res: Response)=>{
    //obtener todas las notas desde Mongo
    return res.status(200).json({
        msg: 'Hola mundo desde el controller'
    });
};

export function getNotaById():boolean{
    return true;
}

export function nuevaNota():boolean{
    return true;
}

export function updateNota():boolean{
    return true;
}

export function deleteNota():boolean{
    return true;
}

