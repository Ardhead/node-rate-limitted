const dbManager = require('../services/dbManager');
const { dbConstants } = require('../constants');

class Scheduler {
  async initialize() {
    await dbManager.connect();
    const dbList = await dbManager.listDatabases();
    const dbExists = dbList.databases.find(db => db.name === dbConstants.dbName);
    let collectionExists = false;
    if (dbExists) {
      const collectionsList = await dbManager.listCollections();
      collectionExists = collectionsList.find(collection => collection.name === dbConstants.defaultCollection);
    }
    if (!dbExists || !collectionExists) await dbManager.createCollection(dbConstants.defaultCollection);
    this._setTimer();
  }

  _setTimer() {
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDay() + 1);
    const timeout = midnight.getTime() - now.getTime();
    const oneDay = 24 * 60 * 60 * 1000;
    setTimeout(() => {
      setInterval(() => {
        this._resetData();
      }, oneDay);
    }, timeout);
  }

  async _resetData() {
    await dbManager.dropCollection(dbConstants.defaultCollection);
    await dbManager.createCollection(dbConstants.defaultCollection);
  }
}

module.exports = new Scheduler();
