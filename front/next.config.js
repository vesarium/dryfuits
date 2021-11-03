const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");
const path = require('path')


require('dotenv').config()

module.exports = withFonts(
  withOptimizedImages({

      env: {
          API_URL: process.env.API_URL,
          TOKEN_SECRET: process.env.TOKEN_SECRET
      },
      publicRuntimeConfig: {
          // Will be available on both server and client
          API_URL: process.env.API_URL,
          TOKEN_SECRET: process.env.TOKEN_SECRET,
      },
      webpack: config => {
          config.resolve.alias['components'] = path.join(__dirname, 'components')
          config.resolve.alias['public'] = path.join(__dirname, 'public')

          return config
      }
    /* config for next-optimized-images */
    // your config for other plugins or the general next.js here...
  })
);
