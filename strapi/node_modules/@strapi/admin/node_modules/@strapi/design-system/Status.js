
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Status.production.js");
  } else {
    module.exports = require("./Status.development.js");
  }
  