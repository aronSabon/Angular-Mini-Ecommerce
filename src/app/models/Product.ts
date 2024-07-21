




export class Product {
    id: number;
    title: string;
    price: number;
    discountedPrice?: number;
    description: string;
    category: string;
    image: string;
    available?: boolean;
    rating: {
        rate: number;
        count: number;
    }
}