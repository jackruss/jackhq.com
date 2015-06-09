module.exports = function() {

  var handler = function() {

  };

  return Object.freeze({
    route: {
      '/': handler
    },
    data: {
      sectionTitle: "Index",
      team: require('../team/team.js')
    },
    template: require('./index.html')
  });
};
