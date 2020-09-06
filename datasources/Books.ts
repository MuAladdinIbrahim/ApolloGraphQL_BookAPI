import { MongoDataSource } from 'apollo-datasource-mongodb'
import { Document } from 'mongoose'
import Book from "../src/models/book.model"

export interface IBookDocument extends Document{
  title: String
  price: Number
  description:String
}

export default class Books extends MongoDataSource<IBookDocument> {
  async getBook(id:any) {
    return await this.findOneById(id)
  }
  async addBook(book:any){
    return await Book.create(book)
  }
}
