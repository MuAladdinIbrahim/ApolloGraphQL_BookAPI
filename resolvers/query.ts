module.exports = {
      hello: () => 'Hello world!',
      welcome: ()=> "welcome",
      book: (parent:any, args:any, { dataSources } :any,info:any)=> {
          return dataSources.books.getBook(args);
      },
      author:()=> {}
};