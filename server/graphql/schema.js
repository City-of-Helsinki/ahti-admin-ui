const { merge } = require('lodash');

const { makeExecutableSchema } = require('apollo-server');

const Common = require('./MyHelsinki/common').typeDefs;
const Activity = require('./MyHelsinki/activity').typeDef;
const Event = require('./MyHelsinki/event').typeDef;
const Place = require('./MyHelsinki/place').typeDef;

const activityResolvers = require('./MyHelsinki/activity').resolvers;
const eventResolvers = require('./MyHelsinki/event').resolvers;
const placeResolvers = require('./MyHelsinki/place').resolvers;

const Query = `
type Query {
    _empty: String
}
`;

const schema = makeExecutableSchema({
  typeDefs: [Query, Common, Activity, Event, Place],
  resolvers: merge(activityResolvers, eventResolvers, placeResolvers)
});

module.exports = schema;
