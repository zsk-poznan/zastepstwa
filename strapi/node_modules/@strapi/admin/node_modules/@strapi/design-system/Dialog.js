
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Dialog.production.js");
  } else {
    module.exports = require("./Dialog.development.js");
  }
  