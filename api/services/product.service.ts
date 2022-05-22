import {FilterQuery, QueryOptions, UpdateQuery} from 'mongoose'
import ProductModel, {
    IProductDocument, IProductInput
} from "../models/product.model"

export async function createProduct(input: IProductInput) {
    try {

        // console.log("createProductService, input", input)
        const result = await ProductModel.create(input) 
        // console.log("createProductService, result", result)
        
        return result
    } catch (e) {
        throw e
    }
}


export async function findProduct(
    query: FilterQuery<IProductDocument>,
    options: QueryOptions = { lean: true}) {
    try {
        console.log("find Product service query", query)
        const result = await ProductModel.findById(query, {}, options)
        console.log("find Product service", result)
        return result
    } catch (e) {
        throw e
    }
}

export async function findProducts(
    query: FilterQuery<IProductDocument>,
    options: QueryOptions = { lean: true}) {
    try {
        const result = await ProductModel.find(query, {}, options)
        return result
    } catch (e) {
        throw e
    }
}


export async function findAndUpdateProduct(
    query: FilterQuery<IProductDocument>,
    update: UpdateQuery<IProductDocument>,
    options: QueryOptions = { lean: true})
    {
    try {
        console.log("findAndUpdateProduct service query", query)
        console.log("findAndUpdateProduct service update", update)
        const product = await ProductModel.findByIdAndUpdate(query.id, update, options)
        console.log("findAndUpdateProduct service product", product)
        return product
    } catch (e) {
        throw e
    }
}


export async function deleteProduct(query: FilterQuery<IProductDocument>) {
    
        const product = await ProductModel.findById(query)
        if (!product) {
            return "Product not found"
        }

        await ProductModel.findOneAndDelete(query)
        return true
}

export async function buyProducts(products: Array<any>) {

    for (let i = 0; i < products.length; i++) {
        try {
            const product = products[i];

            const oldProduct = await ProductModel.findById(product._id)
            if (!oldProduct) return;

            if (!oldProduct) {
                oldProduct.sellCount = 0;
            } else if (typeof oldProduct !== 'number') {
                oldProduct.sellCount = +oldProduct.sellCount;
            }

            await ProductModel.findByIdAndUpdate(product._id, { sellCount: oldProduct.sellCount + product.count });
        } catch (e) {
            throw e;
        }
    }
}