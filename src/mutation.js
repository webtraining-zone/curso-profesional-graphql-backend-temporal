const Mutation = {
  async createBook(parent, args, context, info) {
    console.log('Create book with title: ', args.title);

    const book = await context.db.mutation.createBook({
      data: {
        ...args,
      },
    }, info);

    // TODO: Send email notification

    // TODO: Make a post to FB

    return book;
  },
};

module.exports = Mutation;
