const dbServise = require('../services/dbManager');
const { httpConstants, errorConstants } = require('../constants');

class Global {
  async returnData(req, res) {
    try {
      const result = await dbServise.updateOne();
      console.info('Sending the result to the client.');
      res.status(httpConstants.success).send(result);
    } catch (err) {
      console.error('Error getting datatypes!', err);
      res.status(httpConstants.success).send(errorConstants.errorGettingData);
    }
  }
}

module.exports = new Global();
