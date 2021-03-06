import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import productRouter from "../routes/product.router";
import pageResource from "../routes/page-resource.router";
import userRouter from "../routes/user.router"
import authRouter from "../routes/auth.router"

export function routes(app: express.Express) {
  app.use(cors());
  app.use(express.json());
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Auth-Token"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE");
      return res.status(200).json({});
    }
    next();
  });

  app.use("/api/product", productRouter);
  app.use("/api/pageResource", pageResource);
  app.use("/api/auth", authRouter)
  app.use("/api/user", userRouter)
}
