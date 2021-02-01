const { MongoClient } = require('mongodb');
const { dbConstants } = require('../constants');

class DBManager {
  constructor() {
    this.client = null;
  }

  async connect() {
    try {
      this.client = await MongoClient.connect(dbConstants.url, {});
    } catch (err) {
      console.error('Error while connecting to database', err);
      throw err;
    }
  }

  destroy() {
    this.client.close();
  }

  createCollection(collection) {
    return this.client.db(dbConstants.dbName).createCollection(collection);
  }

  dropCollection(collection) {
    return this.client.db(dbConstants.dbName).collection(collection).drop();
  }

  insertOne(collection, document) {
    return this.client.db(dbConstants.dbName).collection(collection).insertOne(document);
  }

  updateOne(collection, document) {
    return this.client.db(this.dbName).collection(collection).updateOne(document);
  }

  findOne(collection, query, options = {}) {
    return this.client.db(this.dbName).collection(collection).findOne(query, options);
  }
}

module.exports = new DBManager();
