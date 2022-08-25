
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./BaseRadio.production.js");
  } else {
    module.exports = require("./BaseRadio.development.js");
  }
  