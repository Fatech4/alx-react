const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
	entry: {
  main: path.resolve(__dirname, '../src/index.js'),
},
output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, '../dist')
},
	devtool: 'inline-source-map', // Add inline source map
  module: {
    rules: [
      // Rule for handling CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Rule for handling image files
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          {
        
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
    }),
  ],
};
