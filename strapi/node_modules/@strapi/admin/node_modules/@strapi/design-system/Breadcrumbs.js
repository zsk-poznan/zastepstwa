
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Breadcrumbs.production.js");
  } else {
    module.exports = require("./Breadcrumbs.development.js");
  }
  