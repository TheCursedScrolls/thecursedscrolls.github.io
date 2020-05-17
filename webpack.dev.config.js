const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require("path")
module.exports = {
  node: {
    fs: "empty",
  },
  entry: ['./src/ts/index.ts', './src/scss/style.scss'],
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true
  },
  module: {
    rules: [
      // Extracts the compiled CSS from the SASS files defined in the entry
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            // Interprets CSS
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader' // 将 Sass 编译成 CSS
          }
        ]
      },
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      //Imagenes
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '/assets/[name].[ext]',
          esModule: false,
        },
      },
      {
        test: /\.(mp3|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ],
  },
  plugins: [
    // Where the compiled SASS is saved to
    new MiniCssExtractPlugin({
      filename: 'index.css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      { from: './src/index.html', to: 'index.html' },
      { from: './src/img', to: 'img' },
      { from: './src/audios', to: 'audios' }
    ])
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          safe: true
        }
      })
    ]
  },
};