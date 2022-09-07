const utils = require('@strapi/utils');
const { PolicyError } = utils.errors;

module.exports = (policyContext, config, { strapi }) => {
  console.log(policyContext.request.body, 'policyContext');
  console.log("Is authenticated policy");

  if (policyContext.state.user) return true;
  throw new PolicyError('You are not allowed to perform this action', {
    policy: 'isAuthenticated',
  });;
};
