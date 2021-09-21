import mongoose from 'mongoose';
import loggerMain from '../helpers/logger';
import config from '../config/config'

const logger = loggerMain('db');


mongoose.connect(config.DB.URI);

const conection = mongoose.connection;

conection.once('open',()=>{
    logger.info('DB conect!');
});

conection.on('error',err=>{
    logger.error(err);
});




