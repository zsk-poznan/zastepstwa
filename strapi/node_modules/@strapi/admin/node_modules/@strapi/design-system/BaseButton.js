
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./BaseButton.production.js");
  } else {
    module.exports = require("./BaseButton.development.js");
  }
  