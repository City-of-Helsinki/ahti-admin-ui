const { commonFields } = require('./common');
const { getPluralResolver, getSingularResolver } = require('./resolverFactory');

const typeDef = `
extend type Query {
    places(limit: Int, start: Int, languageFilter: LanguageFilter): [Place]
    place(id: ID!, languageFilter: LanguageFilter): Place
}

type Place implements MyHelsinkiCommon {
    ${commonFields}
    openingHours: OpeningHours!
}

type OpeningHours {
    hours: [OpeningHour!]!
    openingHoursException: String
}

type OpeningHour {
    weekdayId: Int!
    opens: Time!
    closes: Time!
    open24h: Boolean
}

type Time {
    hours: Int
    minutes: Int
    seconds: Int
}
`;

const resolvers = {
  Query: {
    places: getPluralResolver('places'),
    place: getSingularResolver('place')
  }
};

module.exports = { typeDef, resolvers };
