
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Card.production.js");
  } else {
    module.exports = require("./Card.development.js");
  }
  