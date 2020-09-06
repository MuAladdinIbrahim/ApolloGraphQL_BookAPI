import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    hello: String,
    welcome:String,
    book(
        id:ID
        price:Float
        title:String
        description: String
    ):Book,
    author:Author,
  }
  type Book {
      id:ID,
      title:String,
      price:Float,
      description:String
  }
  type Author {
      name:String
  }
`;
export default typeDefs;
