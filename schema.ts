import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    hello: String,
    welcome:String,
    book(
        id:ID
        title:String
        description: String
    ):Book,
    author:Author,
  }
  type Book {
      title:String,
      price:Float,
      description:String
  }
  type Author {
      name:String
  }
`;
export default typeDefs;
