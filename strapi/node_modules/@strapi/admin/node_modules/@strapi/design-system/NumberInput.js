
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./NumberInput.production.js");
  } else {
    module.exports = require("./NumberInput.development.js");
  }
  