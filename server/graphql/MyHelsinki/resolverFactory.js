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

const getPluralResolver = target => {
  return (parent, args, context, info) => {
    return axios.get(`${baseUrl}${target}/${formatPluralRequest(args)}`).then(res => res.data.data);
  };
};

const getSingularResolver = target => {
  return (parent, args, context, info) => {
    return axios
      .get(`${baseUrl}${target}/${formatSingleRequest(args)}`)
      .then(res => res.data)
      .catch(notFoundHandler);
  };
};

module.exports = { getPluralResolver, getSingularResolver };
