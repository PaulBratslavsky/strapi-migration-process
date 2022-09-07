const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::restaurant.restaurant', ({ strapi }) => ({
  async find(ctx) {
    const restaurants = await super.find(ctx);

    restaurants.data = await Promise.all(
      restaurants.data.map(async (restaurant) => {

        const average = await strapi
          .service('api::review.review')
          .average(restaurant.id);

        restaurant.attributes.note = average;
        return restaurant;
      })
    );

    return restaurants;
  },

  async findOne(ctx) {


    const restaurant = await super.findOne(ctx);
    const restaurantID = restaurant.data.id;

    const average = await strapi.service('api::review.review').average(restaurantID);
    restaurant.data.attributes.note = average;


    return restaurant;
  }
}));

