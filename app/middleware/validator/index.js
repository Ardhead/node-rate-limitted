const validator = require('./validator');

class MainValidator {
  async checkRateLimit(req, res, next) {
    try {
      await validator.checkRateLimit(req);
      next();
    } catch (errorObject) {
      console.error('Error while validating test request', errorObject);
      res.status(errorObject.code).send(errorObject.message);
    }
  }
}

module.exports = new MainValidator();
