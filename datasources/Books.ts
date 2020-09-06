import { MongoDataSource } from 'apollo-datasource-mongodb'
import { Document } from 'mongoose'

export interface IBookDocument extends Document{
  title: String
  price: Number
  description:String
}

export default class Books extends MongoDataSource<IBookDocument> {
  async getBook(id:any) {
    return await this.findOneById(id)
  }
}
