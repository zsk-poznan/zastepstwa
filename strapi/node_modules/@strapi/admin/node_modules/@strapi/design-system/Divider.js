
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Divider.production.js");
  } else {
    module.exports = require("./Divider.development.js");
  }
  