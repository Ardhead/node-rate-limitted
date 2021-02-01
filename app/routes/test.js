const Base = require('./base');
const controller = require('../controllers/global');
const validator = require('../middleware/validator/index.js');
const { routesConstants } = require('../constants');

class Test extends Base {
  constructor() {
    super();
    this.get(routesConstants.main, validator.checkRateLimit, controller.returnData);
  }
}

module.exports = Test;
