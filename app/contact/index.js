module.exports = function() {

  var handler = function() {

  };

  return Object.freeze({
    route: {
      '/contact': handler
    },
    template: require('./index.html')
  });
};
