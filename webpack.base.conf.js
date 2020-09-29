const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'production',
  entry: './src/qzd-ui', // 入口
  output: {
    //输出
    path: path.resolve(__dirname, 'dist-qzd-ui'), //输出的路径
    filename: 'bundle.js', //输出的文件名
    libraryTarget: 'commonjs2'
  },
  externals: {
    vue: 'vue',
    'better-scroll': 'better-scroll'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.resolve('src')
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        // use: ['file-loader'],
        loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
        options: {
          publicPath: '/'
        }
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
}
