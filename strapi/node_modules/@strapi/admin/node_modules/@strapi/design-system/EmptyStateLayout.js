
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./EmptyStateLayout.production.js");
  } else {
    module.exports = require("./EmptyStateLayout.development.js");
  }
  