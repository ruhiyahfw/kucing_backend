import { Application, Request, Response } from "express";

const breedRouter = require('./breed')

function setUpRoute(app: Application) {
    app.use('/api/breed', breedRouter);


    app.use((req, res, next)=> {
        let error : any = new Error("Not found");
        error.status = 404;
        next(error);
    })
    
    app.use((error: any, req: any, res: any, next: any)=>{
        res.status(error.status || 500);
        res.json({
            message: error.message
        })
    })
}

module.exports = { setUpRoute };



