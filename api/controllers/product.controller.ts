import { Request, Response } from "express";
import { TypeOf } from "zod";
import {
  CreateProductInput,
  createProductSchema,
  deleteProductSchema,
  getProductSchema,
  updateProductSchema,
} from "../schemaValidators/product.schema";
import { createProduct, deleteProduct, findAndUpdateProduct, findProduct, findProducts, buyProducts } from "../services/product.service";

// get product/
export async function getAllProductsHandler(req: Request<{}, {}, CreateProductInput["body"]>, res: Response, next: any) {
  try {
    const products = await findProducts({});
    if (!products) {
      return res.sendStatus(404);
    }
    return res.send(products);
  } catch (error) {
    next(error);
  }
}

// get product/:id

export async function getSingleProductHandler(req: Request<{}, {}, TypeOf<typeof getProductSchema>>, res: Response, next: any) {
  const id = req.params.id;
  try {
    const product = await findProduct({ id });
    if (!product) {
      return res.sendStatus(404);
    }
    return res.send(product);
  } catch (error) {
    next(error);
  }
}

// post product/
export async function createProductHandler(req: Request<{}, {}, TypeOf<typeof createProductSchema>>, res: Response) {
  const body = req.body.body;
  // const product = await createProduct(...body);
  // return res.send(product);
  return res.send({});
}

// patch product/:id

export async function updateSingleProductHandler(req: Request<{}, {}, TypeOf<typeof updateProductSchema>>, res: Response) {
  const body = req.body;
  const id = req.params.id;
  const product = await findProduct({ id });

  if (!product) {
    return res.sendStatus(404);
  }

  const updatedProduct = await findAndUpdateProduct({ id }, body, {
    new: true,
  });

  return res.send(updatedProduct);
}

// delete product/:id
export async function deleteProductHandler(req: Request<{}, {}, TypeOf<typeof deleteProductSchema>>, res: Response) {
  const id = req.params.id;
  const product = await findProduct({ id });
  if (!product) {
    return res.sendStatus(404);
  }
  await deleteProduct({ id });
  return res.sendStatus(200);
}

export async function buyProductsHandler(req: Request, res: Response) {
  const products = req.body;

  if (!products || products.length === 0) {
    return res.sendStatus(404);
  }

  try {
    await buyProducts(products)
  } catch (error) {
    res.send(error);
  }

  return res.sendStatus(200);
}
