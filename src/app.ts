import Express, { json, urlencoded } from 'express';
import notasRouter from './routes/notasRouter';

//inicialización
const app = Express();

//configuraciones
app.set('port', process.env.PORT || 3030);

//middlewares
app.use(json());
app.use(urlencoded({extended:false}));

//rutas
app.use('/api',notasRouter);


export default app;