
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Box.production.js");
  } else {
    module.exports = require("./Box.development.js");
  }
  