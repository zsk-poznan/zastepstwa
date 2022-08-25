
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Portal.production.js");
  } else {
    module.exports = require("./Portal.development.js");
  }
  