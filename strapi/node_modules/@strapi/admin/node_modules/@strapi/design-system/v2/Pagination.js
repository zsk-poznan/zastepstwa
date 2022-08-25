
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Pagination.production.js");
  } else {
    module.exports = require("./Pagination.development.js");
  }
  