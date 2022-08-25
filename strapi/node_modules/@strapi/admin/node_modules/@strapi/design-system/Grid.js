
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Grid.production.js");
  } else {
    module.exports = require("./Grid.development.js");
  }
  