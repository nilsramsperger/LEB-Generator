module.exports = function(config) {
    config.set({
      frameworks: ['jasmine'],
      files: ['specs/*.spec.js'],
      reporters: ['progress'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome'],
      singleRun: false,
      concurrency: Infinity
    })
  }