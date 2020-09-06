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
  input BookInput {
    title: String!,
    price:Float,
    description:String!,
  }
  type Mutation {
    addBook(book: BookInput): Book
  }
`;
export default typeDefs;
