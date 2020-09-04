import { MongoDataSource } from 'apollo-datasource-mongodb'
import { ObjectId } from 'mongodb'

interface BookDocument {
  _id: ObjectId
  title: String
  price: String
  description:String
}

export default class Books extends MongoDataSource<BookDocument> {
  getBook(bookId:any) {
    return this.findOneById(bookId)
  }
}
