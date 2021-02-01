const constants = {
  routesConstants: {
    test: '/test',
    main: '/',
  },
  dbConstants: {
    url: 'mongodb://localhost:27017',
    dbName: 'testdb',
    defaultCollection: 'test',
    any: '*',
  },
  httpConstants: {
    success: 200,
  },
  errorConstants: {
    errorGettingData: 'Error getting data',
  },
};

module.exports = constants;
