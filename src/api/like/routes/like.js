
const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::like.like', {
  config: {
    create: {
      policies: ['global::has-review'],
    }
  }
});