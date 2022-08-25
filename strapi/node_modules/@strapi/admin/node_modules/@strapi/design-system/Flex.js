
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Flex.production.js");
  } else {
    module.exports = require("./Flex.development.js");
  }
  