import 'dotenv/config';
import app from './app';


const main = () =>{
    app.listen(process.env.PORT,()=>{
        console.log('servidor arrancado');
    });
};

main();