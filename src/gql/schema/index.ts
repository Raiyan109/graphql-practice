export const typeDefs = `#graphql
    type Product  {
        id: ID!
        name: String
        category: Category
        price: Float
        stock: Float
        description: String
    }

    type Category {
        id: ID!
        name: String
    }

  type Query  {
    products: [Product]
    product(productId: ID!): Product
    categories: [Category]
    category(categoryId: ID!): Category
  }
`;
