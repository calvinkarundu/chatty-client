const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Env setup
const output = path.resolve(__dirname, './dist');

module.exports = {
  entry: './src/app.ts',
  output: {
    path: output,
    publicPath: '/',
    filename: 'bundle.[name].[hash].js',
  },
  devtool: '#eval-source-map',
  resolve: {
    extensions: ['*', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: 'ts-loader'
    }],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),

    new HtmlWebpackPlugin({
      template: './index.html',
      chunksSortMode: (lhs, rhs) => {
        const order = ['vendor', 'app'];
        return order.indexOf(lhs.names[0]) - order.indexOf(rhs.names[0]);
      },
      minify: {
        html5: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    disableHostCheck: true,
    compress: true,
  },
}
