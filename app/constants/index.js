const constants = {
  routesConstants: {
    test: '/test',
    main: '/',
    any: '*',
  },
  dbConstants: {
    url: 'mongodb://localhost/',
    dbName: 'testdb',
    defaultCollection: 'alex_test',
  },
  httpConstants: {
    success: 200,
    badRequest: 400,
    accessDenied: 403,
    notFound: 404,
    tooManyRequests: 429,
  },
  errorConstants: {
    errorGettingData: 'Error getting data',
    missngApiKey: 'missng api_key',
    limitReached: 'limit reached',
    notFound: 'Not Found',
  },
};

module.exports = constants;
