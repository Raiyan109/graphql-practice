export const typeDefs = `#graphql
    type Product  {
        id: ID!
        name: String
        category: Category
        price: Float
        stock: Float
        description: String
        reviews: [Review]
    }

    type Category {
        id: ID!
        name: String
        products: [Product]
    }

    type Review {
        id: ID!
        review: String
        rating: Int
        date: String
        productId: String
    }

  type Query  {
    products: [Product]
    product(productId: ID!): Product
    categories: [Category]
    category(categoryId: ID!): Category
  }
`;
