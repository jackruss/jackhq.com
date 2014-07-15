var domify = require('domify');
var Vue = require('vue-director');
var main = require('./index.html');

document.body.appendChild(
  domify(main)
);

var app = new Vue({
  el: '#app',
  data: {
    currentView: 'team'
  },
  components: {
    team: require('./team')(),
    technology: require('./technology')(),
    philosophy: require('./philosophy')(),
    community: require('./community')(),
    contact: require('./contact')()
  },
  methods: {
    isCurrentView: function(view) {
      return view === this.currentView;
    }
  }
});
