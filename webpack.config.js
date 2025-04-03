const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@app": path.resolve(__dirname, "src/app/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@widgets": path.resolve(__dirname, "src/widgets/"),
      "@features": path.resolve(__dirname, "src/features/"),
      "@entities": path.resolve(__dirname, "src/entities/"),
      "@shared": path.resolve(__dirname, "src/shared/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { modules: true }, // Поддержка CSS-модулей
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  devServer: {
    static: "./dist",
    hot: true,
    historyApiFallback: true,
    port: 3000,
  },
};
