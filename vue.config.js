const CompressionWebpackPlugin = require('compression-webpack-plugin')
const vConsolePlugin = require('vconsole-webpack-plugin') // 引入 移动端模拟开发者工具

const isProduction = process.env.NODE_ENV === 'production'
const path = require('path')

module.exports = {
  // Default: '/', 部署应用包时的基本 URL。
  publicPath: '/',
  // 默认是dist
  outputDir: 'dist',
  // 默认 ‘’, 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: '',
  // 默认'index.html'，指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: 'index.html',
  integrity: true,
  productionSourceMap: false, // 打包时不生成.map文件
  /**
   * Default: true,
   * 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
   * 然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。
   * 如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
   */
  filenameHashing: true,
  css: {
    extract: isProduction ? true : false, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps?
    // css预设器配置项 启用 CSS modules for all css / pre-processor files.
    // modules: false,
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            // rootValue: 100, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
            // unitPrecision: 5, //允许REM单位增长到的十进制数字。
            //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            // propBlackList: [], //黑名单
            exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            // selectorBlackList: [], //要忽略并保留为px的选择器
            // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
          })
        ]
      },
      sass: {
        additionalData: `@import "~@/assets/scss/_variable.scss";`
      }
    }
  },
  configureWebpack: config => {
    if (isProduction) {
      // 开启gzip压缩
      const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      )

      // 公共代码抽离
      config.optimization = {
        splitChunks: {
          cacheGroups: {
            vendor: {
              chunks: 'all',
              test: /node_modules/,
              name: 'vendor',
              minChunks: 1,
              maxInitialRequests: 5,
              minSize: 0,
              priority: 100
            },
            common: {
              chunks: 'all',
              test: /[\\/]src[\\/]js[\\/]/,
              name: 'common',
              minChunks: 2,
              maxInitialRequests: 5,
              minSize: 0,
              priority: 60
            },
            styles: {
              name: 'styles',
              test: /\.(sa|sc|c)ss$/,
              chunks: 'all',
              enforce: true
            },
            runtimeChunk: {
              name: 'manifest'
            }
          }
        }
      }

      if (process.env.VUE_APP_NODE_TEST == 'test') {
        //测试环境
        //调试
        config.plugins.push(
          new vConsolePlugin({
            filter: [], // 需要过滤的入口文件
            enable: true // 发布代码前记得改回 false
          })
        )
      }
    } else {
      //调试
      config.plugins.push(
        new vConsolePlugin({
          filter: [], // 需要过滤的入口文件
          enable: true // 发布代码前记得改回 false
        })
      )
    }
  },
  chainWebpack: config => {
    // 路径别名
    config.resolve.alias
      .set('@', path.resolve(__dirname, './src'))
      .set('@public', path.resolve(__dirname, './public'))
  },
  lintOnSave: false, //关闭eslint
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    host: '0.0.0.0',
    port: 8088, // 服务端口
    https: false,
    hotOnly: false,
    // 设置代理，用来解决本地开发跨域问题，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    proxy: {
      '/api': {
        target: 'https://app-test.zhangyu.com', // 目标代理接口地址
        secure: false,
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        // ws: true, // 是否启用websockets
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
