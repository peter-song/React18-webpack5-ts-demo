const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    // 依赖的库数组
    react: [ 'react', 'react-dom' ],
    antd: ['antd', '@ant-design/icons']
  },
  output: {
    path: path.join(__dirname, 'dll'),
    filename: '[name].js',
    library: '[name]_[hash]',
  },
  plugins: [
    new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ['dll'] }),
    new webpack.DllPlugin({
      name: '[name]_[hash]', // 需要和output.library保持一致
      path: path.resolve(__dirname, './dll', '[name]-manifest.json'),
      format: true,
      context: __dirname, // context需要和webpack.config.js保持一致
    }),
  ],
}
