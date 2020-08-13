module.exports = {
    apps : [{
      name: 'app',
      script: 'app.js',
      watch: true,
      autorestart: true,
      watch_delay: 1000,
      "watch_options": {
          usePolling: true
      },
      ignore_watch : ['node_modules'],
    }]
  };