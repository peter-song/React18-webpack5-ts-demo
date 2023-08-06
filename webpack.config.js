const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackBar = require('webpackbar');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const dllConfig = require('./dll.config.js');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
   // 打包模式
  mode: isProduction ? 'production' : 'development',

  // eslint检查缓存，只检查已修改的文件，默认开启，打开是为了 react-refresh 完成热更新
  cache: false,

  // 解决方案
  resolve: {
    // 不指定扩展名
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json' ],

    // 别名
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@language': path.resolve(__dirname, './src/language'),
      '@redux': path.resolve(__dirname, './src/redux'),
      '@router': path.resolve(__dirname, './src/router'),
    },
  },

  // 输入
  entry: {
    main: './src/index.tsx',
  },

  // 输出
  output: {
    path: isProduction ? path.resolve(__dirname, './build') : undefined,
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/[name].[contenthash:8].chunk.js',
    clean: true, // 输出前先清空
  },

  // 模块
  module: {
    // 规则
    rules: [
      {
        oneOf: [
          {
            test: /\.(css|less)$/,
            use: [
              isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
              'css-loader',
              {
                loader: 'postcss-loader',
                options: { postcssOptions: { plugins: ['postcss-preset-env'] } },
              },
              {
                loader: 'less-loader',
                options: { lessOptions: { javascriptEnabled: true } },
              },
              {
                loader: 'style-resources-loader',
                options: { patterns: path.resolve(__dirname, './src/assets/style/variables.less') },
              },
            ],
          },
          {
            test: /\.(png|jpe?g|gif|webp|svg|ico)$/,
            type: 'asset',
            parser: { dataUrlCondition: { maxSize: 8 * 1024 } },
            generator: { filename: 'image/[name].[hash:8][ext]' },
          },
          {
            test: /\.(woff2?|eot|ttf|otf|mp3|mp4|avi|mkv)$/,
            type: 'asset/resource',
            generator: { filename: 'media/[name].[hash:8][ext]' },
          },
          {
            test: /\.(js|ts)x?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: [
                    '@babel/preset-env',
                    '@babel/preset-react',
                    '@babel/preset-typescript',
                  ],
                  cacheDirectory: true,
                  cacheCompression: false,
                  plugins: [
                    !isProduction && 'react-refresh/babel',
                    '@babel/plugin-transform-runtime',
                  ].filter(Boolean),
                },
              },
            ],
          },
        ],
      },
    ],
  },

  // 插件
  plugins: [
    new EslintWebpackPlugin({
      context: path.resolve(__dirname, './src'),
      cache: true,
    }),

    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),

    new WebpackBar(), // 实时看到打包进度

    // 拷贝静态文件到打包目录下
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './public'),
          to: path.resolve(__dirname, './build'),
          globOptions: { ignore: ['**/index.html'], // 忽略html文件不进行复制
          },
        },
      ],
    }),

    // 生产环境下将css文件提取到单独文件中
    isProduction && new MiniCssExtractPlugin({
      filename: 'style/[name].[contenthash:8].css',
      chunkFilename: 'style/[name].[contenthash:8].chunk.css',
    }),

    // 开发模式下启动React更新
    !isProduction && new ReactRefreshWebpackPlugin(),
  ].concat(useDell()).filter(Boolean), // 将数组中的false类型过滤掉

  // 代码分割配置
  optimization: {
    minimize: isProduction,

    minimizer: [
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin(),
    ],

    splitChunks: { // 用于将代码分割成不同的块，根据配置的策略将公共代码提取到单独的文件中，避免重复加载和提高缓存利用率
      chunks: 'all', // 表示代码分割的范围，all表示将对所有的代码进行分割，包括同步和异步代码
      name: false, // 表示不为分割出的chunk生成名称，使用默认名称。
      cacheGroups: { // 用于配置缓存组，每个缓存组可以控制一类模块的代码分割策略。
        reactBase: { // 缓存组名称，用于将 mode_modules 目录下的 相关包打包到名为 reactBase 吃 chunk 中
          name: 'reactBase',
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          priority: 10,
          chunks: 'all',
        },
        antdBase: {
          name: 'antdBase',
          test: /[\\/]node_modules[\\/](antd|@ant-design)[\\/]/,
          priority: 9,
          chunks: 'all',
        },
        common: {
          name: 'common',
          minChunks: 2,
          priority: 5,
          chunks: 'all',
        },
      },
    },

    runtimeChunk: { name: entrypoint => `runtime-${entrypoint.name}` },
  },

  // 开发服务器配置
  devServer: {
    historyApiFallback: true, // 用于启用HTML5 History API的回退选项
    compress: true, // 用于启用gzip压缩
    host: '0.0.0.0', // 指定了Webpack Dev Server的主机地址
    port: 8000, // 指定了Webpack Dev Server监听的端口号
    hot: true, // 用于启用热模块更新
  },

  // 将打包后的文件和源文件进行映射
  devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',

  // 可以忽略打包文件产生的预警，并设置打包文件超过多少时进行警告提示
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

function useDell() {
  if (isProduction) {
    return []
  }

  const hasDll = fs.existsSync(path.resolve('./dll'));

  if (!hasDll) {
    console.log('如果构建缓慢请使用dll缓存，请使用 npm run dll');
    return [];
  }

  const dllPlugins = [
    ...Object.keys(dllConfig.entry).map(name => {
      return new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: path.resolve(__dirname, 'dll', name + '-manifest.json'),
      });
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'dll', to: 'dll'}],
    }),
    new HtmlWebpackTagsPlugin({
      tags: Object.keys(dllConfig.entry).map(name => `dll/${name}.js`),
      append: false,
    }),
  ];

  return dllPlugins;
}
