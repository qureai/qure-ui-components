import { resolve as _resolve } from "path";
import MiniCssExtractPlugin, {
  loader as _loader,
} from "mini-css-extract-plugin";
import MinifyPlugin from "babel-minify-webpack-plugin";
import { ProgressPlugin } from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin"; // installed via npm
import PeerDepsExternalsPlugin from "peer-deps-externals-webpack-plugin";
import { name, peerDependencies } from "../package.json";

const pathTo = (p) => _resolve(process.cwd(), p);
export const mode = "production";
export const entry = pathTo("src/index.js");
export const output = {
  path: _resolve(process.cwd(), "dist"),
  filename: "[name].js",
  library: name,
  libraryTarget: "umd",
  globalObject: "typeof self !== 'undefined' ? self : this",
};
export const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          babelrc: true,
        },
      },
    },
    {
      test: /\.s[ac]ss$/i,
      exclude: /node_modules/,
      use: [
        // Creates `style` nodes from JS strings
        process.env.NODE_ENV !== "production" ? "style-loader" : _loader,
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        {
          loader: "sass-loader",
          options: {
            sourceMap: true,
          },
        },
      ],
    },
    {
      test: /\.(svg|eot|woff|woff2|ttf)$/,
      use: [
        {
          loader: "file-loader?name=[name].[ext]",
        },
      ],
    },
  ],
};
export const resolve = {
  alias: {
    react: _resolve(__dirname, "./node_modules/react"),
    stories: _resolve(__dirname, "./src/stories"),
    composite: _resolve(__dirname, "./src/composite"),
  },
};
export const plugins = [
  new ProgressPlugin(),
  new CleanWebpackPlugin(),
  // new PeerDepsExternalsPlugin(),
  new MinifyPlugin(),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "[name].css",
    chunkFilename: "[id].css",
  }),
];
export const stats = {
  colors: true,
  depth: true,
  entrypoints: true,
  logging: "none",
};
export const externals = Object.keys(peerDependencies);
