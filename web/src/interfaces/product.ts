export class Product {
    readonly _id?: string
    name: string
    description: string
    price: number
    size: ShirtSize | ShoeSize | PantsSize
    sportType: SportType 
    productCategory: ProductCategory
    productType: ProductType
    brand: BrandType
    img?: string
    stars?: number
};

export class ProductSale {
    readonly _id?: string;
    name: string;
    img: string;
    price: number;
    stars?: number;
}

export enum SportType  {
    volleyball = 'Volleyball',
    running = 'Running',
    basketball = 'Basketball',
    football = 'Football',
    swimming = 'Swimming',
    tennis = 'Tennis',
    cycling = 'Cycling',
    other = 'Other'
} 

export enum ProductCategory  {
    man = 'Man',
    woman = 'Woman',
    child = 'Child'
} 

export enum ProductType  {
    shoe = 'Shoe',
    shirt = 'Shirt',
    pants = 'Pants',
    other = 'other'
} 

export enum BrandType  {
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

export type ShirtSize = 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'

export type ShoeSize = '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40'  | '41'  | '42' | '43' | '44' | '45' | '46' | '47' | '48'

export type PantsSize = '28' | '30' | '32' | '34' | '36' | '38' | '40' | '42' | '44' | '46'

