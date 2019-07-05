"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./target/webpack/prod/index.js");
} else {
  module.exports = require("./target/webpack/dev/index.js");
}
