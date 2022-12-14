const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::review.review');

// module.exports = {
//   create: async (ctx) => {
//     // Set the reviewer ID as author key based on the login user info.
//     // https://strapi.io/documentation/3.x.x/guides/authentication.html#user-object-in-strapi-context
//     
// can be policy or middleware for content api is-same-user
//     try {
//       ctx.request.body.author = ctx.state.user.id
//     } catch (err) {
//       return ctx.badRequest(null, 'Can\'t find authenticated user ID');
//     }
// this can be handled from admin options
//     if (!ctx.request.body.restaurant) {
//       return ctx.badRequest(null, '`restaurant` attribute is missing');
//     }

//     if (!ctx.request.body.note) {
//       return ctx.badRequest(null, '`note` attribute is missing');
//     }
// no need to do at all
//     try {
//       ctx.request.body.note = parseInt(ctx.request.body.note);
//     } catch (err) {
//       return ctx.badRequest(null, '`note` attribute have to be an integer');
//     }

//     if (ctx.request.body.note < 0 || ctx.request.body.note > 5) {
//       return ctx.badRequest(null, '`note` attribute have to be between 0 and 5');
//     }

//     return strapi.api.review.services.review.create(ctx.request.body);
//   }
// };
