const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'app.js',
  },

  watch: true,

  watchOptions: {
    aggregateTimeout: 100,
  },

  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    stats: 'errors-only',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },

  devtool: 'cheap-eval-source-map', // remove for build
  plugins: [
    new HtmlWebpackPlugin({
      // template: './public/index.html',
    }),
  ],
};

/*
{
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          { loader: 'file-loader' },
        ],
        // { loader: 'image-webpack-loader' },
        options: {
          name: 'public/images/backgrounds/[name].[ext]',
        },
        // ],
      },
 */
