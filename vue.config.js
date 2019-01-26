module.exports = {
  //生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  lintOnSave: false,
  // webpack配置
  configureWebpack: {
    performance: {
      hints: false
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    }
  }
};