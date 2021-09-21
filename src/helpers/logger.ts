import {configure, getLogger} from 'log4js';
//configure('./');

const loggerMain = (path: string)=>{
  //configure
  const logger = getLogger(path);
  logger.level= 'all';
  return logger;
}

export default loggerMain;
