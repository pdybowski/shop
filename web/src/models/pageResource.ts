import { BrandType, Product, SportType } from './product';

class baseModel {
    name: string;
    isEnabled: string;
    logo?: string;
}

export class brandModel extends baseModel {
    name: BrandType;
}

export class sportModel extends baseModel {
    name: SportType;
}

export class PageResource {
    products: Product[] = [];
    sports: sportModel[] = [];
    brands: brandModel[] = [];
}

export interface PageResourceEditType extends Partial<PageResource> {}
