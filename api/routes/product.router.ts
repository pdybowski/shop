import { Router } from 'express'
import { getAllProductsHandler, getSingleProductHandler, createProductHandler, buyProductsHandler, updateSingleProductHandler, deleteProductHandler} from '../controllers/product.controller'

const routes = Router();

// get all products WORKING
routes.get('/', getAllProductsHandler)

// create product WORKING
routes.post('/', createProductHandler)

// buy products
routes.put('/buy', buyProductsHandler)

// get single product WORKING
routes.get('/:id', getSingleProductHandler)
// update product WORKING
routes.patch('/:id', updateSingleProductHandler)
// // remove product
routes.delete('/:id', deleteProductHandler)

export default routes