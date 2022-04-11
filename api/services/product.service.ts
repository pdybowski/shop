import {FilterQuery, QueryOptions, UpdateQuery} from 'mongoose'
import ProductModel, {
    IProductDocument, IProductInput
} from "../models/product.model"

export async function createProduct(input: IProductInput) {
    try {
        const result = await ProductModel.create(input) 
        return result
    } catch (e) {
        throw e
    }
}


export async function findProduct(
    query: FilterQuery<IProductDocument>,
    options: QueryOptions = { lean: true}) {
    try {
        const result = await ProductModel.findOne(query, {}, options)
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
    options: QueryOptions
    ) {
    try {
        return ProductModel.findOneAndUpdate(query, update, options)
    } catch (e) {
        throw e
    }
}


export async function deleteProduct(query: FilterQuery<IProductDocument>) {
    try {
        return ProductModel.deleteOne(query)
    } catch (e) {
        throw e
    }
}