const dbManager = require('./dbManager');
const { dbConstants } = require('../constants');

class dbServise {
  async init() {
    await dbManager.connect();
  }

  async remove() {
    const dbList = await dbManager.listDatabases()
    if (dbList.databases.find(db => db.name === dbConstants.dbName)) {
      await dbManager.dropCollection(dbConstants.defaultCollection);
    }
  }

  async create() {
    await dbManager.createCollection(dbConstants.defaultCollection);
  }

  async check() {
    const dbList = await dbManager.listDatabases();
    const dbExists = dbList.databases.find(db => db.name === dbConstants.dbName);
    if (dbList.databases.find(db => db.name === dbConstants.dbName)) {
      await dbManager.dropCollection(dbConstants.defaultCollection);
    }
    await dbManager.createCollection(dbConstants.defaultCollection);
    await dbManager.destroy();
  }
}

module.exports = new dbServise();
