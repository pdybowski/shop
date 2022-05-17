import {Request, Response, NextFunction} from 'express'
import {AnyZodObject, ZodError} from 'zod'

const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {

    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        })
    } catch (err: any) {
        if (err instanceof ZodError) {
            return res.status(400).json({
              status: 'fail',
              error: err.errors,
            });
          }
          next(err);
}
}

export default validate;