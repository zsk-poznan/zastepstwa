
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Switch.production.js");
  } else {
    module.exports = require("./Switch.development.js");
  }
  