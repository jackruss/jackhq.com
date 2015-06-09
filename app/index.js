var domify = require('domify');
var Vue = require('vue-director');
var main = require('./index.html');

document.body.appendChild(
  domify(main)
);

var getCurrentYear = function(){
  var date = new Date();
  return date.getFullYear();
}

var app = new Vue({
  el: '#app',
  data: {
    currentView: 'home',
    currentYear: getCurrentYear()
  },
  components: {
    team: require('./team')(),
    home: require('./home')(),
    technology: require('./technology')(),
    philosophy: require('./philosophy')(),
    community: require('./community')(),
    contact: require('./contact')(),
  },
  methods: {
    isCurrentView: function(view) {
      console.log(this.currentYear)
      return view === this.currentView;
    }
  }
});
