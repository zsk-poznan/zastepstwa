
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./MainNav.production.js");
  } else {
    module.exports = require("./MainNav.development.js");
  }
  