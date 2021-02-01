const { MongoClient } = require('mongodb');
const { dbConstants } = require('../constants');

class DBManager {
  constructor() {
    this.client = null;
  }

  async connect() {
    try {
      this.client = await MongoClient.connect(dbConstants.url, {
        useUnifiedTopology: true,
      });
    } catch (err) {
      console.error('Error while connecting to database', err);
      throw err;
    }
  }

  async listDatabases() {
    return this.client.db().admin().listDatabases();
  }

  async listCollections() {
    return this.client.db(dbConstants.dbName).listCollections().toArray();
  }

  async destroy() {
    return this.client.close();
  }

  async createCollection(collection) {
    return this.client.db(dbConstants.dbName).createCollection(collection);
  }

  async dropCollection(collection) {
    return this.client.db(dbConstants.dbName).collection(collection).drop();
  }

  async insertOne(collection, document) {
    return this.client.db(dbConstants.dbName).collection(collection).insertOne(document);
  }

  async updateOne(collection, filter, document) {
    return this.client.db(dbConstants.dbName).collection(collection).updateOne(filter, document);
  }

  async findOne(collection, query, options = {}) {
    return this.client.db(dbConstants.dbName).collection(collection).findOne(query, options);
  }
}

module.exports = new DBManager();
