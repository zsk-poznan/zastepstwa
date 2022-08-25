
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./VisuallyHidden.production.js");
  } else {
    module.exports = require("./VisuallyHidden.development.js");
  }
  