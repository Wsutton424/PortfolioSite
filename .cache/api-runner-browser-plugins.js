module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"icon":"static/logo.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"fad21593574d51a6fec5eae3e63c6c7d"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
