export const aShirtSizes = <const>['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
export type tShirtSizes = typeof aShirtSizes[number];

export const aSizes = <const>[
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
];
export type tSizes = typeof aSizes[number];

export class Product {
    readonly _id?: string;
    name: string;
    description: string;
    price: number;
    size: tShirtSizes | tSizes;
    sportType: SportType;
    productCategory: ProductCategory;
    productType: ProductType;
    brand: BrandType;
    img?: string;
    stars?: string;
    sellCount?: number;
}

export enum SportType {
    volleyball = 'Volleyball',
    running = 'Running',
    basketball = 'Basketball',
    football = 'Football',
    swimming = 'Swimming',
    tennis = 'Tennis',
    cycling = 'Cycling',
    other = 'Other',
}

export enum ProductCategory {
    man = 'Man',
    woman = 'Woman',
    child = 'Child',
    bestseller = 'Bestsellers',
}

export enum ProductType {
    shoe = 'Shoe',
    shirt = 'Shirt',
    pants = 'Pants',
    other = 'other',
}

export enum BrandType {
    adidas = 'Adidas',
    nike = 'Nike',
    jackWolfskin = 'Jack Wolfskin',
    fourF = '4F',
    asics = 'Asics',
    reebok = 'Reebok',
    converse = 'Converse',
    umbro = 'Umbro',
    underArmour = 'Under Armour',
}
