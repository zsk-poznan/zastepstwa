
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./SubNav.production.js");
  } else {
    module.exports = require("./SubNav.development.js");
  }
  