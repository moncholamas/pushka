import 'dotenv/config';
import app from './app';
import mongoose from 'mongoose';



const main = () =>{
    mongoose.connect('mongodb://localhost:27017/pushka',()=>{
        console.log('Conectado a la DB'); 
    });

    app.listen(process.env.PORT,()=>{
        console.log('servidor arrancado');
    });
};

main();