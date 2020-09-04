import express from "express";
import { ApolloServer, gql } from 'apollo-server-express';
import  resolvers from "../resolvers";
import  typeDefs from "../schema";

const app = express();
const port = process.env.PORT || 3000;

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.applyMiddleware({app})
//TODO console.log not allowed in npm run build
app.listen({port}, () => console.log(`server running on ${port}${server.graphqlPath}`));
