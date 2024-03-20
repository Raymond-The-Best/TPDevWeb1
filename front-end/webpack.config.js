
const path = require("path");
  const HtmlWebpackPlugin = require("html-webpack-plugin");
  module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/main.js",
    devServer: {
      static: {
        directory: path.join(__dirname),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html",
      }),
    ],
    optimization: {
      minimize: false,
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
              },
            },
          },
            {
                test: /\.(html)$/,
                use: ["html-loader"],
              },
            {
              test: /\.(css)$/,
              use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource'
              },
              {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ],
              }
          ],
    },
  };