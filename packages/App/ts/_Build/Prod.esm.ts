import * as Path from "path";

import * as Webpack from "webpack";
const WebpackNodeExternals: typeof import("webpack-node-externals") = require("webpack-node-externals");

const config: Webpack.Configuration = {
  entry: {
    index: Path.resolve(__dirname, "../index.js")
  },
  externals: [
    WebpackNodeExternals({
      modulesDir: Path.resolve(__dirname, "../../../node_modules")
    }),
    WebpackNodeExternals({
      modulesDir: Path.resolve(__dirname, "../../../../../node_modules")
    })
  ],
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 0
    }
  },
  output: {
    filename: "[name].js",
    path: Path.resolve(__dirname, "../../webpack/prod")
  },
  resolve: {
    extensions: [".js"]
  },
  target: "node"
};

export default config;
