import { Router } from 'express'
import { getAllPageResource } from '../controllers/page-resource.controller';

const routes = Router();

// get all products WORKING
routes.get('/', getAllPageResource);

export default routes