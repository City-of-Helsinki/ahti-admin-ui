const axios = require('axios').default;

const baseUrl = 'http://open-api.myhelsinki.fi/v1/';

const notFoundHandler = err => {
  if (err.response.status === 404) {
    return undefined;
  }
  throw err;
};

const formatSingleRequest = args => {
  const { id, languageFilter } = args;
  return `${encodeURIComponent(id)}?language_filter=${languageFilter || ''}`;
};

const formatPluralRequest = args => {
  const { limit, start, languageFilter } = args;
  return `?limit=${limit || 10}&start=${start || 0}${
    languageFilter ? `&language_filter=${languageFilter}` : ''
  }`;
};

const resolvers = {
  Query: {
    activities: (parent, args, context, info) => {
      return axios
        .get(`${baseUrl}activities/${formatPluralRequest(args)}`)
        .then(res => res.data.data);
    },
    activity: (parent, args, context, info) => {
      return axios
        .get(`${baseUrl}activity/${formatSingleRequest(args)}`)
        .then(res => res.data)
        .catch(notFoundHandler);
    },
    events: (parent, args, context, info) => {
      return axios.get(`${baseUrl}events/${formatPluralRequest(args)}`).then(res => res.data.data);
    },
    event: (parent, args, context, info) => {
      return axios
        .get(`${baseUrl}event/${formatSingleRequest(args)}`)
        .then(res => res.data)
        .catch(notFoundHandler);
    },
    places: (parent, args, context, info) => {
      return axios.get(`${baseUrl}places/${formatPluralRequest(args)}`).then(res => res.data.data);
    },
    place: (parent, args, context, info) => {
      return axios
        .get(`${baseUrl}place/${formatSingleRequest(args)}`)
        .then(res => res.data)
        .catch(notFoundHandler);
    }
  }
};

module.exports = resolvers;
