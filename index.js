module.exports = function(app) {
  app.route = function(options) {
    const method = options.method.toLowerCase();
    app[method](options.path, options.handler);
  };
};
