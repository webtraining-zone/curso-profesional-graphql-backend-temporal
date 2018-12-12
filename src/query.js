const Query = {
  books(parent, args, context, info) {

    // Run something else!!!
    return [
      {
        title: 'Eloquent JavaScript :) fake!!!',
        image: '1.jpg',
      },
      {
        title: 'JavaScript the Good Parts',
        image: '2.jpg',
      },
    ];
  },
};

module.exports = Query;
