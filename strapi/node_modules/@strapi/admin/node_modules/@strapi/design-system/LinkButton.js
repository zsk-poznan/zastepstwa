
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./LinkButton.production.js");
  } else {
    module.exports = require("./LinkButton.development.js");
  }
  