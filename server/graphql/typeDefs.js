const { gql } = require('apollo-server');

const commonFields = `
    id: ID!
    name: Name!
    sourceType: Source!
    infoUrl: String!
    modifiedAt: String!
    location: Location!
    description: Description!
    tags: [Tag!]!
`;

const typeDefs = gql`
type Query {
    activities(limit: Int, start: Int, languageFilter: LanguageFilter): [Activity]
    activity(id: ID!, languageFilter: LanguageFilter): Activity
    places(limit: Int, start: Int, languageFilter: LanguageFilter): [Place]
    place(id: ID!, languageFilter: LanguageFilter): Place
    events(limit: Int, start: Int, languageFilter: LanguageFilter): [Event]
    event(id: ID!, languageFilter: LanguageFilter): Event
}

enum LanguageFilter {
    fi
    en
    sv
    zh
}

interface MyHelsinkiCommon {
    ${commonFields}
}

type Activity implements MyHelsinkiCommon {
    ${commonFields}
    whereWhenDuration: WhereWhenDuration!
}

type Event implements MyHelsinkiCommon {
    ${commonFields}
    eventDates: EventDates!
}

type Place implements MyHelsinkiCommon {
    ${commonFields}
    openingHours: OpeningHours!
}

type Name {
    fi: String
    en: String
    sv: String
    zh: String
}

type Tag {
    id: ID!
    name: String!
}

type Description {
    intro: String
    body: String!
    images: [Image!]
}

type Image {
    url: String!
    copyrightHolder: String!
    licenseType: License!
}

type License {
    id: ID!
    name: String!
}

type Source {
    id: ID!
    name: String!
}

type WhereWhenDuration {
    whereAndWhen: String!
    duration: String!
}

type Location {
    lat: Float
    lon: Float
    address: Address!
}

type Address {
    streetAddress: String!
    postalCode: String
    locality: String!
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

module.exports = typeDefs;
