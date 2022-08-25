
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Textarea.production.js");
  } else {
    module.exports = require("./Textarea.development.js");
  }
  