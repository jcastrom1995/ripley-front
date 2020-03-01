export class Product {
    _id: string;
    sku: string;
    picture: string;
    brand: string;
    name: string;
    maxPrice: number;
    mediumPrice: number;
    minPrice: number;
    isOffer: boolean;
    percent: number;
    quantity?: number;
    __v: number;
}
