const { environment } = require('@rails/webpacker')
const typescript = require('./loaders/typescript')
const path = require('path')

environment.loaders.prepend('typescript', typescript)

environment.config.merge({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '..', '..', 'app/assets/javascripts'),
      '~': path.resolve(__dirname, '..', '..', 'app'),
    }
  }
})

module.exports = environment
