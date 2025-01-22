import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const typeDefs = `#graphql
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
  }
`;
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
];
const resolvers = {
    Query: {
        products: () => products
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
