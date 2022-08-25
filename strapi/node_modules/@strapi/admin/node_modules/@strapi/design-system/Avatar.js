
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Avatar.production.js");
  } else {
    module.exports = require("./Avatar.development.js");
  }
  