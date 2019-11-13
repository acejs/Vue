const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  // Type: boolean/'error' | Default: true
  lintOnSave: true,
  // 部署应用包时的基本URL
  // Type: string | Default: '/'
  publicPath: BASE_URL,
  // 生成的生产环境构建文件的目录
  // Type: string | Default: 'dist'
  outputDir: 'dist',
  // 放置生成的静态资源的（相对于outputDir）的目录
  // Type: string | Default: ''
  assetsDir: '',
  // 指定生成的index.html的输出路径（相对于outputDir）；也可以是一个绝对路径
  // Type: string | Default: 'index.html'
  indexPath: 'index.html',
  // 静态资源文件名是否带 hash
  // Type: boolean | Default: true
  filenameHashing: true,

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('_a', resolve('src/api'))
      .set('_v', resolve('src/views'))
    // 项目解析
    if (process.env.use_analyzer) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  },

  // 打包时不生成 .map 文件
  // Type: boolean | Default: true
  productionSourceMap: false,

  // 开发环境配置代理
  devServer: {
    // port: '',
    // host: '',
    // proxy: {
    //   target: '',
    //   changeOrigin: true
    // }
  }
}
