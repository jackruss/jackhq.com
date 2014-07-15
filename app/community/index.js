module.exports = function() {

  var handler = function() {

  };

  return Object.freeze({
    route: {
      '/community': handler
    },
    data: {
      local: require('./local'),
      technical: require('./technical'),
      opensource: require('./opensource')
    },
    template: require('./index.html')
  });
};
