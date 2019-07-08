import * as Path from "path";

import * as Webpack from "webpack";
const WebpackNodeExternals: typeof import("webpack-node-externals") = require("webpack-node-externals");

const config: Webpack.Configuration = {
  devtool: "source-map",
  entry: {
    main: Path.resolve(__dirname, "../main.js"),
    renderer: Path.resolve(__dirname, "../renderer.js")
  },
  externals: [
    WebpackNodeExternals({
      modulesDir: Path.resolve(__dirname, "../../../node_modules")
    }),
    WebpackNodeExternals({
      modulesDir: Path.resolve(__dirname, "../../../../../node_modules")
    })
  ],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "source-map-loader",
        enforce: "pre"
      }
    ]
  },
  output: {
    filename: "[name].js",
    path: Path.resolve(__dirname, "../../webpack/dev")
  },
  resolve: {
    extensions: [".js"]
  },
  target: "node"
};

export default config;
