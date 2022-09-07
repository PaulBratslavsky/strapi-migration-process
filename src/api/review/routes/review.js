
const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::review.review', {
  config: {
    create: {
      policies: ['global::is-authenticated'],
    }
  }
});