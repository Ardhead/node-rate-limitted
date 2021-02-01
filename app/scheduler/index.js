const dbManager = require('../services/dbManager');
const { dbConstants } = require('../constants');
class Scheduler {
  async initialize() {
    await dbManager.connect();
    const dbList = await dbManager.listDatabases();
    const dbExists = dbList.databases.find(db => db.name === dbConstants.dbName);
    if (dbExists) {
      const collectionExists = await dbManager.listCollections({})
      console.log(collectionExists)
    }
    // const dbList = await dbManager.listDatabases()
    // if (dbList.databases.find(db => db.name === dbConstants.dbName)) {
    //   await dbManager.dropCollection(dbConstants.defaultCollection);
    // }
  
    // await dbManager.createCollection(dbConstants.defaultCollection);
  
    // const dbList = await dbManager.listDatabases();
    // const dbExists = dbList.databases.find(db => db.name === dbConstants.dbName);
    // if (dbList.databases.find(db => db.name === dbConstants.dbName)) {
    //   await dbManager.dropCollection(dbConstants.defaultCollection);
    // }
    // await dbManager.createCollection(dbConstants.defaultCollection);
    // await dbManager.destroy();
  }

}

module.exports = new Scheduler();