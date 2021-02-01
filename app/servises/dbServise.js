const dbManager = require('./dbManager');
const { dbConstants } = require('../constants');

class DBServise {
  constructor() {
    dbManager.connect();
  }

  checkRateLimit(req) {
    console.log('req.query', req.query);
    return dbManager.findOne(dbConstants.defaultCollection, {});
  }
}

module.exports = new DBServise();
