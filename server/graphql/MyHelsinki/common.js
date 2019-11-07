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

const typeDefs = `
  enum LanguageFilter {
    fi
    en
    sv
    zh
  }

  interface MyHelsinkiCommon {
    ${commonFields}
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
`;

module.exports = { commonFields, typeDefs };
