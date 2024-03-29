const path = require('path');

module.exports = {
  entry: {
     main: path.resolve(__dirname, './js/dashboard_main.js'),
	},
  output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'public')
	},
   mode: 'production',
   module:
     {
      rules: [

    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
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
    };
