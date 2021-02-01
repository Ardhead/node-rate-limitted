const Base = require('./base');
const TestRouter = require('./test');
const { routesConstants, httpConstants, errorConstants } = require('../constants');

class Routes extends Base {
  constructor() {
    super();
    this.use(routesConstants.test, new TestRouter());
    this.get(routesConstants.any, (req, res) => {
      res.status(httpConstants.notFound).send(errorConstants.notFound);
    });
  }
}

module.exports = Routes;
