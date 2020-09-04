import express from "express";
import { ApolloServer } from "apollo-server-express";
import resolvers from "../resolvers";
import typeDefs from "../schema";
import Books from "../datasources/books";
import { MongoClient } from "mongodb";

const app = express();
const port = process.env.PORT || 3000;

const uri = "mongodb+srv://aladdin:aladdin@cluster0.3ydvq.mongodb.net/graphql_events?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});
client.connect();

const dataSources = () => ({
  books: new Books(client.db().collection("events")),
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