
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Field.production.js");
  } else {
    module.exports = require("./Field.development.js");
  }
  