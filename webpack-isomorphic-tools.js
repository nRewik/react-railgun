const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')

// see this link for more info on what all of this means
// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
module.exports = {
  debug: false,
  webpack_assets_file_path: './build/webpack-assets.json',
  webpack_stats_file_path: './build/webpack-stats.json',
  assets: {
    style_modules: {
      extensions: ['css'],
      filter: function (module, regex, options, log) {
        if (options.development) {
          // in development mode there's webpack "style-loader",
          // so the module.name is not equal to module.name
          return WebpackIsomorphicToolsPlugin.style_loader_filter(module, regex, options, log)
        } else {
          // in production mode there's no webpack "style-loader",
          // so the module.name will be equal to the asset path
          return regex.test(module.name)
        }
      },
      path: function (module, options, log) {
        if (options.development) {
          // in development mode there's webpack "style-loader",
          // so the module.name is not equal to module.name
          return WebpackIsomorphicToolsPlugin.style_loader_path_extractor(module, options, log)
        } else {
          // in production mode there's no webpack "style-loader",
          // so the module.name will be equal to the asset path
          return module.name
        }
      },
      parser: function (module, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.css_modules_loader_parser(module, options, log)
        } else {
          // in production mode there's Extract Text Loader which extracts CSS text away
          return module.source
        }
      }
    }
  }
}
