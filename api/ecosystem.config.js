module.exports = {
    apps : [{
      name: 'app',
      script: './app.ts',
      watch: true,
      watch_delay: 1000,
      "watch_options": {
          usePolling: true
      },
      ignore_watch : ['node_modules'],
    }]
  };