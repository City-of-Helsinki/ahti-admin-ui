const { commonFields } = require('./common');
const { getPluralResolver, getSingularResolver } = require('./resolverFactory');

const typeDef = `
extend type Query {
    activities(limit: Int, start: Int, languageFilter: LanguageFilter): [Activity]
    activity(id: ID!, languageFilter: LanguageFilter): Activity
}

type Activity implements MyHelsinkiCommon {
    ${commonFields}
    whereWhenDuration: WhereWhenDuration!
}

type WhereWhenDuration {
    whereAndWhen: String!
    duration: String!
}
`;

const resolvers = {
  Query: {
    activities: getPluralResolver('activities'),
    activity: getSingularResolver('activity')
  }
};

module.exports = { typeDef, resolvers };
