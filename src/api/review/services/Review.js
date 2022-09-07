const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::review.review', ({ strapi }) => ({
  async average(restaurantID) {
    console.time('Function #1');

    const result = await strapi.db.connection('restaurants')
      .join('reviews_restaurant_links', 'restaurants.id', '=', 'reviews_restaurant_links.restaurant_id')
      .join('reviews', 'reviews_restaurant_links.review_id', '=', 'reviews.id')
      .where({ restaurant_id: restaurantID })
      .avg('note');

    console.timeEnd('Function #1');

    return result[0]['avg(`note`)'];
  }, 

  // async average(restaurantID) {
  //   console.time('Function #2');

  //   const query = {
  //     populate: ['reviews'],
  //   };

  //   const result = await strapi.service('api::restaurant.restaurant')
  //     .findOne(restaurantID, query);

  //   const average = result.reviews.reduce((acc, cur) => acc + cur.note, 0) / result.reviews.length; 
  //   console.timeEnd('Function #2');

  //   return average;
  // }
}));
