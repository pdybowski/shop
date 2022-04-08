import cors from 'cors'
import express, {Request, Response, NextFunction} from 'express'
import productRouter from '../routes/product.router'


export function routes(app: express.Express) {
    app.use(cors())
    app.use(express.json());
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Auth-Token");
        if (req.method === "OPTIONS") {
          res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE");
          return res.status(200).json({});
        }
        next();
      });

    app.use('/api/product', productRouter)
}