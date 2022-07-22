const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm
const PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');
const packageJson = require('../package.json')

const pathTo = (p) => path.resolve(process.cwd(), p)
module.exports = {
  // mode: 'development',
  mode: 'production',
  entry : pathTo('src/index.js'),
  // entry: {
  //   'main': ['src/components/index.js', 'src/scss/index.scss'].map(pathTo),
  // },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].js',
    library: packageJson.name,
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
            // presets: [
            //   require.resolve('@babel/preset-react'), [
            //     require.resolve('@babel/preset-env'), {modules: false}]],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          // Creates `style` nodes from JS strings
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: [{
          loader: 'file-loader?name=[name].[ext]'
        }],

      }
    ],
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    // new PeerDepsExternalsPlugin(),
    new MinifyPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  stats : {
    colors: true,
    depth: true,
    entrypoints: true,
    logging: 'none'
  },
  externals: Object.keys(packageJson.peerDependencies)
}
