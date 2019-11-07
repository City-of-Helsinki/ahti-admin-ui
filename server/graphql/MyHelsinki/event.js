const { commonFields } = require('./common');
const { getPluralResolver, getSingularResolver } = require('./resolverFactory');

const typeDef = `
extend type Query {
    events(limit: Int, start: Int, languageFilter: LanguageFilter): [Event]
    event(id: ID!, languageFilter: LanguageFilter): Event
}

type Event implements MyHelsinkiCommon {
    ${commonFields}
    eventDates: EventDates!
}

type EventDates {
    startingDay: String!
    endingDay: String!
    additionalDescription: [AdditionalDescription!]
}

type AdditionalDescription {
    langCode: String!
    text: String!
}
`;

const resolvers = {
  Query: {
    events: getPluralResolver('events'),
    event: getSingularResolver('event')
  }
};

module.exports = { typeDef, resolvers };
