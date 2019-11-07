import { gql } from 'apollo-boost';

const PLACES_QUERY = gql`
  query PLACES($limit: Int, $start: Int, $languageFilter: LanguageFilter) {
    places(limit: $limit, start: $start, languageFilter: $languageFilter) {
      id
      name {
        fi
        en
      }
      description {
        body
      }
      location {
        lat
        lon
      }
    }
  }
`;

export default PLACES_QUERY;
