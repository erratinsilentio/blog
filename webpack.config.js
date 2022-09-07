const path = require('path');



module.exports = {
  module: 'development',
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main_bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true,
    
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          },
    ]
  },
  
};
