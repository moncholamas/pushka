import {RequestHandler} from 'express';
import  Notas  from '../models/notas';
import loggerMain from '../helpers/logger';

const logger = loggerMain('notasController');

export const getNotas: RequestHandler =  async (req, res)=>{
    try {
        //obtener todas las notas desde Mongo
        const notas = await Notas.find();
        return res.status(200).json({
        msg: 'notas encontradas',
        data: notas
    });
    } catch (error) {
        logger.error(error);
        return res.status(400).json({
            msg: "error al buscar notas"
        });
    }
    
};

export const  getNotaById: RequestHandler = async (req,res) =>{
    const idNota = req.params.id;
    try {
        const nota = await Notas.findById(idNota);
        return res.status(200).json({
        data: nota
    });
    } catch (error) {
        logger.error(error);
        return res.status(400).json({
            msg: "error al buscar la nota"
        });
    }
    
}

export const nuevaNota: RequestHandler = async (req,res) =>{
    const notaNueva = req.body;
    try {
        const notaCargada = await Notas.create(notaNueva);
        return res.status(200).json({
            data: notaCargada
        });
    } catch (error) {
        logger.error(error);
        return res.status(300).json({
            msg: "error al cargar la nota"
        })
    }
    
}

export const updateNota: RequestHandler = async (req,res) =>{
    const idNota = req.params.id
    const notaNueva = req.body;
    try {
        const notaCargada = await Notas.updateOne(notaNueva,{id: idNota});
        return res.status(200).json({
            data: notaCargada
        });
    } catch (error) {
        logger.error(error);
        return res.status(300).json({
            msg: "error al cargar la nota"
        })
    }
    
}

export const deleteNota: RequestHandler = async (req,res)=>{
    const idNotaDeleted = req.params.id;
    try {
        const deleted = await Notas.findByIdAndDelete(idNotaDeleted);
        if(!deleted) return res.status(204).json({msg: "No hay coincidencias"});

        return res.status(200).json({
            msg: deleted
        });
    } catch (error) {
        logger.error(error);
        return res.status(300).json({
            msg: "error al borrar la Nota"
        });
    }
    
}

