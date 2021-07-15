const packageName = require('./package.json').name;
console.log(packageName)
module.exports = {
  devServer: {
    port: 3001
  },
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    }
  }

}