const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env','@babel/preset-react'],
          },
        },
      },
      {
				test: /\.(sass|scss|css)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      // filename: './index.html',
    }),
    // new CopyWebpackPlugin(
    //  { 
    //    patterns: [
    //   { from: './src/style.css', to: 'dist/style.css' },
    //   { from: './src/components/app.scss', to: 'dist/style.css' },
    // ]}),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname),
    }
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
  devtool: 'eval-source-map',
};
