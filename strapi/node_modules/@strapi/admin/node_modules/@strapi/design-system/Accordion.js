
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Accordion.production.js");
  } else {
    module.exports = require("./Accordion.development.js");
  }
  