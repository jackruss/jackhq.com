module.exports = function() {

  var handler = function() {

  };

  return Object.freeze({
    route: {
      '/philosophy': handler
    },
    template: require('./index.html')
  });
};
