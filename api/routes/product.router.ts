import  {Router} from 'express'
import { getAllProductsHandler, getSingleProductHandler, createProductHandler, updateSingleProductHandler, deleteProductHandler} from '../controllers/product.controller'

function productRouter(router: Router) {
    // get all products
    router.get('/', getAllProductsHandler)
    // get single product
    router.get('/:id', getSingleProductHandler)
    // create product
    router.post('/', createProductHandler)
    // update product
    router.patch('/:id', updateSingleProductHandler)
    // remove product
    router.delete('/:id', deleteProductHandler)
    }

export default productRouter