const dbManager = require('../../services/dbManager');
const { dbConstants } = require('../../constants');

class Validator {
  checkRateLimit(req) {
    req.params = req.params || {};
    dbManager.findOne(dbConstants.defaultCollection, {});
    const errorObject = {};
    throw errorObject;
  }
}

module.exports = new Validator();
