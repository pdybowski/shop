import { Product } from "./product";

export class PageResource {
    products: Product[] = [];
}

export interface PageResourceEditType extends Partial<PageResource> {}