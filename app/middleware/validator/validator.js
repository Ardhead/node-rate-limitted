const dbManager = require('../../services/dbManager');
const { dbConstants, httpConstants, errorConstants } = require('../../constants');

class Validator {
  async checkRateLimit(req) {
    let errorObject = null;
    req.query = req.query || {};
    if (!req.query.api_key) errorObject = { code: httpConstants.accessDenied, message: errorConstants.missngApiKey };
    const checkDocument = await dbManager.findOne(
      dbConstants.defaultCollection,
      { api_key: req.query.api_key },
    );
    if (!checkDocument) {
      await dbManager.insertOne(
        dbConstants.defaultCollection,
        { api_key: req.query.api_key, attempts: 1 },
      );
    } else if (checkDocument.attempts < 10) {
      await dbManager.updateOne(
        dbConstants.defaultCollection,
        { _id: checkDocument._id },
        { $inc: { attempts: 1 } },
      );
    } else {
      errorObject = { code: httpConstants.tooManyRequests, message: errorConstants.limitReached };
    }
    if (errorObject) throw errorObject;
    return null;
  }
}

module.exports = new Validator();
