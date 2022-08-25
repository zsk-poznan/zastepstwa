
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Badge.production.js");
  } else {
    module.exports = require("./Badge.development.js");
  }
  