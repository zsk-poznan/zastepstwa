
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Tabs.production.js");
  } else {
    module.exports = require("./Tabs.development.js");
  }
  