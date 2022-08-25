
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Layout.production.js");
  } else {
    module.exports = require("./Layout.development.js");
  }
  