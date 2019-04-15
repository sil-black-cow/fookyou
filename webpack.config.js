const VueLoaderPlugin   = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {

  mode: 'development',

  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
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
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader' 
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },

      {
        test: /\.scss$/,
        include: [
          path.resolve(".", "src")
        ],
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader', 
          'sass-loader'
        ]
      },
    ]
  },

  plugins: [

    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]

};