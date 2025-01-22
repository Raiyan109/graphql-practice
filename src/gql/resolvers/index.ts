const products = [
    {
        "id": 1,
        "name": "Wireless Mouse",
        "category": "Electronics",
        "price": 25.99,
        "stock": 150,
        "description": "Ergonomic wireless mouse with adjustable DPI settings."
    },
    {
        "id": 2,
        "name": "Bluetooth Speaker",
        "category": "Electronics",
        "price": 45.99,
        "stock": 75,
        "description": "Portable Bluetooth speaker with 10-hour battery life."
    },
]

export const resolvers = {
    Query: {
        products: () => products,
        product: (parent: any, args: { productId: string }, context: any) => {
            const result = products.find(product => product.id === Number(args.productId))
            return result
        }
    },
};