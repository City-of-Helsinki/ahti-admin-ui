require('dotenv').config({ path: '.env' });

module.exports = {
  client: {
    includes: ['src/domain/places/placesQuery.ts'],
    service: {
      name: 'MyHelsinki GraphQL',
      url: process.env.REACT_APP_MYHELSINKI_GRAPHQL_API_URI
    }
  }
};
