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
        "categoryId": 1,
        "price": 45.99,
        "stock": 75,
        "description": "Portable Bluetooth speaker with 10-hour battery life."
    },
    {
        "id": 3,
        "name": "Gaming Keyboard",
        "categoryId": 2,
        "price": 45.99,
        "stock": 75,
        "description": "Mechanical gaming keyboard with RGB lighting."
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
const reviews = [
    {
        "id": "1",
        "review": "Great product! Works as advertised.",
        "rating": 5,
        "date": "2025-01-20",
        "productId": 1
    },
    {
        "id": "2",
        "review": "The quality is decent but could be better.",
        "rating": 3,
        "date": "2025-01-18",
        "productId": 2
    },
    {
        "id": "3",
        "review": "Excellent customer service and fast delivery.",
        "rating": 4,
        "date": "2025-01-15",
        "productId": 3
    },
    {
        "id": "4",
        "review": "Not worth the price. Very disappointed.",
        "rating": 2,
        "date": "2025-01-10",
        "productId": 1
    },
    {
        "id": "5",
        "review": "Outstanding performance and durability.",
        "rating": 5,
        "date": "2025-01-05",
        "productId": 2
    }
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
        },
        reviews: (parent, args, context) => {
            return reviews.filter(review => review.productId === parent.id);
        }
    },
    Category: {
        products: (parent, args, context) => {
            const result = products.filter((product) => product.categoryId === parent.id);
            return result;
        }
    }
};
