const dbManager = require('../../servises/dbManager');

class Validator {
  checkRateLimit(req) {
    req.params = req.params || {};

    const errorObject = {};
    throw errorObject;
  }
}

module.exports = new Validator();
