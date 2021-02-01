const { httpConstants, errorConstants } = require('../constants');

class Global {
  async returnData(req, res) {
    try {
      console.info('Sending the result to the client');
      return res.status(httpConstants.success).send('some data');
    } catch (err) {
      console.error('Error getting data', err);
      return res.status(httpConstants.badRequest).send(errorConstants.errorGettingData);
    }
  }
}

module.exports = new Global();
