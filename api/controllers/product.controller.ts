import { NextFunction, Request, Response } from "express";
import {
  CreateProductInput
} from "../schemaValidators/product.schema";
import {
  createProduct,
  deleteProduct,
  findAndUpdateProduct,
  findProduct,
  findProducts,
  buyProducts,
} from "../services/product.service";

// get product/
export async function getAllProductsHandler(
  req: Request<{}, {}>,
  res: Response,
  next: any
) {
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

export async function getSingleProductHandler(
  // TODO update request so it looks similar to createProductHandler
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = req.params.id;
  console.log("getSingleProductHandler, id", id)
  try {
    const product = await findProduct({ _id: id });
    console.log("getSingleProductHandler, product", product)
    if (!product) {
      return res.sendStatus(404);
    }
    return res.send(product);
  } catch (error) {
    next(error);
  }
}

// post product/
export async function createProductHandler(
  req: Request<{}, {}, CreateProductInput>,
  res: Response,
  next: NextFunction
) {
  try {
    
    const body = req.body
    const product = await createProduct({...body
    })
    res.status(201).json({
      status: 'created',
      product
    })
  } catch (err: any) {
    
      return res.status(400).json({
        status: 'fail',
        message: 'Failed to create product',
        error: err
      });
      next(err)
    }
  };
  // const body = req.body;
  // const product = await createProduct(...body);
  // // return res.send(product);
  // return res.send({});

// patch product/:id

export async function updateSingleProductHandler(
  // TODO update request so it looks similar to createProductHandler
  req: Request,
  res: Response,
  next: NextFunction
) {
  const body = req.body;
  const id = req.params.id;
  const product = await findProduct({ _id: id });

  if (!product) {
    return res.sendStatus(404);
  }

  const updatedProduct = await findAndUpdateProduct({ id }, body, {
    new: true,
  });

  return res.send(updatedProduct);
}

// delete product/:id
export async function deleteProductHandler(
  // TODO update request so it looks similar to createProductHandler
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = req.params.id;
  
  try {
  
    await deleteProduct({ _id:id });
    res.status(200).json({ message: "Product removed" });
  } catch (error) {
    next(error);
  }
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
