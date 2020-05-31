module.exports = {
    apps : [{
      name: 'docker_web_app',
      script: './app.js',
      watch: true,
      ignore_watch : ['node_modules'],
    }]
  };