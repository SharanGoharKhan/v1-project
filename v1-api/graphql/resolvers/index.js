//we need to have one resolver which we can then pass to graphqlHttp in rootValue field
const itemsResolver = require('./items');

const rootResolver = {
  ...itemsResolver
};

module.exports = rootResolver;
