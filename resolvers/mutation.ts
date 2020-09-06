module.exports = {
    addBook: (parent:any, {book}:any, { dataSources } :any,info:any) => {
      return dataSources.books.addBook(book);
    },
};