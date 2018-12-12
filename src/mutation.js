const Mutation = {
  createBook(parent, args, context, info) {
    return {title: 'You don\'t know JS'};
  },
};

module.exports = Mutation;
