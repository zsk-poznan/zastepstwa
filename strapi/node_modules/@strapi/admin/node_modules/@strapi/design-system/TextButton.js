
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./TextButton.production.js");
  } else {
    module.exports = require("./TextButton.development.js");
  }
  