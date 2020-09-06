import express from "express";
import { ApolloServer } from "apollo-server-express";
import resolvers from "../resolvers";
import typeDefs from "../schema";
import Books from "../datasources/Books";
import Book from "./models/book.model"
import { connect } from "./db"

const app = express();
const port = process.env.PORT || 3000;

connect();

const dataSources = () => ({
  books: new Books(Book),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.applyMiddleware({ app });

//TODO console.log not allowed in npm run build

app.listen({ port }, () =>
  console.log(`server running on ${port}${server.graphqlPath}`)
);
