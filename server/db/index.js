/* eslint-disable */

// Bluebird is the best promise library available today,
// and is the one recommended here:
const promise = require('bluebird');

const repos = require('./repos'); // loading all repositories

// const URL = require('url-parse');

// pg-promise initialization options:
const initOptions = {

  // Use a custom promise library, instead of the default ES6 Promise:
  promiseLib: promise,

  // Extending the database protocol with our custom repositories;
  // API: http://vitaly-t.github.io/pg-promise/global.html#event:extend
  extend(obj, dc) {
    // Database Context (dc) is mainly useful when extending multiple databases
    // with different access API-s.

    // Do not use 'require()' here, because this event occurs for every task
    // and transaction being executed, which should be as fast as possible.
    obj.users = new repos.Users(obj, pgp);
    // obj.products = new repos.Products(obj, pgp);
  }
};

// Database connection parameters:
const config = {
  host: 'storage-rents.ck7d6vneh0q0.us-east-2.rds.amazonaws.com',
  port: 5432,
  database: 'sr_db',
  user: 'postgres',
  password: 'password123'
};

// Load and initialize pg-promise:
const pgp = require('pg-promise')(initOptions);

// Create the database instance:
const db = pgp(process.env.DATABASE_URL || config);

// Load and initialize optional diagnostics:
const diagnostics = require('./diagnostics');

diagnostics.init(initOptions);

// If you ever need access to the library's root (pgp object), you can do it via db.$config.pgp
// See: http://vitaly-t.github.io/pg-promise/Database.html#.$config
module.exports = db;
