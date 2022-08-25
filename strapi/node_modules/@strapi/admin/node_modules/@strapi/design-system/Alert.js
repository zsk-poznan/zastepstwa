
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Alert.production.js");
  } else {
    module.exports = require("./Alert.development.js");
  }
  