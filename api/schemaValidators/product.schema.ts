import { z, number, object, string, TypeOf } from "zod";

const payload = {
    body: z.object({
        name: string({
            required_error: 'Name is required'
        }),
        price: number({
            required_error: 'Price is required'
        }),
        sportType: string({
            required_error: 'Sport type is required'
        }),
        productCategory: string({
            required_error: 'Product Category is required'
        }),
        brand: string({
            required_error: 'Brand is required'
        })
    })
}

const payloadUpdateSchema = {
body: z.object({ 
    name: string(),
    price: number(),
    sportType: string(),
    productCategory: string(),
    brand: string(),
    description: string(),
    img: string(),
}).partial()}

// TODO
// ADD A WAY TO REQUIRE OBJECTID IN REQUEST PARAMS
  

export const createProductSchema = object({...payload})
export const updateProductSchema = object({...payloadUpdateSchema})
export const deleteProductSchema = object({...payload})
export const getProductSchema = object({...payload})

export type CreateProductInput = TypeOf<typeof createProductSchema>
export type UpdateProductInput = TypeOf<typeof updateProductSchema>
export type DeleteProductInput = TypeOf<typeof deleteProductSchema>
export type GetProductInput = TypeOf<typeof getProductSchema>