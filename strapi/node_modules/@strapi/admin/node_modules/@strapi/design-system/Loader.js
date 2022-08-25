
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Loader.production.js");
  } else {
    module.exports = require("./Loader.development.js");
  }
  