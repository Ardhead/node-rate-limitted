const Base = require('./base');
const TestRouter = require('./test');
const { routesConstants } = require('../constants');

class Routes extends Base {
  constructor() {
    super();
    this.use(routesConstants.test, new TestRouter());
    this.get(routesConstants.any, (req, res) => {
      res.status(404).send('Not Found');
    });
  }
}

module.exports = Routes;
