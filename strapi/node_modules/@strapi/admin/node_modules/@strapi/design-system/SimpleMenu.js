
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./SimpleMenu.production.js");
  } else {
    module.exports = require("./SimpleMenu.development.js");
  }
  