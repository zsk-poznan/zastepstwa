
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./FocusTrap.production.js");
  } else {
    module.exports = require("./FocusTrap.development.js");
  }
  