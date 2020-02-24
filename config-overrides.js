const {
  addWebpackAlias,
  override
} = require('customize-cra')

const path = require('path')

function pathResolve(pathUrl) {
  return path.join(__dirname, pathUrl)
}

module.exports = override(
  addWebpackAlias({
    '@': pathResolve('./src'),
    'assets': pathResolve('./src/assets'),
    'components': pathResolve('./src/components'),
    'utils': pathResolve('./src/utils')
  })
);