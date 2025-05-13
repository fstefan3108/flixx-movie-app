const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: "assets/[name][ext]",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'movie-details.html',
      template: './src/movie-details.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'search.html',
      template: './src/search.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'shows.html',
      template: './src/shows.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'tv-details.html',
      template: './src/tv-details.html',
    }),
    
    new MiniCssExtractPlugin(),
    new Dotenv({
      path: './.env',  // Ensure the path is correct (in case .env is not in the root)
      systemvars: true,  // Optionally, load system environment variables as well
    }),
  ],
};
