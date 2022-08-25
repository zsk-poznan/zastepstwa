
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Main.production.js");
  } else {
    module.exports = require("./Main.development.js");
  }
  