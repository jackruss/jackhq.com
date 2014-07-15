module.exports = function() {

  var handler = function() {

  };

  return Object.freeze({
    route: {
      '/community': handler
    },
    template: require('./index.html')
  });
};
