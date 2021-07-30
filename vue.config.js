const packageName = require('./package.json').name;
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}


console.log(packageName)
module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    port: 3001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hot: true,
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    }
  }

}