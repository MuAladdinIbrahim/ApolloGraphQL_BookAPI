module.exports = {
      hello: () => 'Hello world!',
      welcome: ()=> "welcome",
      book: async (parent:any, {id}:any, { dataSources } :any,info:any)=> {
          return dataSources.books.getBook(id);
      },
      author:(parent:any, {id}:any, { dataSources } :any,info:any)=> {
          return {name:"muhammad"}
      }
};