
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./BaseLink.production.js");
  } else {
    module.exports = require("./BaseLink.development.js");
  }
  