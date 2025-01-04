export type Product = {
    id: number,
    name: string,
    price: number,
    title:string,
    description: string,
    image: string,
    category: string,
    rating: {
        rate: number,
        count: number
    }
}

