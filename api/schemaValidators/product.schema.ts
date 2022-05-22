import { number, object, string, TypeOf } from "zod";

const productSchema = object({
    body: object({
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
        }),
        size: string({
            required_error: 'Size is required'
        })
    })
})

const payloadUpdateSchema = object({
body: object({ 
    name: string(),
    price: number(),
    sportType: string(),
    productCategory: string(),
    brand: string(),
    description: string(),
    img: string(),
}).partial()})

// TODO
// ADD A WAY TO REQUIRE OBJECTID IN REQUEST PARAMS
  

export type CreateProductInput = TypeOf<typeof productSchema>['body']
export type UpdateProductInput = TypeOf<typeof payloadUpdateSchema>['body']
