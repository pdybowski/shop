import { Request, Response } from 'express'
import { findPageResource } from '../services/page-resource.service'

// get product/
export async function getAllPageResource(req: Request<{}, {}>, res: Response, next: any ) {
    try {
        const pageResource = await findPageResource({});
        return res.send(pageResource)
    } catch (error) {
        next(error);
    }
}
