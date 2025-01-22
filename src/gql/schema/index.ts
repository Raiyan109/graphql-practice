export const typeDefs = `#graphql
type Product  {
  id: ID!
  name: String
  category: String
  price: Float
  stock: Float
  description: String
}

  type Query  {
    products: [Product]
    product(productId: ID!): Product
  }
`;
