import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import db from './config/Database/models';


const { setUpRoute } = require('./api/routes');

const app: Application = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req : Request, res : Response) => {
    res.send('Hello World!');
})


// setup Route 
setUpRoute(app);



db.sequelize.sync().then(() => {
    console.log('Database synced');
    app.listen(5002, () => {   
        console.log('tim kucing be app is listening on port 5002!');
    })
})

module.exports = app;


