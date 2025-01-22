const products = [
    {
        "id": 1,
        "name": "Wireless Mouse",
        "categoryId": 1,
        "price": 25.99,
        "stock": 150,
        "description": "Ergonomic wireless mouse with adjustable DPI settings."
    },
    {
        "id": 2,
        "name": "Bluetooth Speaker",
        "categoryId": 2,
        "price": 45.99,
        "stock": 75,
        "description": "Portable Bluetooth speaker with 10-hour battery life."
    },
];
const categories = [
    {
        "id": 1,
        "name": "Electronics",
        "description": "Devices and gadgets including phones, laptops, and accessories."
    },
    {
        "id": 2,
        "name": "Gaming",
        "description": "Gaming consoles, accessories, and related merchandise."
    },
];
export const resolvers = {
    Query: {
        products: () => products,
        product: (parent, args, context) => {
            const result = products.find(product => product.id === Number(args.productId));
            return result;
        },
        categories: () => categories,
        category: (parent, args, context) => {
            const result = categories.find(category => category.id === Number(args.categoryId));
            return result;
        }
    },
    Product: {
        category: (parent, args, context) => {
            const result = categories.find((category) => category.id === parent.categoryId);
            return result;
        }
    }
};
