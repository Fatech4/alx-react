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
	devServer: {
  static: '../dist',
  open: true,
		hot:true,
},
	devtool: 'inline-source-map', // Add inline source map
  module: {
    rules: [
      // Rule for handling CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
	    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // Rule for handling image files
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
		 {
            loader: 'url-loader',
            options: {
              limit: 8192, // Inline files smaller than 8 KB as base64, otherwise, use file-loader
              name: 'images/[name].[hash].[ext]', // Output path and file name
            },
          },
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
      template: path.resolve(__dirname, '../dist/index.html'),
	    filename: 'index.html',
    }),
  ],
};
