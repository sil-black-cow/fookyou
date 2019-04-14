const path = require('path');

const VueLoaderPlugin   = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: "./src/main",

  output: {
    path      : path.resolve(__dirname, "dist"),
    filename  : "bundle.js",
    publicPath: "/scripts/",
  },

  resolve: {
    modules: [
      path.resolve(".", "src"),
      "node_modules"
    ],
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          "postcss-loader"
        ]
      },
      // sass
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
    ]
  },

  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
}