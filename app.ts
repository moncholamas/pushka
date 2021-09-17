import Express, { json, urlencoded } from 'express';
import notasRouter from './src/routes/notasRouter';

const app = Express();

app.use(json());
app.use(urlencoded({extended:false}));

app.use('/api/notas',notasRouter);

export default app;