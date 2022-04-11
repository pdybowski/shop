import { FilterQuery, QueryOptions } from 'mongoose'
import BrandModel from '../models/brand.model'
import ProductModel from '../models/product.model';
import SportModel from '../models/sport.model';

export async function findPageResource(
    query: FilterQuery<any>,
    options: QueryOptions = { lean: true}) {
    try {
        const products = await ProductModel.find();
        const brands = await BrandModel.find();
        const sports = await SportModel.find();
        const result = {
            products,
            brands, 
            sports
        }
        return result
    } catch (e) {
        throw e
    }
}