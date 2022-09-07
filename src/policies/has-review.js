module.exports = (policyContext, config, { strapi }) => {
  if (policyContext.request.body.data.review) {
    return true;
  }
  console.log(strapi);
  return false; 
};
