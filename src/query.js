const {forwardTo} = require('prisma-binding');

const Query = {
  // async books(parent, args, context, info) {
  //
  //
  //   const books = await context.db.query.books();
  //
  //   return books;
  //
  // },

  books: forwardTo('db'),
  book: forwardTo('db'),
};

module.exports = Query;
