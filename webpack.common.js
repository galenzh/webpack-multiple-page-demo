const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['jquery'], // you can write more other libs here
    common: './src/utils/common.js',
    index: './src/pages/index/index.js',
    post: './src/pages/post/post.js'
  },
  output: {
    filename: '[name]/bundle.[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            context: 'src/pages'
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({ 
      filename: 'index.html',
      chunks: ['vendor', 'common', 'index'],
      template: './src/pages/index/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'post.html',
      chunks: ['vendor', 'common', 'post'],
      template: './src/pages/post/post.html'
    })
  ]
};