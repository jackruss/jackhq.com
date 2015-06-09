module.exports = function() {

  var handler = function() {

  };

  return Object.freeze({
    route: {
      '/philosophy': handler
    },
    data: {
      sectionTitle: "Our Philosophy"
    },
    template: require('./index.html')
  });
};
