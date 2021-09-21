import {Document, Schema} from 'mongoose';

interface INOtas extends Document{
    name: string,
    date: Date,
    to: string,
    rtte: {
        name: string,
        street: string,
        nationality: string,
        dni: string,
        rol: string
    },
    option: string,
    object: string,
    extras: string,

    //Info DB
    createdAt: Date;
    modifiedAt: Date;
}

const NotasSchema: Schema = new Schema({
    name: {type: String, required:true},
    date: Date,
    to: String,
    rtte: {
        name: String,
        street: String,
        nationality: String,
        dni: String,
        rol: String
    },
    option: String,
    object: String,
    extras: String,
});