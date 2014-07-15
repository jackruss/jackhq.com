module.exports = function() {

  var handler = function() {

  };

  return Object.freeze({
    route: {
      '/technology': handler
    },
    template: require('./index.html')
  });
};
