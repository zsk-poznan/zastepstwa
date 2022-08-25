
'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./helper-plugin.production.js");
} else {
  module.exports = require("./helper-plugin.development.js");
}
