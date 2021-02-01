const validator = require('./validator');

class MainValidator {
  checkRateLimit(req, res, next) {
    try {
      validator.checkRateLimit(req);
      next();
    } catch (errorObject) {
      console.error('Error while validating test request', errorObject);
      res.status(429).send('limit reached!');
    }
  }
}

module.exports = new MainValidator();
