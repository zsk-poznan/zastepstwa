
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./IconButton.production.js");
  } else {
    module.exports = require("./IconButton.development.js");
  }
  