import 'dotenv/config';
import app from './app';
import loggerMain from './helpers/logger';
import './db/db';

//log4js necesita el nombre del archivo
const logger = loggerMain('index.js');

const main = () =>{
    try {
        app.listen(app.get('port'),()=>{
            logger.info('servidor arrancado desde el puerto:', app.get('port'));
        });
    } catch (error) {
        //manejar logs con log4js
            logger.debug(error);
    }
};

main();