const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {            
      index: './src/index.js',
      home: './src/home.js',
      menu: './src/menu.js',
      about: './src/about.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',        
      }),    
    ],   
    module: {
        rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },        
        {
          test: /\.(png|jpg|jpeg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[contenthash].webp',
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  quality: 85,
                },
                optipng: { 
                  enabled: false
                },
                pngquant: { 
                  quality: [0.65, 0.90],
                  speed: 4
                },
                webp: {
                  quality: 85
                }
              }
            }
          ]
        },        
      ],
    }, 
    optimization: { 
      splitChunks: {
        chunks: 'all', 
      },
    },   
};
