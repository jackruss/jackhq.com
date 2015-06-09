module.exports = function() {

  var handler = function() {

  };

  return Object.freeze({
    route: {
      '/technology': handler
    },
    data: {
      sectionTitle: "Our Technology"
    },
    template: require('./index.html')
  });
};
