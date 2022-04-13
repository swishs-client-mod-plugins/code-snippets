/* The below code is licensed under MIT. */

const path = require('path');
const ExtractPlugin = require('mini-css-extract-plugin');

// ... why does this need to be a destructuring assignment????
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = ({ minify = false }) => {
  /**@type {import('webpack').Configuration} */
  return {
    mode: !!minify ? 'production' : 'development',
    experiments: { outputModule: true },
    plugins: [new ExtractPlugin(), new CleanWebpackPlugin()],
    entry: {
      renderer: './src/renderer/index',
      'css.worker': 'monaco-editor/esm/vs/language/css/css.worker',
      'editor.worker': 'monaco-editor/esm/vs/editor/editor.worker',
      'ts.worker': 'monaco-editor/esm/vs/language/typescript/ts.worker',
    },
    output: {
      filename: '[name].js',
      library: { type: 'module' },
      chunkFilename: '[id].[contenthash:8].js',
      path: path.resolve(__dirname, 'dist'),
      sourceMapFilename: '[name].[contenthash:8].map',
    },
    module: {
      rules: [
        {
          test: /\.(m|c)?(j|t)sx?$/i,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'swc-loader',
            options: {
              sourceMaps: true,
              minify: !!minify,
              jsc: {
                parser: {
                  tsx: true,
                  syntax: 'typescript',
                  decorators: true
                },
                target: 'es2022'
              },
            }
          }
        },
        {
          test: /\.(?:s)?[ac]ss$/i,
          use: [
            ExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },

    // resolve @ imports
    resolve: {
      extensions: [
        '.js',
        '.ts',
        '.jsx',
        '.mjs',
        '.cjs',
        '.svg',
        '.tsx',
        '.css',
        '.scss',
      ],
      alias: {
        '@modules': path.resolve(__dirname, './src/renderer/modules'),
        '@components': path.resolve(__dirname, './src/renderer/components'),
      }
    },
  };
};