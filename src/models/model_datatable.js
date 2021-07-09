import { pool } from './pool.js';

class Model {
  constructor(table) {
    this.pool = pool;
    this.pool.connect();
    this.table = table;
    this.pool.on('error', (err, client) => `Error, ${err}, on idle client${client}`);
  }

  async select(columns, offset, limit, clause) {
    let query = `SELECT ${columns} FROM ${this.table} OFFSET ${offset} LIMIT ${limit}`;
    if (clause) query += clause;
    return this.pool.query(query);
  }
}

export default Model;
