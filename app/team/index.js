module.exports = function() {

  var handler = function() {

  };

  function initTwitterBadges() {
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){
      js=d.createElement(s);
      js.id=id;
      js.src=p+'://platform.twitter.com/widgets.js';
      fjs.parentNode.insertBefore(js,fjs);
    }}(document, 'script', 'twitter-wjs');
  }

  return Object.freeze({
    route: {
      '/': handler
    },
    data: {
      team: require('./team.js')
    },
    template: require('./index.html'),
    created: function() {
      setTimeout(initTwitterBadges, 100);
    }
  });
};
