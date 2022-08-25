
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Link.production.js");
  } else {
    module.exports = require("./Link.development.js");
  }
  