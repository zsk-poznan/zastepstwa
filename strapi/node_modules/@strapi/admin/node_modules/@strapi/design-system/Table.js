
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Table.production.js");
  } else {
    module.exports = require("./Table.development.js");
  }
  