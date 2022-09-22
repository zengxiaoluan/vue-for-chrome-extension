const CopyPlugin = require('copy-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

const path = require('path');

function getPath(file) {
  return path.resolve(__dirname, file);
}

function fn() {
  let config = {
    mode: process.env.NODE_ENV,
  };

  config.entry = {
    popup: getPath('./src/popup.ts'),
  };

  config.output = {
    path: getPath('./dist'),
    filename: '[name].js',
  };

  config.resolve = {
    extensions: ['.js', '.ts'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  };

  config.module = {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015',
          jsxFactory: 'h',
          jsxFragment: 'Fragment',
        },
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },

      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
    ],
  };

  config.plugins = [
    new CopyPlugin({
      patterns: ['a.txt', 'popup.html'].map((item) => {
        return {from: getPath('./src/' + item), to: './'};
      }),
    }),
    new VueLoaderPlugin(),
  ];

  return config;
}

module.exports = fn();
