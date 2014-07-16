(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = '<div class="container">\n  <header>\n    <h1 class="title"><a href="http://en.wikipedia.org/wiki/Community">Community</a></h1>\n  </header>\n  <div class="row">\n    <blockquote class="title">\n      A community is a social unit of any size that shares common values.\n    </blockquote>\n    <p class="col-md-8 col-md-offset-2">\n      We also are involved in several technical communities that work together to\n      maintain and manage specific technologies. By working together in these broad reaching\n      communities, we are able to be part of the direction instead of having it dictated to us.\n    </p>\n  </div>\n  <div class="row">\n    <h3 class="title"><a href="#">Local</a></h3>\n    <p class="col-md-8 col-md-offset-2">\n      We host several local events and participant in local community driven events.\n    </p>\n  </div>\n  <div class="row">\n    <ul class="list-group col-md-offset-1">\n      <li class="list-group-item col-md-4 col-md-offset-1" v-repeat="local"><a href="{{link}}">{{name}}</a></li>\n    </ul>\n  </div>\n  <div class="row">\n    <div class="col-md-8 col-md-offset-2">\n      <h3>Silicon Harbor</h3>\n      <p>The <a href="#">Silicon Harbor</a> has grown immensely and continues to grow,\n        the need for more outlets to grow talent is more significant than ever, and\n        the only way we will grow talent is to share and learn together.\n      </p>\n    </div>\n  </div>\n  <div class="row">\n    <h3 class="title"><a href="#">Technical</a></h3>\n    <p class="col-md-8 col-md-offset-2">We also are involved in several technical\n    communities. These communities work together to maintain and manage specific\n    technologies.  By working together in these broad reaching communitees, we are\n    able to be part of the direction instead of having it be dictated to us.</p>\n    <ul class="list-group col-md-offset-1">\n      <li class="list-group-item col-md-4 col-md-offset-1" v-repeat="technical"><a href="{{link}}">{{name}}</a></li>\n    </ul>\n  </div>\n  <div class="row">\n    <h3 class="title"><a href="#">Open Source</a></h3>\n    <p class="col-md-8 col-md-offset-2">JRS is a proponent of open source, and all of our technology stacks are based on open source platforms. We also have several open source projects and technology tutorials.</p>\n    <ul class="list-group col-md-offset-1">\n      <li class="list-group-item col-md-4 col-md-offset-1" v-repeat="opensource"><a href="{{link}}">{{name}}</a></li>\n    </ul>\n  </div>\n\n</div>\n';
},{}],2:[function(require,module,exports){
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

},{"./index.html":1,"./local":3,"./opensource":4,"./technical":5}],3:[function(require,module,exports){
module.exports = [{
  name: 'Charleston Uber Users Group',
  link: 'https://plus.google.com/u/1/communities/109291424733517240577'
}, {
  name: 'Charleston CoderDojo',
  link: 'http://coderdojochs.github.io/'
}, {
  name: 'Charleston Hackathon',
  link: 'http://hackathon.sparcedge.com/'
}, {
  name: 'Charleston BarCamp',
  link: 'http://barcampchs.org/'
}, {
  name: 'Charleston CodeCamp',
  link: 'http://www.chscodecamp.com/'
}, {
  name: 'Charleston CodeRetreat',
  link: 'http://coderetreat.org/events/code-retreat-charleston'
}, {
  name: 'Charleston CodeShow',
  link: 'http://www.chscodeshow.com/'
}, {
  name: 'Harbor Entrepreneur Center',
  link: 'http://harborec.com/'
}, {
  name: 'Charleston AngularJS',
  link: 'https://plus.google.com/u/1/communities/107184675171587960100'
}, {
  name: 'Charleston NodeJS',
  link: 'https://plus.google.com/u/1/communities/107184675171587960100'
}, {
  name: 'Charleston CouchDb',
  link: 'https://plus.google.com/u/1/communities/110165172629233011992'
}]

},{}],4:[function(require,module,exports){
module.exports = [{
  name: 'Html2Haml',
  link: 'http://html2haml.herokuapp.com'
}, {
  name: 'ngUpload',
  link: 'http://twilson63.github.io/ngUpload/'
}, {
  name: 'express-coffee',
  link: 'http://twilson63.github.io/express-coffee/'
}, {
  name: 'node-cloudq',
  link: 'http://twilson63.github.io/node-cloudq/'
}, {
  name: 'cakefile-template',
  link: 'http://twilson63.github.io/cakefile-template/'
}, {
  name: 'docker-logstash',
  link: '#'
}, {
  name: 'express-couchdb-core',
  link: 'http://twilson63.github.io/express-couchdb-core'
}, {
  name: 'express-couchUser',
  link: 'http://twilson63.github.io/express-couchUser'
}, {
  name: 'sql-templar',
  link: 'http://twilson63.github.io/sql-templar'
}, {
  name: 'zeke-bootstrap',
  link: 'http://twilson63.github.io/zeke-bootstrap'
}, {
  name: 'vue-director',
  link: 'http://twilson63.github.io/vue-director'
}, {
  name: 'express-couchFs',
  link: 'http://twilson63.github.io/express-couchFs'
}, {
  name: 'level-skv',
  link: 'http://twilson63.github.io/level-skv'
}, {
  name: 'w3',
  link: 'http://twilson63.github.io/w3'
}, {
  name: 's3fs-recipe',
  link: 'http://twilson63.github.io/s3fs-recipe'
}, {
  name: 'fakerize-medical',
  link: 'http://jackruss.github.io/fakerize-medical'
}, {
  name: 'sinatra-formhelpers',
  link: 'http://twilson63.github.io/sinatra-formhelpers'
}, {
  name: 's3foo',
  link: 'http://twilson63.github.io/s3foo'
}, {
  name: 'node-csv2json',
  link: 'http://twilson63.github.io/node-csv2json'
}

];

},{}],5:[function(require,module,exports){
module.exports = [{
  name: 'AngularJS',
  link: 'http://angularjs.org'
}, {
  name: 'Chef',
  link: 'http://www.getchef.com/chef/'
}, {
  name: 'Clojure',
  link: 'http://clojure.org'
}, {
  name: 'CouchDb',
  link: 'http://couchdb.apache.org/'
}, {
  name: 'JavaScript',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
}, {
  name: 'NodeJS',
  link: 'http://nodejs.org'
}, {
  name: 'Ruby',
  link: 'http://ruby-lang.org'
}];

},{}],6:[function(require,module,exports){
module.exports = '<div class="container">\n  <header>\n    <h1 class="title">Contact Us</h1>\n  </header>\n  <div class="row">\n    <div class="col-md-5 col-md-offset-1">\n      <form novalidate v-on="submit: submit(contact)">\n        <div class="form-group">\n          <label>Name</label>\n          <input class="form-control" v-model="contact.name">\n        </div>\n        <div class="form-group">\n          <label>Email</label>\n          <input class="form-control" v-model="contact.email">\n        </div>\n        <div class="form-group">\n          <label>Phone</label>\n          <input class="form-control" v-model="contact.phone">\n        </div>\n        <div class="form-group">\n          <label>Details</label>\n          <textarea class="form-control" rows="6" v-model="contact.body"></textarea>\n        </div>\n        <div class="form-group">\n          <button class="btn btn-default">Submit</button>\n        </div>\n      </form>\n    </div>\n    <div class="col-md-6">\n      <iframe width="380" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=494+C+Wando+Park+Boulevard,+Mount+Pleasant,+SC&amp;aq=0&amp;oq=494+C+wando+park+,&amp;sll=32.841231,-79.867948&amp;sspn=0.013936,0.017982&amp;gl=us&amp;ie=UTF8&amp;hq=&amp;hnear=494+Wando+Park+Blvd,+Mt+Pleasant,+South+Carolina+29464&amp;t=m&amp;z=14&amp;ll=32.841231,-79.867948&amp;output=embed"></iframe>\n      <p>\n        <address>\n          494 C Wando Park Boulevard\n          Mount Pleasant, SC  29464\n        </address>\n        <br />\n        Phone:\n        843.606.6484\n        <br />\n        Email:\n        <a href=\'mailto://info@jackrussellsoftware.com\'>info@jackrussellsoftware.com</a>\n        <br />\n        Twitter:\n        <a href=\'http://twitter.com/jackhq\'>@jackhq</a>\n      </p>\n    </div>\n  </div>\n</div>\n';
},{}],7:[function(require,module,exports){
require('firebase/firebase');

module.exports = function() {
  var ref;

  var handler = function() {

  };
  var submit = function(contact) {
    console.log(contact);
    var ref = new Firebase('https://jackhq.firebaseio.com/contacts');
    ref.push(contact, function() {
      alert('Successfully Submitted!');
      this.$data.contact = {};
      window.location.href('#/');
    });
  }

  return Object.freeze({
    route: {
      '/contact': handler
    },
    template: require('./index.html'),
    methods: {
      submit: submit
    }
  });
};

},{"./index.html":6,"firebase/firebase":18}],8:[function(require,module,exports){
module.exports = '<div id="app">\n  <header>\n    <div class="text-center">\n      <img src="images/jackhq-logo.png" height="200px;" />\n    </div>\n    <h3 class="text-center">A Division of <a href="http://www.carekinesis.com">CareKinesis, Inc</a></h3>\n  </header>\n  <nav class="navbar navbar-default">\n    <div class="container">\n      <div class="col-md-11 col-md-offset-1">\n        <ul class="nav navbar-nav">\n          <li v-class="active: isCurrentView(\'team\')"><a href="#/">Team</a></li>\n          <li v-class="active: isCurrentView(\'technology\')"><a href="#/technology">Technology</a></li>\n          <li v-class="active: isCurrentView(\'philosophy\')"><a href="#/philosophy">Philosophy</a></li>\n          <li v-class="active: isCurrentView(\'community\')"><a href="#/community">Community</a></li>\n        </ul>\n        <ul class="nav navbar-nav navbar-right">\n          <li v-class="active: isCurrentView(\'contact\')"><a href="#/contact">Contact</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <div v-view="currentView" class="main"></div>\n  <footer class="well">\n    <div class="container">\n      <ul class="list-inline text-center">\n        <li>All Rights Reserved 2014</li>\n        <li>.</li>\n        <li><a class="btn btn-link" href="http://twitter.com/jackhq">twitter</a></li>\n        <li>.</li>\n        <li><a class="btn btn-link" href="http://github.com/jackruss">Github</a></li>\n      </ul>\n    </div>\n  </footer>\n</div>\n';
},{}],9:[function(require,module,exports){
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

},{"./community":2,"./contact":7,"./index.html":8,"./philosophy":11,"./team":13,"./technology":16,"domify":17,"vue-director":19}],10:[function(require,module,exports){
module.exports = '<div class="container">\n  <header>\n    <h1 class="title">Philosophy</h1>\n  </header>\n  <div class="row">\n    <p class="col-md-8 col-md-offset-2">\n      At JRS, our number one responsibility is to provide\n      quality software to our clients or users.  At any given time, the process and\n      workflow to provide such services needs to evolve.  In order to do this, we\n      are constantly re-working our process to improve our productivity.  If you\n      leave that last sentence the way it is, grammar should be: So, we are constantly\n      re-working our process to improve our productivity.\n    </p>\n  </div>\n  <div class="row">\n    <p class="col-md-8 col-md-offset-2">\n      It is not easy to write quality code with tight timelines and\n      complex user requirements.  We leverage several industry standards\n      and proven methods that help us manage our development products and\n      processes.\n    </p>\n  </div>\n  <div class="row">\n    <h3 class="title"><a href="http://en.wikipedia.org/wiki/Pair_programming">Pair Programming</a></h3>\n    <p class="col-md-8 col-md-offset-2">\n      Pair Programming is one of the most controversial of techniques.  We\n      have found Pair Programming to be invaluable in our development process.\n      Not only does it help reduce common human bugs, but it helps the\n      developers to continue to share knowledge and grow.  Pair Programming\n      is one of the best teaching/learning processes for new developers.\n    </p>\n  </div>\n  <div class="row">\n    <h3  class="title"><a href="http://en.wikipedia.org/wiki/User_stories">User-Stories/Sprint Planning</a></h3>\n    <p class="col-md-8 col-md-offset-2">\n      The development team works with the product team creating user-stories and a\n      sprint development plan for every feature.  The time preparing helps\n      prevent tangents and provides a more focused execution during\n      the development sprint.\n    </p>\n  </div>\n  <div class="row">\n    <h3  class="title"><a href="http://en.wikipedia.org/wiki/Code_reviews">Code Reviews</a></h3>\n    <p class="col-md-8 col-md-offset-2">\n      Some people think that pair programming replaces code reviews, but we feel code reviews also\n      share a place in the development life-cycle.  The Code Review is focused on the code quality\n      and structure.  Is the code maintainable?  Can the code be refactored to provide a simpler solution?\n    </p>\n  </div>\n  <div class="row">\n    <h3  class="title">\n      <a href="http://en.wikipedia.org/wiki/Unit_testing">Unit Testing</a>\n      /\n      <a href="http://en.wikipedia.org/wiki/Continuous_integration">Continuous Integration</a>\n    </h3>\n    <p class="col-md-8 col-md-offset-2">\n      All production code should have unit tests, no matter what the code is. The tests should be isolated\n      and only test the specific code of the unit.  This goes for front-end JavaScript and back-end Serverside\n      code.  Our teams are very focused on testing and it is a requirement. It is all about confidence in\n      your deliverables; creating unit tests helps to increase that confidence. Unit-tests are a great way\n      to document edge cases and strange bugs.\n    </p>\n    <p class="col-md-8 col-md-offset-2">\n      Continuous Integration is an automated process that runs all of your automated test after\n      every check-in to your repository.  It will alert you when your code is breaking the build.\n    </p>\n  </div>\n  <div class="row">\n    <h3  class="title"><a href="http://en.wikipedia.org/wiki/User_stories">Integration Testing</a></h3>\n    <p class="col-md-8 col-md-offset-2">\n      Our main integration testing process is performed using a series of visual test cases and managed\n      by our testing team.  There is also some manual testing that is performed before every release.\n      This high-touch approach to integration testing allows us to focus on the core scenarios that\n      can turn releases into support disasters.\n    </p>\n  </div>\n\n  <!--\n  <div class="row">\n    <h3  class="title"><a href="http://en.wikipedia.org/wiki/User_stories">Automated Deployment</a></h3>\n    <p class="col-md-8 col-md-offset-2">\n\n    </p>\n  </div>\n-->\n</div>\n';
},{}],11:[function(require,module,exports){
module.exports = function() {

  var handler = function() {

  };

  return Object.freeze({
    route: {
      '/philosophy': handler
    },
    template: require('./index.html')
  });
};

},{"./index.html":10}],12:[function(require,module,exports){
module.exports = '<article class="container">\n  <header>\n    <h1 style="text-align: center">The Jack Russell Software Team</h1>\n  </header>\n  <div class="list-group">\n    <div class="list-group-item col-md-5 team-boxes" v-repeat="team">\n      <div class="media">\n        <div class="pull-left">\n          <img class="img-circle" src="{{image}}" height="60px" width="60px" alt="{{name}}"/>\n        </div>\n        <div class="media-body">\n          <div class="pull-right">\n            <span class=\'label label-success\'>{{start}}</span>\n          </div>\n          <h4 class="media-header">{{name}}</h4>\n          <p>{{title}}</p>\n          <div>\n            <div class="pull-left" v-show="twitter">\n              <a href="https://twitter.com/{{twitter}}" class="twitter-follow-button" data-show-count="false">Follow @{{twitter}}</a>\n            </div>\n            <div class="pull-right" v-show="github">\n              <iframe src="http://ghbtns.com/github-btn.html?user={{github}}&type=follow&count=true"\n  allowtransparency="true" frameborder="0" scrolling="0" width="165" height="20"></iframe>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n</article>\n';
},{}],13:[function(require,module,exports){
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

},{"./index.html":12,"./team.js":14}],14:[function(require,module,exports){
module.exports = [{
  name: 'Tom Wilson',
  title: 'Chief Technologist',
  image: 'images/tom.jpg',
  twitter: 'twilson63',
  github: 'twilson63',
  start: 2007
},{
  name: 'Andrew Kennedy',
  title: 'Senior Programer/Analyst',
  image: 'images/andrew.jpg',
  twitter: 'akennedy',
  github: 'akennedy',
  start: 2008
}, {
  name: 'Barrett Little',
  title: 'Senior Devops Programmer/Analyst',
  image: 'images/barrett.jpg',
  twitter: 'pblittle',
  github: 'pblittle',
  start: 2008
},{
  name: 'Russell Niller',
  title: 'Scrum Master',
  image: 'images/russell.jpg',
  twitter: 'rdniller',
  github: 'rdniller',
  start: 2009
}, {
  name: 'Brook Carter',
  title: 'Office Manager',
  image: 'images/brook.jpg',
  github: 'brookcarter',
  start: 2011
}, {
  name: 'Kevin Stewart',
  title: 'Programmer/Analyst II',
  image: 'images/kevin.jpg',
  github: 'kdstew',
  start: 2012
}, {
  name: 'Raj Singh',
  title: 'Programmer/Analyst I',
  image: 'images/raj.jpg',
  github: 'rssingh',
  start: 2013
}, {
  name: 'Vietson Nguyen',
  title: 'Interops Programmer/Analyst I',
  image: 'images/son.jpg',
  github: 'vsnguyen',
  start: 2012
}, {
  name: 'Bogan Painter',
  title: 'Programmer/Analyst I',
  image: 'images/bogan.jpg',
  github: 'boganp',
  start: 2013
}, {
  name: 'Mark Gunnels',
  title: 'Interops Senior Programmer/Analyst',
  image: 'images/mark.jpg',
  github: 'markgunnels',
  start: 2013
}, {
  name: 'Brent Cobb',
  title: 'Programmer/Analyst I',
  image: 'images/brent.jpeg',
  github: 'brentcobb',
  start: 2013
}, {
  name: 'Joel Villahermosa',
  title: 'Programmer/Analyst I',
  image: 'images/joel.jpg',
  github: 'joelv',
  start: 2014
}, {
  name: 'Stokes Player',
  title: 'Senior Programmer/Analyst',
  image: 'images/stokes.jpg',
  twitter: 'stokesplayer',
  github: 'warrensplayer',
  start: 2013
}, {
  name: 'John Schwikart',
  title: 'Product Manager/Analyst',
  image: 'images/johns.jpg',
  github: 'spikenology',
  start: 2013
}, {
  name: 'Tejay Cardon',
  title: 'Devops Programmer/Analyst I',
  image: 'images/tejay.jpg',
  github: 'tejaycar',
  start: 2014
}, {
  name: 'Debbie Rogina',
  title: 'Programmer/Analyst I',
  image: 'images/debbie.jpeg',
  twitter: 'debbierogina',
  github: 'drogina',
  start: 2014
}, {
  name: 'Jenni Kissinger',
  title: 'Programmer/Analyst I',
  image: 'images/jenni1.jpg',
  twitter: 'jennikissinger',
  github: 'jenjaina',
  start: 2014
}];

},{}],15:[function(require,module,exports){
module.exports = '<div class="container">\n  <header>\n    <h1 class="title">Technology</h1>\n  </header>\n  <div class="row">\n    <p class="col-md-6 col-md-offset-3">\n      At JRS, we have 6 development teams. Each team uses\n      a different technology stack for its product line.\n      Every stack must communicate via http/json api, which\n      provides a rich integration amongst the technologies.\n      Over time, we will continue to add new technology, but\n      we also strive to be very selective to keep the on\n      boarding of developers as efficient as possible.\n    </p>\n\n  </div>\n  <div class="row">\n    <div class="col-md-4">\n      <h3 class="title">EireneRx</h3>\n      <ul class="list-group">\n        <li class="list-group-item">RubyOnRails</li>\n        <li class="list-group-item">AngularJS</li>\n        <li class="list-group-item">MySQL</li>\n        <li class="list-group-item">CouchDb</li>\n      </ul>\n    </div>\n    <div class="col-md-4">\n      <h3 class="title">EOM</h3>\n      <ul class="list-group">\n        <li class="list-group-item">RubyOnRails</li>\n        <li class="list-group-item">AngularJS</li>\n        <li class="list-group-item">MySQL</li>\n        <li class="list-group-item">CouchDb</li>\n      </ul>\n    </div>\n    <div class="col-md-4">\n      <h3 class="title">NiaRx</h3>\n      <ul class="list-group">\n        <li class="list-group-item">NodeJS</li>\n        <li class="list-group-item">AngularJS</li>\n        <li class="list-group-item">CouchDb</li>\n      </ul>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-md-4">\n      <h3 class="title">DevOps</h3>\n      <ul class="list-group">\n        <li class="list-group-item">Chef</li>\n        <li class="list-group-item">Ruby</li>\n        <li class="list-group-item">Linux</li>\n      </ul>\n    </div>\n    <div class="col-md-4">\n      <h3 class="title">InterOps - A</h3>\n      <ul class="list-group">\n        <li class="list-group-item">Clojure</li>\n        <li class="list-group-item">Java</li>\n      </ul>\n    </div>\n    <div class="col-md-4">\n      <h3 class="title">InterOps - B</h3>\n      <ul class="list-group">\n        <li class="list-group-item">NodeJS</li>\n        <li class="list-group-item">CouchDb</li>\n      </ul>\n    </div>\n  </div>\n</div>\n';
},{}],16:[function(require,module,exports){
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

},{"./index.html":15}],17:[function(require,module,exports){

/**
 * Expose `parse`.
 */

module.exports = parse;

/**
 * Wrap map from jquery.
 */

var map = {
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  _default: [0, '', '']
};

map.td =
map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option =
map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead =
map.tbody =
map.colgroup =
map.caption =
map.tfoot = [1, '<table>', '</table>'];

map.text =
map.circle =
map.ellipse =
map.line =
map.path =
map.polygon =
map.polyline =
map.rect = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];

/**
 * Parse `html` and return a DOM Node instance, which could be a TextNode,
 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
 * instance, depending on the contents of the `html` string.
 *
 * @param {String} html - HTML string to "domify"
 * @param {Document} doc - The `document` instance to create the Node for
 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
 * @api private
 */

function parse(html, doc) {
  if ('string' != typeof html) throw new TypeError('String expected');

  // default to the global `document` object
  if (!doc) doc = document;

  // tag name
  var m = /<([\w:]+)/.exec(html);
  if (!m) return doc.createTextNode(html);

  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

  var tag = m[1];

  // body support
  if (tag == 'body') {
    var el = doc.createElement('html');
    el.innerHTML = html;
    return el.removeChild(el.lastChild);
  }

  // wrap map
  var wrap = map[tag] || map._default;
  var depth = wrap[0];
  var prefix = wrap[1];
  var suffix = wrap[2];
  var el = doc.createElement('div');
  el.innerHTML = prefix + html + suffix;
  while (depth--) el = el.lastChild;

  // one element
  if (el.firstChild == el.lastChild) {
    return el.removeChild(el.firstChild);
  }

  // several elements
  var fragment = doc.createDocumentFragment();
  while (el.firstChild) {
    fragment.appendChild(el.removeChild(el.firstChild));
  }

  return fragment;
}

},{}],18:[function(require,module,exports){
(function() {var h,aa=this;function n(a){return void 0!==a}function ba(){}function ca(a){a.rb=function(){return a.ld?a.ld:a.ld=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function q(a){return"string"==typeof a}function fa(a){return"number"==typeof a}function ga(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ha(a,b,c){return a.call.apply(a.bind,arguments)}
function ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ha:ia;return r.apply(null,arguments)}
function ja(a,b){function c(){}c.prototype=b.prototype;a.ke=b.prototype;a.prototype=new c;a.ie=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};function ka(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function la(){this.mc=void 0}
function ma(a,b,c){switch(typeof b){case "string":na(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if("array"==da(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],ma(a,a.mc?a.mc.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),
na(f,c),c.push(":"),ma(a,a.mc?a.mc.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var oa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},pa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function na(a,b){b.push('"',a.replace(pa,function(a){if(a in oa)return oa[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return oa[a]=e+b.toString(16)}),'"')};function qa(a){return"undefined"!==typeof JSON&&n(JSON.parse)?JSON.parse(a):ka(a)}function u(a){if("undefined"!==typeof JSON&&n(JSON.stringify))a=JSON.stringify(a);else{var b=[];ma(new la,a,b);a=b.join("")}return a};function ra(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,v(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var sa={};function x(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}
function y(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:ta.assert(!1,"errorPrefix_ called with argumentNumber > 4.  Need to update it?")}return a=a+" failed: "+(d+" argument ")}function z(a,b,c,d){if((!d||n(c))&&"function"!=da(c))throw Error(y(a,b,d)+"must be a valid function.");}
function ua(a,b,c){if(n(c)&&(!ga(c)||null===c))throw Error(y(a,b,!0)+"must be a valid context object.");};function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function va(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};var ta={},wa=/[\[\].#$\/]/,xa=/[\[\].#$]/;function ya(a){return q(a)&&0!==a.length&&!wa.test(a)}function za(a,b,c){c&&!n(b)||Aa(y(a,1,c),b)}
function Aa(a,b,c,d){c||(c=0);d=d||[];if(!n(b))throw Error(a+"contains undefined"+Ba(d));if("function"==da(b))throw Error(a+"contains a function"+Ba(d)+" with contents: "+b.toString());if(Ca(b))throw Error(a+"contains "+b.toString()+Ba(d));if(1E3<c)throw new TypeError(a+"contains a cyclic object value ("+d.slice(0,100).join(".")+"...)");if(q(b)&&b.length>10485760/3&&10485760<ra(b).length)throw Error(a+"contains a string greater than 10485760 utf8 bytes"+Ba(d)+" ('"+b.substring(0,50)+"...')");if(ga(b))for(var e in b)if(A(b,
e)){var f=b[e];if(".priority"!==e&&".value"!==e&&".sv"!==e&&!ya(e))throw Error(a+" contains an invalid key ("+e+")"+Ba(d)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');d.push(e);Aa(a,f,c+1,d);d.pop()}}function Ba(a){return 0==a.length?"":" in property '"+a.join(".")+"'"}function Da(a,b){if(!ga(b))throw Error(y(a,1,!1)+" must be an object containing the children to replace.");za(a,b,!1)}
function Ea(a,b,c,d){if(!(d&&!n(c)||null===c||fa(c)||q(c)||ga(c)&&A(c,".sv")))throw Error(y(a,b,d)+"must be a valid firebase priority (a string, number, or null).");}function Fa(a,b,c){if(!c||n(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(y(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}
function Ga(a,b){if(n(b)&&!ya(b))throw Error(y(a,2,!0)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}function Ha(a,b){if(!q(b)||0===b.length||xa.test(b))throw Error(y(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function B(a,b){if(".info"===C(b))throw Error(a+" failed: Can't modify data under /.info/");};function D(a,b,c,d,e,f,g){this.m=a;this.path=b;this.Ea=c;this.fa=d;this.ya=e;this.Ca=f;this.Wa=g;if(n(this.fa)&&n(this.Ca)&&n(this.Ea))throw"Query: Can't combine startAt(), endAt(), and limit().";}D.prototype.Uc=function(){x("Query.ref",0,0,arguments.length);return new E(this.m,this.path)};D.prototype.ref=D.prototype.Uc;
D.prototype.fb=function(a,b){x("Query.on",2,4,arguments.length);Fa("Query.on",a,!1);z("Query.on",2,b,!1);var c=Ia("Query.on",arguments[2],arguments[3]);this.m.Rb(this,a,b,c.cancel,c.Y);return b};D.prototype.on=D.prototype.fb;D.prototype.yb=function(a,b,c){x("Query.off",0,3,arguments.length);Fa("Query.off",a,!0);z("Query.off",2,b,!0);ua("Query.off",3,c);this.m.lc(this,a,b,c)};D.prototype.off=D.prototype.yb;
D.prototype.Wd=function(a,b){function c(g){f&&(f=!1,e.yb(a,c),b.call(d.Y,g))}x("Query.once",2,4,arguments.length);Fa("Query.once",a,!1);z("Query.once",2,b,!1);var d=Ia("Query.once",arguments[2],arguments[3]),e=this,f=!0;this.fb(a,c,function(b){e.yb(a,c);d.cancel&&d.cancel.call(d.Y,b)})};D.prototype.once=D.prototype.Wd;
D.prototype.Pd=function(a){x("Query.limit",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw"Query.limit: First argument must be a positive integer.";return new D(this.m,this.path,a,this.fa,this.ya,this.Ca,this.Wa)};D.prototype.limit=D.prototype.Pd;D.prototype.ee=function(a,b){x("Query.startAt",0,2,arguments.length);Ea("Query.startAt",1,a,!0);Ga("Query.startAt",b);n(a)||(b=a=null);return new D(this.m,this.path,this.Ea,a,b,this.Ca,this.Wa)};D.prototype.startAt=D.prototype.ee;
D.prototype.Jd=function(a,b){x("Query.endAt",0,2,arguments.length);Ea("Query.endAt",1,a,!0);Ga("Query.endAt",b);return new D(this.m,this.path,this.Ea,this.fa,this.ya,a,b)};D.prototype.endAt=D.prototype.Jd;function Ja(a){var b={};n(a.fa)&&(b.sp=a.fa);n(a.ya)&&(b.sn=a.ya);n(a.Ca)&&(b.ep=a.Ca);n(a.Wa)&&(b.en=a.Wa);n(a.Ea)&&(b.l=a.Ea);n(a.fa)&&n(a.ya)&&null===a.fa&&null===a.ya&&(b.vf="l");return b}D.prototype.Pa=function(){var a=Ka(Ja(this));return"{}"===a?"default":a};
function Ia(a,b,c){var d={};if(b&&c)d.cancel=b,z(a,3,d.cancel,!0),d.Y=c,ua(a,4,d.Y);else if(b)if("object"===typeof b&&null!==b)d.Y=b;else if("function"===typeof b)d.cancel=b;else throw Error(sa.je(a,3,!0)+"must either be a cancel callback or a context object.");return d};function F(a,b){if(1==arguments.length){this.n=a.split("/");for(var c=0,d=0;d<this.n.length;d++)0<this.n[d].length&&(this.n[c]=this.n[d],c++);this.n.length=c;this.da=0}else this.n=a,this.da=b}function C(a){return a.da>=a.n.length?null:a.n[a.da]}function La(a){var b=a.da;b<a.n.length&&b++;return new F(a.n,b)}function Ma(a){return a.da<a.n.length?a.n[a.n.length-1]:null}h=F.prototype;h.toString=function(){for(var a="",b=this.da;b<this.n.length;b++)""!==this.n[b]&&(a+="/"+this.n[b]);return a||"/"};
h.parent=function(){if(this.da>=this.n.length)return null;for(var a=[],b=this.da;b<this.n.length-1;b++)a.push(this.n[b]);return new F(a,0)};h.G=function(a){for(var b=[],c=this.da;c<this.n.length;c++)b.push(this.n[c]);if(a instanceof F)for(c=a.da;c<a.n.length;c++)b.push(a.n[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new F(b,0)};h.f=function(){return this.da>=this.n.length};
function Na(a,b){var c=C(a);if(null===c)return b;if(c===C(b))return Na(La(a),La(b));throw"INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")";}h.contains=function(a){var b=0;if(this.n.length>a.n.length)return!1;for(;b<this.n.length;){if(this.n[b]!==a.n[b])return!1;++b}return!0};function Oa(){this.children={};this.yc=0;this.value=null}function Pa(a,b,c){this.Fa=a?a:"";this.Eb=b?b:null;this.B=c?c:new Oa}function I(a,b){for(var c=b instanceof F?b:new F(b),d=a,e;null!==(e=C(c));)d=new Pa(e,d,va(d.B.children,e)||new Oa),c=La(c);return d}h=Pa.prototype;h.j=function(){return this.B.value};function J(a,b){v("undefined"!==typeof b,"Cannot set value to undefined");a.B.value=b;Qa(a)}h.sb=function(){return 0<this.B.yc};h.f=function(){return null===this.j()&&!this.sb()};
h.A=function(a){for(var b in this.B.children)a(new Pa(b,this,this.B.children[b]))};function Ra(a,b,c,d){c&&!d&&b(a);a.A(function(a){Ra(a,b,!0,d)});c&&d&&b(a)}function Sa(a,b,c){for(a=c?a:a.parent();null!==a;){if(b(a))return!0;a=a.parent()}return!1}h.path=function(){return new F(null===this.Eb?this.Fa:this.Eb.path()+"/"+this.Fa)};h.name=function(){return this.Fa};h.parent=function(){return this.Eb};
function Qa(a){if(null!==a.Eb){var b=a.Eb,c=a.Fa,d=a.f(),e=A(b.B.children,c);d&&e?(delete b.B.children[c],b.B.yc--,Qa(b)):d||e||(b.B.children[c]=a.B,b.B.yc++,Qa(b))}};function Ta(a,b){this.Ta=a?a:Ua;this.ea=b?b:Va}function Ua(a,b){return a<b?-1:a>b?1:0}h=Ta.prototype;h.sa=function(a,b){return new Ta(this.Ta,this.ea.sa(a,b,this.Ta).J(null,null,!1,null,null))};h.remove=function(a){return new Ta(this.Ta,this.ea.remove(a,this.Ta).J(null,null,!1,null,null))};h.get=function(a){for(var b,c=this.ea;!c.f();){b=this.Ta(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
function Wa(a,b){for(var c,d=a.ea,e=null;!d.f();){c=a.Ta(b,d.key);if(0===c){if(d.left.f())return e?e.key:null;for(d=d.left;!d.right.f();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}h.f=function(){return this.ea.f()};h.count=function(){return this.ea.count()};h.xb=function(){return this.ea.xb()};h.bb=function(){return this.ea.bb()};h.Da=function(a){return this.ea.Da(a)};h.Qa=function(a){return this.ea.Qa(a)};
h.Za=function(a){return new Xa(this.ea,a)};function Xa(a,b){this.ud=b;for(this.Zb=[];!a.f();)this.Zb.push(a),a=a.left}function Ya(a){if(0===a.Zb.length)return null;var b=a.Zb.pop(),c;c=a.ud?a.ud(b.key,b.value):{key:b.key,value:b.value};for(b=b.right;!b.f();)a.Zb.push(b),b=b.left;return c}function Za(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:Va;this.right=null!=e?e:Va}h=Za.prototype;
h.J=function(a,b,c,d,e){return new Za(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};h.count=function(){return this.left.count()+1+this.right.count()};h.f=function(){return!1};h.Da=function(a){return this.left.Da(a)||a(this.key,this.value)||this.right.Da(a)};h.Qa=function(a){return this.right.Qa(a)||a(this.key,this.value)||this.left.Qa(a)};function bb(a){return a.left.f()?a:bb(a.left)}h.xb=function(){return bb(this).key};
h.bb=function(){return this.right.f()?this.key:this.right.bb()};h.sa=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.J(null,null,null,e.left.sa(a,b,c),null):0===d?e.J(null,b,null,null,null):e.J(null,null,null,null,e.right.sa(a,b,c));return cb(e)};function db(a){if(a.left.f())return Va;a.left.Q()||a.left.left.Q()||(a=eb(a));a=a.J(null,null,null,db(a.left),null);return cb(a)}
h.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.f()||c.left.Q()||c.left.left.Q()||(c=eb(c)),c=c.J(null,null,null,c.left.remove(a,b),null);else{c.left.Q()&&(c=fb(c));c.right.f()||c.right.Q()||c.right.left.Q()||(c=gb(c),c.left.left.Q()&&(c=fb(c),c=gb(c)));if(0===b(a,c.key)){if(c.right.f())return Va;d=bb(c.right);c=c.J(d.key,d.value,null,null,db(c.right))}c=c.J(null,null,null,null,c.right.remove(a,b))}return cb(c)};h.Q=function(){return this.color};
function cb(a){a.right.Q()&&!a.left.Q()&&(a=hb(a));a.left.Q()&&a.left.left.Q()&&(a=fb(a));a.left.Q()&&a.right.Q()&&(a=gb(a));return a}function eb(a){a=gb(a);a.right.left.Q()&&(a=a.J(null,null,null,null,fb(a.right)),a=hb(a),a=gb(a));return a}function hb(a){return a.right.J(null,null,a.color,a.J(null,null,!0,null,a.right.left),null)}function fb(a){return a.left.J(null,null,a.color,null,a.J(null,null,!0,a.left.right,null))}
function gb(a){return a.J(null,null,!a.color,a.left.J(null,null,!a.left.color,null,null),a.right.J(null,null,!a.right.color,null,null))}function ib(){}h=ib.prototype;h.J=function(){return this};h.sa=function(a,b){return new Za(a,b,null)};h.remove=function(){return this};h.count=function(){return 0};h.f=function(){return!0};h.Da=function(){return!1};h.Qa=function(){return!1};h.xb=function(){return null};h.bb=function(){return null};h.Q=function(){return!1};var Va=new ib;function jb(a){this.Ub=a;this.hc="firebase:"}jb.prototype.set=function(a,b){null==b?this.Ub.removeItem(this.hc+a):this.Ub.setItem(this.hc+a,u(b))};jb.prototype.get=function(a){a=this.Ub.getItem(this.hc+a);return null==a?null:qa(a)};jb.prototype.remove=function(a){this.Ub.removeItem(this.hc+a)};jb.prototype.nd=!1;function kb(){this.nb={}}kb.prototype.set=function(a,b){null==b?delete this.nb[a]:this.nb[a]=b};kb.prototype.get=function(a){return A(this.nb,a)?this.nb[a]:null};kb.prototype.remove=function(a){delete this.nb[a]};kb.prototype.nd=!0;function lb(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new jb(b)}}catch(c){}return new kb}var mb=lb("localStorage"),nb=lb("sessionStorage");function ob(a,b,c,d){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.nc=b;this.Yb=c;this.ge=d;this.ha=mb.get("host:"+a)||this.host}function pb(a,b){b!==a.ha&&(a.ha=b,"s-"===a.ha.substr(0,2)&&mb.set("host:"+a.host,a.ha))}ob.prototype.toString=function(){return(this.nc?"https://":"http://")+this.host};function qb(){this.qa=-1};function rb(){this.qa=-1;this.qa=64;this.C=[];this.xc=[];this.Ed=[];this.ec=[];this.ec[0]=128;for(var a=1;a<this.qa;++a)this.ec[a]=0;this.rc=this.$a=0;this.reset()}ja(rb,qb);rb.prototype.reset=function(){this.C[0]=1732584193;this.C[1]=4023233417;this.C[2]=2562383102;this.C[3]=271733878;this.C[4]=3285377520;this.rc=this.$a=0};
function sb(a,b,c){c||(c=0);var d=a.Ed;if(q(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.C[0];c=a.C[1];for(var g=a.C[2],k=a.C[3],l=a.C[4],m,e=0;80>e;e++)40>e?20>e?(f=k^c&(g^k),m=1518500249):(f=c^g^k,m=1859775393):60>e?(f=c&g|k&(c|g),m=2400959708):(f=c^g^k,m=3395469782),f=(b<<
5|b>>>27)+f+l+m+d[e]&4294967295,l=k,k=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.C[0]=a.C[0]+b&4294967295;a.C[1]=a.C[1]+c&4294967295;a.C[2]=a.C[2]+g&4294967295;a.C[3]=a.C[3]+k&4294967295;a.C[4]=a.C[4]+l&4294967295}
rb.prototype.update=function(a,b){n(b)||(b=a.length);for(var c=b-this.qa,d=0,e=this.xc,f=this.$a;d<b;){if(0==f)for(;d<=c;)sb(this,a,d),d+=this.qa;if(q(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.qa){sb(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.qa){sb(this,e);f=0;break}}this.$a=f;this.rc+=b};var tb=Array.prototype,ub=tb.forEach?function(a,b,c){tb.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},vb=tb.map?function(a,b,c){return tb.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},wb=tb.reduce?function(a,b,c,d){d&&(b=r(b,d));return tb.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;ub(a,function(c,g){e=b.call(d,e,c,g,a)});return e},
xb=tb.every?function(a,b,c){return tb.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function yb(a,b){var c;a:{c=a.length;for(var d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:q(a)?a.charAt(c):a[c]};var zb;a:{var Ab=aa.navigator;if(Ab){var Bb=Ab.userAgent;if(Bb){zb=Bb;break a}}zb=""}function Cb(a){return-1!=zb.indexOf(a)};var Db=Cb("Opera")||Cb("OPR"),Eb=Cb("Trident")||Cb("MSIE"),Fb=Cb("Gecko")&&-1==zb.toLowerCase().indexOf("webkit")&&!(Cb("Trident")||Cb("MSIE")),Gb=-1!=zb.toLowerCase().indexOf("webkit");(function(){var a="",b;if(Db&&aa.opera)return a=aa.opera.version,"function"==da(a)?a():a;Fb?b=/rv\:([^\);]+)(\)|;)/:Eb?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Gb&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(zb))?a[1]:"");return Eb&&(b=(b=aa.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var Hb=null,Ib=null;
function Jb(a,b){if(!ea(a))throw Error("encodeByteArray takes an array as a parameter");if(!Hb){Hb={};Ib={};for(var c=0;65>c;c++)Hb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),Ib[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)}for(var c=b?Ib:Hb,d=[],e=0;e<a.length;e+=3){var f=a[e],g=e+1<a.length,k=g?a[e+1]:0,l=e+2<a.length,m=l?a[e+2]:0,p=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|m>>6,m=m&63;l||(m=64,g||(k=64));d.push(c[p],c[f],c[k],c[m])}return d.join("")}
;var Kb=function(){var a=1;return function(){return a++}}();function v(a,b){if(!a)throw Error("Firebase INTERNAL ASSERT FAILED:"+b);}function Lb(a){var b=ra(a);a=new rb;a.update(b);var b=[],c=8*a.rc;56>a.$a?a.update(a.ec,56-a.$a):a.update(a.ec,a.qa-(a.$a-56));for(var d=a.qa-1;56<=d;d--)a.xc[d]=c&255,c/=256;sb(a,a.xc);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.C[d]>>e&255,++c;return Jb(b)}
function Mb(a){for(var b="",c=0;c<arguments.length;c++)b=ea(arguments[c])?b+Mb.apply(null,arguments[c]):"object"===typeof arguments[c]?b+u(arguments[c]):b+arguments[c],b+=" ";return b}var Nb=null,Ob=!0;function K(a){!0===Ob&&(Ob=!1,null===Nb&&!0===nb.get("logging_enabled")&&Pb(!0));if(Nb){var b=Mb.apply(null,arguments);Nb(b)}}function Qb(a){return function(){K(a,arguments)}}
function Rb(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+Mb.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function Sb(a){var b=Mb.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function L(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+Mb.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
function Ca(a){return fa(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}function Tb(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,10)};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
function Ub(a,b){return a!==b?null===a?-1:null===b?1:typeof a!==typeof b?"number"===typeof a?-1:1:a>b?1:-1:0}function Vb(a,b){if(a===b)return 0;var c=Wb(a),d=Wb(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function Xb(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+u(b));}
function Ka(a){if("object"!==typeof a||null===a)return u(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=u(b[d]),c+=":",c+=Ka(a[b[d]]);return c+"}"}function Yb(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function Zb(a,b){if("array"==da(a))for(var c=0;c<a.length;++c)b(c,a[c]);else $b(a,b)}function ac(a,b){return b?r(a,b):a}
function bc(a){v(!Ca(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;a-=1)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;a-=1)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
(d="0"+d),c+=d;return c.toLowerCase()}function cc(a){var b="Unknown Error";"too_big"===a?b="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==a?b="Client doesn't have permission to access the desired data.":"unavailable"==a&&(b="The service is unavailable");b=Error(a+": "+b);b.code=a.toUpperCase();return b}var dc=/^-?\d{1,10}$/;function Wb(a){return dc.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}
function ec(a){try{a()}catch(b){setTimeout(function(){throw b;},0)}};function fc(a,b){this.F=a;v(null!==this.F,"LeafNode shouldn't be created with null value.");this.gb="undefined"!==typeof b?b:null}h=fc.prototype;h.P=function(){return!0};h.k=function(){return this.gb};h.Ia=function(a){return new fc(this.F,a)};h.O=function(){return M};h.L=function(a){return null===C(a)?this:M};h.ga=function(){return null};h.H=function(a,b){return(new N).H(a,b).Ia(this.gb)};h.Aa=function(a,b){var c=C(a);return null===c?b:this.H(c,M.Aa(La(a),b))};h.f=function(){return!1};h.$b=function(){return 0};
h.V=function(a){return a&&null!==this.k()?{".value":this.j(),".priority":this.k()}:this.j()};h.hash=function(){var a="";null!==this.k()&&(a+="priority:"+gc(this.k())+":");var b=typeof this.F,a=a+(b+":"),a="number"===b?a+bc(this.F):a+this.F;return Lb(a)};h.j=function(){return this.F};h.toString=function(){return"string"===typeof this.F?this.F:'"'+this.F+'"'};function ic(a,b){return Ub(a.ka,b.ka)||Vb(a.name,b.name)}function jc(a,b){return Vb(a.name,b.name)}function kc(a,b){return Vb(a,b)};function N(a,b){this.o=a||new Ta(kc);this.gb="undefined"!==typeof b?b:null}h=N.prototype;h.P=function(){return!1};h.k=function(){return this.gb};h.Ia=function(a){return new N(this.o,a)};h.H=function(a,b){var c=this.o.remove(a);b&&b.f()&&(b=null);null!==b&&(c=c.sa(a,b));return b&&null!==b.k()?new lc(c,null,this.gb):new N(c,this.gb)};h.Aa=function(a,b){var c=C(a);if(null===c)return b;var d=this.O(c).Aa(La(a),b);return this.H(c,d)};h.f=function(){return this.o.f()};h.$b=function(){return this.o.count()};
var mc=/^\d+$/;h=N.prototype;h.V=function(a){if(this.f())return null;var b={},c=0,d=0,e=!0;this.A(function(f,g){b[f]=g.V(a);c++;e&&mc.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],g;for(g in b)f[g]=b[g];return f}a&&null!==this.k()&&(b[".priority"]=this.k());return b};h.hash=function(){var a="";null!==this.k()&&(a+="priority:"+gc(this.k())+":");this.A(function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});return""===a?"":Lb(a)};
h.O=function(a){a=this.o.get(a);return null===a?M:a};h.L=function(a){var b=C(a);return null===b?this:this.O(b).L(La(a))};h.ga=function(a){return Wa(this.o,a)};h.hd=function(){return this.o.xb()};h.kd=function(){return this.o.bb()};h.A=function(a){return this.o.Da(a)};h.Ec=function(a){return this.o.Qa(a)};h.Za=function(){return this.o.Za()};h.toString=function(){var a="{",b=!0;this.A(function(c,d){b?b=!1:a+=", ";a+='"'+c+'" : '+d.toString()});return a+="}"};var M=new N;function lc(a,b,c){N.call(this,a,c);null===b&&(b=new Ta(ic),a.Da(function(a,c){b=b.sa({name:a,ka:c.k()},c)}));this.xa=b}ja(lc,N);h=lc.prototype;h.H=function(a,b){var c=this.O(a),d=this.o,e=this.xa;null!==c&&(d=d.remove(a),e=e.remove({name:a,ka:c.k()}));b&&b.f()&&(b=null);null!==b&&(d=d.sa(a,b),e=e.sa({name:a,ka:b.k()},b));return new lc(d,e,this.k())};h.ga=function(a,b){var c=Wa(this.xa,{name:a,ka:b.k()});return c?c.name:null};h.A=function(a){return this.xa.Da(function(b,c){return a(b.name,c)})};
h.Ec=function(a){return this.xa.Qa(function(b,c){return a(b.name,c)})};h.Za=function(){return this.xa.Za(function(a,b){return{key:a.name,value:b}})};h.hd=function(){return this.xa.f()?null:this.xa.xb().name};h.kd=function(){return this.xa.f()?null:this.xa.bb().name};function O(a,b){if(null===a)return M;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);v(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new fc(a,c);if(a instanceof Array){var d=M,e=a;$b(e,function(a,b){if(A(e,b)&&"."!==b.substring(0,1)){var c=O(a);if(c.P()||!c.f())d=
d.H(b,c)}});return d.Ia(c)}var f=[],g={},k=!1,l=a;Zb(l,function(a,b){if("string"!==typeof b||"."!==b.substring(0,1)){var c=O(l[b]);c.f()||(k=k||null!==c.k(),f.push({name:b,ka:c.k()}),g[b]=c)}});var m=nc(f,g,!1);if(k){var p=nc(f,g,!0);return new lc(m,p,c)}return new N(m,c)}var oc=Math.log(2);function pc(a){this.count=parseInt(Math.log(a+1)/oc,10);this.ed=this.count-1;this.Gd=a+1&parseInt(Array(this.count+1).join("1"),2)}function qc(a){var b=!(a.Gd&1<<a.ed);a.ed--;return b}
function nc(a,b,c){function d(e,f){var l=f-e;if(0==l)return null;if(1==l){var l=a[e].name,m=c?a[e]:l;return new Za(m,b[l],!1,null,null)}var m=parseInt(l/2,10)+e,p=d(e,m),t=d(m+1,f),l=a[m].name,m=c?a[m]:l;return new Za(m,b[l],!1,p,t)}var e=c?ic:jc;a.sort(e);var f=function(e){function f(e,g){var k=p-e,t=p;p-=e;var s=a[k].name,k=new Za(c?a[k]:s,b[s],g,null,d(k+1,t));l?l.left=k:m=k;l=k}for(var l=null,m=null,p=a.length,t=0;t<e.count;++t){var s=qc(e),w=Math.pow(2,e.count-(t+1));s?f(w,!1):(f(w,!1),f(w,!0))}return m}(new pc(a.length)),
e=c?ic:kc;return null!==f?new Ta(e,f):new Ta(e)}function gc(a){return"number"===typeof a?"number:"+bc(a):"string:"+a};function P(a,b){this.B=a;this.kc=b}P.prototype.V=function(){x("Firebase.DataSnapshot.val",0,0,arguments.length);return this.B.V()};P.prototype.val=P.prototype.V;P.prototype.Kd=function(){x("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.B.V(!0)};P.prototype.exportVal=P.prototype.Kd;P.prototype.G=function(a){x("Firebase.DataSnapshot.child",0,1,arguments.length);fa(a)&&(a=String(a));Ha("Firebase.DataSnapshot.child",a);var b=new F(a),c=this.kc.G(b);return new P(this.B.L(b),c)};
P.prototype.child=P.prototype.G;P.prototype.Hc=function(a){x("Firebase.DataSnapshot.hasChild",1,1,arguments.length);Ha("Firebase.DataSnapshot.hasChild",a);var b=new F(a);return!this.B.L(b).f()};P.prototype.hasChild=P.prototype.Hc;P.prototype.k=function(){x("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.B.k()};P.prototype.getPriority=P.prototype.k;
P.prototype.forEach=function(a){x("Firebase.DataSnapshot.forEach",1,1,arguments.length);z("Firebase.DataSnapshot.forEach",1,a,!1);if(this.B.P())return!1;var b=this;return this.B.A(function(c,d){return a(new P(d,b.kc.G(c)))})};P.prototype.forEach=P.prototype.forEach;P.prototype.sb=function(){x("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.B.P()?!1:!this.B.f()};P.prototype.hasChildren=P.prototype.sb;
P.prototype.name=function(){x("Firebase.DataSnapshot.name",0,0,arguments.length);return this.kc.name()};P.prototype.name=P.prototype.name;P.prototype.$b=function(){x("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.B.$b()};P.prototype.numChildren=P.prototype.$b;P.prototype.Uc=function(){x("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.kc};P.prototype.ref=P.prototype.Uc;function rc(a){v("array"==da(a)&&0<a.length,"Requires a non-empty array");this.Fd=a;this.wb={}}rc.prototype.bd=function(a,b){for(var c=this.wb[a]||[],d=0;d<c.length;d++)c[d].ba.apply(c[d].Y,Array.prototype.slice.call(arguments,1))};rc.prototype.fb=function(a,b,c){sc(this,a);this.wb[a]=this.wb[a]||[];this.wb[a].push({ba:b,Y:c});(a=this.jd(a))&&b.apply(c,a)};rc.prototype.yb=function(a,b,c){sc(this,a);a=this.wb[a]||[];for(var d=0;d<a.length;d++)if(a[d].ba===b&&(!c||c===a[d].Y)){a.splice(d,1);break}};
function sc(a,b){v(yb(a.Fd,function(a){return a===b}),"Unknown event: "+b)};function tc(){rc.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.lb=!0;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];b!==c.lb&&(c.lb=b,c.bd("visible",b))},!1)}}ja(tc,rc);ca(tc);tc.prototype.jd=function(a){v("visible"===a,"Unknown event type: "+a);return[this.lb]};function uc(){rc.call(this,["online"]);this.Cb=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener){var a=this;window.addEventListener("online",function(){a.Cb||a.bd("online",!0);a.Cb=!0},!1);window.addEventListener("offline",function(){a.Cb&&a.bd("online",!1);a.Cb=!1},!1)}}ja(uc,rc);ca(uc);uc.prototype.jd=function(a){v("online"===a,"Unknown event type: "+a);return[this.Cb]};function $b(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function vc(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function wc(a){var b={},c;for(c in a)b[c]=a[c];return b};function xc(){this.ob={}}function yc(a,b,c){n(c)||(c=1);A(a.ob,b)||(a.ob[b]=0);a.ob[b]+=c}xc.prototype.get=function(){return wc(this.ob)};function zc(a){this.Hd=a;this.Wb=null}zc.prototype.get=function(){var a=this.Hd.get(),b=wc(a);if(this.Wb)for(var c in this.Wb)b[c]-=this.Wb[c];this.Wb=a;return b};function Ac(a,b){this.Zc={};this.qc=new zc(a);this.u=b;setTimeout(r(this.sd,this),10+6E4*Math.random())}Ac.prototype.sd=function(){var a=this.qc.get(),b={},c=!1,d;for(d in a)0<a[d]&&A(this.Zc,d)&&(b[d]=a[d],c=!0);c&&(a=this.u,a.S&&(b={c:b},a.e("reportStats",b),a.Ga("s",b)));setTimeout(r(this.sd,this),6E5*Math.random())};var Bc={},Cc={};function Dc(a){a=a.toString();Bc[a]||(Bc[a]=new xc);return Bc[a]}function Ec(a,b){var c=a.toString();Cc[c]||(Cc[c]=b());return Cc[c]};var Fc=null;"undefined"!==typeof MozWebSocket?Fc=MozWebSocket:"undefined"!==typeof WebSocket&&(Fc=WebSocket);function Q(a,b,c){this.Ac=a;this.e=Qb(this.Ac);this.frames=this.ub=null;this.ad=0;this.aa=Dc(b);this.Ua=(b.nc?"wss://":"ws://")+b.ha+"/.ws?v=5";b.host!==b.ha&&(this.Ua=this.Ua+"&ns="+b.Yb);c&&(this.Ua=this.Ua+"&s="+c)}var Gc;
Q.prototype.open=function(a,b){this.ja=b;this.Td=a;this.e("Websocket connecting to "+this.Ua);this.W=new Fc(this.Ua);this.pb=!1;mb.set("previous_websocket_failure",!0);var c=this;this.W.onopen=function(){c.e("Websocket connected.");c.pb=!0};this.W.onclose=function(){c.e("Websocket connection was disconnected.");c.W=null;c.Oa()};this.W.onmessage=function(a){if(null!==c.W)if(a=a.data,yc(c.aa,"bytes_received",a.length),Hc(c),null!==c.frames)Ic(c,a);else{a:{v(null===c.frames,"We already have a frame buffer");
if(6>=a.length){var b=Number(a);if(!isNaN(b)){c.ad=b;c.frames=[];a=null;break a}}c.ad=1;c.frames=[]}null!==a&&Ic(c,a)}};this.W.onerror=function(a){c.e("WebSocket error.  Closing connection.");(a=a.message||a.data)&&c.e(a);c.Oa()}};Q.prototype.start=function(){};Q.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==Fc&&!Gc};
Q.responsesRequiredToBeHealthy=2;Q.healthyTimeout=3E4;h=Q.prototype;h.Lc=function(){mb.remove("previous_websocket_failure")};function Ic(a,b){a.frames.push(b);if(a.frames.length==a.ad){var c=a.frames.join("");a.frames=null;c=qa(c);a.Td(c)}}h.send=function(a){Hc(this);a=u(a);yc(this.aa,"bytes_sent",a.length);a=Yb(a,16384);1<a.length&&this.W.send(String(a.length));for(var b=0;b<a.length;b++)this.W.send(a[b])};
h.Mb=function(){this.Ma=!0;this.ub&&(clearInterval(this.ub),this.ub=null);this.W&&(this.W.close(),this.W=null)};h.Oa=function(){this.Ma||(this.e("WebSocket is closing itself"),this.Mb(),this.ja&&(this.ja(this.pb),this.ja=null))};h.close=function(){this.Ma||(this.e("WebSocket is being closed"),this.Mb())};function Hc(a){clearInterval(a.ub);a.ub=setInterval(function(){a.W&&a.W.send("0");Hc(a)},45E3)};function Jc(a){this.Pc=a;this.gc=[];this.Va=0;this.zc=-1;this.Na=null}function Kc(a,b,c){a.zc=b;a.Na=c;a.zc<a.Va&&(a.Na(),a.Na=null)}function Lc(a,b,c){for(a.gc[b]=c;a.gc[a.Va];){var d=a.gc[a.Va];delete a.gc[a.Va];for(var e=0;e<d.length;++e)if(d[e]){var f=a;ec(function(){f.Pc(d[e])})}if(a.Va===a.zc){a.Na&&(clearTimeout(a.Na),a.Na(),a.Na=null);break}a.Va++}};function Mc(){this.set={}}h=Mc.prototype;h.add=function(a,b){this.set[a]=null!==b?b:!0};h.contains=function(a){return A(this.set,a)};h.get=function(a){return this.contains(a)?this.set[a]:void 0};h.remove=function(a){delete this.set[a]};h.f=function(){var a;a:{a=this.set;for(var b in a){a=!1;break a}a=!0}return a};h.count=function(){var a=this.set,b=0,c;for(c in a)b++;return b};function R(a,b){$b(a.set,function(a,d){b(d,a)})}h.keys=function(){var a=[];$b(this.set,function(b,c){a.push(c)});return a};function Nc(a,b,c){this.Ac=a;this.e=Qb(a);this.aa=Dc(b);this.pc=c;this.pb=!1;this.Qb=function(a){b.host!==b.ha&&(a.ns=b.Yb);var c=[],f;for(f in a)a.hasOwnProperty(f)&&c.push(f+"="+a[f]);return(b.nc?"https://":"http://")+b.ha+"/.lp?"+c.join("&")}}var Oc,Pc;
Nc.prototype.open=function(a,b){this.dd=0;this.T=b;this.od=new Jc(a);this.Ma=!1;var c=this;this.Ja=setTimeout(function(){c.e("Timed out trying to connect.");c.Oa();c.Ja=null},3E4);Tb(function(){if(!c.Ma){c.ma=new Qc(function(a,b,d,k,l){yc(c.aa,"bytes_received",u(arguments).length);if(c.ma)if(c.Ja&&(clearTimeout(c.Ja),c.Ja=null),c.pb=!0,"start"==a)c.id=b,c.rd=d;else if("close"===a)b?(c.ma.oc=!1,Kc(c.od,b,function(){c.Oa()})):c.Oa();else throw Error("Unrecognized command received: "+a);},function(a,
b){yc(c.aa,"bytes_received",u(arguments).length);Lc(c.od,a,b)},function(){c.Oa()},c.Qb);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.ma.sc&&(a.cb=c.ma.sc);a.v="5";c.pc&&(a.s=c.pc);a=c.Qb(a);c.e("Connecting via long-poll to "+a);Rc(c.ma,a,function(){})}})};
Nc.prototype.start=function(){var a=this.ma,b=this.rd;a.Rd=this.id;a.Sd=b;for(a.vc=!0;Sc(a););a=this.id;b=this.rd;this.eb=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.eb.src=this.Qb(c);this.eb.style.display="none";document.body.appendChild(this.eb)};Nc.isAvailable=function(){return!Pc&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.he)&&(Oc||!0)};h=Nc.prototype;
h.Lc=function(){};h.Mb=function(){this.Ma=!0;this.ma&&(this.ma.close(),this.ma=null);this.eb&&(document.body.removeChild(this.eb),this.eb=null);this.Ja&&(clearTimeout(this.Ja),this.Ja=null)};h.Oa=function(){this.Ma||(this.e("Longpoll is closing itself"),this.Mb(),this.T&&(this.T(this.pb),this.T=null))};h.close=function(){this.Ma||(this.e("Longpoll is being closed."),this.Mb())};
h.send=function(a){a=u(a);yc(this.aa,"bytes_sent",a.length);a=ra(a);a=Jb(a,!0);a=Yb(a,1840);for(var b=0;b<a.length;b++){var c=this.ma;c.Gb.push({ae:this.dd,fe:a.length,fd:a[b]});c.vc&&Sc(c);this.dd++}};
function Qc(a,b,c,d){this.Qb=d;this.ja=c;this.Rc=new Mc;this.Gb=[];this.Bc=Math.floor(1E8*Math.random());this.oc=!0;this.sc=Kb();window["pLPCommand"+this.sc]=a;window["pRTLPCB"+this.sc]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||K("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
a.contentDocument?a.Ba=a.contentDocument:a.contentWindow?a.Ba=a.contentWindow.document:a.document&&(a.Ba=a.document);this.Z=a;a="";this.Z.src&&"javascript:"===this.Z.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Z.Ba.open(),this.Z.Ba.write(a),this.Z.Ba.close()}catch(f){K("frame writing exception"),f.stack&&K(f.stack),K(f)}}
Qc.prototype.close=function(){this.vc=!1;if(this.Z){this.Z.Ba.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Z&&(document.body.removeChild(a.Z),a.Z=null)},0)}var b=this.ja;b&&(this.ja=null,b())};
function Sc(a){if(a.vc&&a.oc&&a.Rc.count()<(0<a.Gb.length?2:1)){a.Bc++;var b={};b.id=a.Rd;b.pw=a.Sd;b.ser=a.Bc;for(var b=a.Qb(b),c="",d=0;0<a.Gb.length;)if(1870>=a.Gb[0].fd.length+30+c.length){var e=a.Gb.shift(),c=c+"&seg"+d+"="+e.ae+"&ts"+d+"="+e.fe+"&d"+d+"="+e.fd;d++}else break;Vc(a,b+c,a.Bc);return!0}return!1}function Vc(a,b,c){function d(){a.Rc.remove(c);Sc(a)}a.Rc.add(c);var e=setTimeout(d,25E3);Rc(a,b,function(){clearTimeout(e);d()})}
function Rc(a,b,c){setTimeout(function(){try{if(a.oc){var d=a.Z.Ba.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){K("Long-poll script failed to load: "+b);a.oc=!1;a.close()};a.Z.Ba.body.appendChild(d)}}catch(e){}},1)};function Wc(a){Xc(this,a)}var Yc=[Nc,Q];function Xc(a,b){var c=Q&&Q.isAvailable(),d=c&&!(mb.nd||!0===mb.get("previous_websocket_failure"));b.ge&&(c||L("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.Nb=[Q];else{var e=a.Nb=[];Zb(Yc,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function Zc(a){if(0<a.Nb.length)return a.Nb[0];throw Error("No transports available");};function $c(a,b,c,d,e,f){this.id=a;this.e=Qb("c:"+this.id+":");this.Pc=c;this.Bb=d;this.T=e;this.Oc=f;this.N=b;this.fc=[];this.cd=0;this.Ad=new Wc(b);this.na=0;this.e("Connection created");ad(this)}
function ad(a){var b=Zc(a.Ad);a.K=new b("c:"+a.id+":"+a.cd++,a.N);a.Tc=b.responsesRequiredToBeHealthy||0;var c=bd(a,a.K),d=cd(a,a.K);a.Ob=a.K;a.Lb=a.K;a.w=null;a.ab=!1;setTimeout(function(){a.K&&a.K.open(c,d)},0);b=b.healthyTimeout||0;0<b&&(a.Vb=setTimeout(function(){a.Vb=null;a.ab||(a.e("Closing unhealthy connection after timeout."),a.close())},b))}
function cd(a,b){return function(c){b===a.K?(a.K=null,c||0!==a.na?1===a.na&&a.e("Realtime connection lost."):(a.e("Realtime connection failed."),"s-"===a.N.ha.substr(0,2)&&(mb.remove("host:"+a.N.host),a.N.ha=a.N.host)),a.close()):b===a.w?(a.e("Secondary connection lost."),c=a.w,a.w=null,a.Ob!==c&&a.Lb!==c||a.close()):a.e("closing an old connection")}}
function bd(a,b){return function(c){if(2!=a.na)if(b===a.Lb){var d=Xb("t",c);c=Xb("d",c);if("c"==d){if(d=Xb("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.pc=c.s;pb(a.N,f);0==a.na&&(a.K.start(),dd(a,a.K,d),"5"!==e&&L("Protocol version mismatch detected"),c=a.Ad,(c=1<c.Nb.length?c.Nb[1]:null)&&ed(a,c))}else if("n"===d){a.e("recvd end transmission on primary");a.Lb=a.w;for(c=0;c<a.fc.length;++c)a.cc(a.fc[c]);a.fc=[];fd(a)}else"s"===d?(a.e("Connection shutdown command received. Shutting down..."),
a.Oc&&(a.Oc(c),a.Oc=null),a.T=null,a.close()):"r"===d?(a.e("Reset packet received.  New host: "+c),pb(a.N,c),1===a.na?a.close():(gd(a),ad(a))):"e"===d?Rb("Server Error: "+c):"o"===d?(a.e("got pong on primary."),hd(a),id(a)):Rb("Unknown control packet command: "+d)}else"d"==d&&a.cc(c)}else if(b===a.w)if(d=Xb("t",c),c=Xb("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?jd(a):"r"===c?(a.e("Got a reset on secondary, closing it"),a.w.close(),a.Ob!==a.w&&a.Lb!==a.w||a.close()):"o"===c&&(a.e("got pong on secondary."),
a.wd--,jd(a)));else if("d"==d)a.fc.push(c);else throw Error("Unknown protocol layer: "+d);else a.e("message on old connection")}}$c.prototype.xd=function(a){kd(this,{t:"d",d:a})};function fd(a){a.Ob===a.w&&a.Lb===a.w&&(a.e("cleaning up and promoting a connection: "+a.w.Ac),a.K=a.w,a.w=null)}
function jd(a){0>=a.wd?(a.e("Secondary connection is healthy."),a.ab=!0,a.w.Lc(),a.w.start(),a.e("sending client ack on secondary"),a.w.send({t:"c",d:{t:"a",d:{}}}),a.e("Ending transmission on primary"),a.K.send({t:"c",d:{t:"n",d:{}}}),a.Ob=a.w,fd(a)):(a.e("sending ping on secondary."),a.w.send({t:"c",d:{t:"p",d:{}}}))}$c.prototype.cc=function(a){hd(this);this.Pc(a)};function hd(a){a.ab||(a.Tc--,0>=a.Tc&&(a.e("Primary connection is healthy."),a.ab=!0,a.K.Lc()))}
function ed(a,b){a.w=new b("c:"+a.id+":"+a.cd++,a.N,a.pc);a.wd=b.responsesRequiredToBeHealthy||0;a.w.open(bd(a,a.w),cd(a,a.w));setTimeout(function(){a.w&&(a.e("Timed out trying to upgrade."),a.w.close())},6E4)}function dd(a,b,c){a.e("Realtime connection established.");a.K=b;a.na=1;a.Bb&&(a.Bb(c),a.Bb=null);0===a.Tc?(a.e("Primary connection is healthy."),a.ab=!0):setTimeout(function(){id(a)},5E3)}function id(a){a.ab||1!==a.na||(a.e("sending ping on primary."),kd(a,{t:"c",d:{t:"p",d:{}}}))}
function kd(a,b){if(1!==a.na)throw"Connection is not connected";a.Ob.send(b)}$c.prototype.close=function(){2!==this.na&&(this.e("Closing realtime connection."),this.na=2,gd(this),this.T&&(this.T(),this.T=null))};function gd(a){a.e("Shutting down all connections");a.K&&(a.K.close(),a.K=null);a.w&&(a.w.close(),a.w=null);a.Vb&&(clearTimeout(a.Vb),a.Vb=null)};function ld(a,b,c,d,e,f){this.id=md++;this.e=Qb("p:"+this.id+":");this.Ra=!0;this.ia={};this.U=[];this.Db=0;this.Ab=[];this.S=!1;this.ua=1E3;this.Xb=3E5;this.dc=b||ba;this.bc=c||ba;this.zb=d||ba;this.Qc=e||ba;this.Gc=f||ba;this.N=a;this.Vc=null;this.Kb={};this.$d=0;this.vb=this.Kc=null;nd(this,0);tc.rb().fb("visible",this.Vd,this);-1===a.host.indexOf("fblocal")&&uc.rb().fb("online",this.Ud,this)}var md=0,od=0;h=ld.prototype;
h.Ga=function(a,b,c){var d=++this.$d;a={r:d,a:a,b:b};this.e(u(a));v(this.S,"sendRequest_ call when we're not connected not allowed.");this.la.xd(a);c&&(this.Kb[d]=c)};function pd(a,b,c){var d=b.toString(),e=b.path().toString();a.ia[e]=a.ia[e]||{};v(!a.ia[e][d],"listen() called twice for same path/queryId.");a.ia[e][d]={hb:b.hb(),D:c};a.S&&qd(a,e,d,b.hb(),c)}
function qd(a,b,c,d,e){a.e("Listen on "+b+" for "+c);var f={p:b};d=vb(d,function(a){return Ja(a)});"{}"!==c&&(f.q=d);f.h=a.Gc(b);a.Ga("l",f,function(d){a.e("listen response",d);d=d.s;"ok"!==d&&rd(a,b,c);e&&e(d)})}
h.mb=function(a,b,c){this.Ka={Id:a,gd:!1,ba:b,Sb:c};this.e("Authenticating using credential: "+this.Ka);sd(this);if(!(b=40==a.length))a:{var d;try{var e=a.split(".");if(3!==e.length){b=!1;break a}var f;b:{try{if("undefined"!==typeof atob){f=atob(e[1]);break b}}catch(g){K("base64DecodeIfNativeSupport failed: ",g)}f=null}null!==f&&(d=qa(f))}catch(k){K("isAdminAuthToken_ failed",k)}b="object"===typeof d&&!0===va(d,"admin")}b&&(this.e("Admin auth credential detected.  Reducing max reconnect time."),this.Xb=
3E4)};h.Pb=function(a){delete this.Ka;this.zb(!1);this.S&&this.Ga("unauth",{},function(b){a(b.s,b.d)})};function sd(a){var b=a.Ka;a.S&&b&&a.Ga("auth",{cred:b.Id},function(c){var d=c.s;c=c.d||"error";"ok"!==d&&a.Ka===b&&delete a.Ka;a.zb("ok"===d);b.gd?"ok"!==d&&b.Sb&&b.Sb(d,c):(b.gd=!0,b.ba&&b.ba(d,c))})}function td(a,b,c,d){b=b.toString();rd(a,b,c)&&a.S&&ud(a,b,c,d)}function ud(a,b,c,d){a.e("Unlisten on "+b+" for "+c);b={p:b};d=vb(d,function(a){return Ja(a)});"{}"!==c&&(b.q=d);a.Ga("u",b)}
function vd(a,b,c,d){a.S?wd(a,"o",b,c,d):a.Ab.push({Sc:b,action:"o",data:c,D:d})}function xd(a,b,c,d){a.S?wd(a,"om",b,c,d):a.Ab.push({Sc:b,action:"om",data:c,D:d})}h.Nc=function(a,b){this.S?wd(this,"oc",a,null,b):this.Ab.push({Sc:a,action:"oc",data:null,D:b})};function wd(a,b,c,d,e){c={p:c,d:d};a.e("onDisconnect "+b,c);a.Ga(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},0)})}h.put=function(a,b,c,d){yd(this,"p",a,b,c,d)};function zd(a,b,c,d){yd(a,"m",b,c,d,void 0)}
function yd(a,b,c,d,e,f){c={p:c,d:d};n(f)&&(c.h=f);a.U.push({action:b,td:c,D:e});a.Db++;b=a.U.length-1;a.S&&Ad(a,b)}function Ad(a,b){var c=a.U[b].action,d=a.U[b].td,e=a.U[b].D;a.U[b].Xd=a.S;a.Ga(c,d,function(d){a.e(c+" response",d);delete a.U[b];a.Db--;0===a.Db&&(a.U=[]);e&&e(d.s,d.d)})}
h.cc=function(a){if("r"in a){this.e("from server: "+u(a));var b=a.r,c=this.Kb[b];c&&(delete this.Kb[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,c=a.b,this.e("handleServerMessage",b,c),"d"===b?this.dc(c.p,c.d,!1):"m"===b?this.dc(c.p,c.d,!0):"c"===b?Bd(this,c.p,c.q):"ac"===b?(a=c.s,b=c.d,c=this.Ka,delete this.Ka,c&&c.Sb&&c.Sb(a,b),this.zb(!1)):"sd"===b?this.Vc?this.Vc(c):"msg"in c&&"undefined"!==typeof console&&console.log("FIREBASE: "+c.msg.replace("\n",
"\nFIREBASE: ")):Rb("Unrecognized action received from server: "+u(b)+"\nAre you using the latest client?"))}};h.Bb=function(a){this.e("connection ready");this.S=!0;this.vb=(new Date).getTime();this.Qc({serverTimeOffset:a-(new Date).getTime()});sd(this);for(var b in this.ia)for(var c in this.ia[b])a=this.ia[b][c],qd(this,b,c,a.hb,a.D);for(b=0;b<this.U.length;b++)this.U[b]&&Ad(this,b);for(;this.Ab.length;)b=this.Ab.shift(),wd(this,b.action,b.Sc,b.data,b.D);this.bc(!0)};
function nd(a,b){v(!a.la,"Scheduling a connect when we're already connected/ing?");a.Xa&&clearTimeout(a.Xa);a.Xa=setTimeout(function(){a.Xa=null;Cd(a)},b)}h.Vd=function(a){a&&!this.lb&&this.ua===this.Xb&&(this.e("Window became visible.  Reducing delay."),this.ua=1E3,this.la||nd(this,0));this.lb=a};h.Ud=function(a){a?(this.e("Browser went online.  Reconnecting."),this.ua=1E3,this.Ra=!0,this.la||nd(this,0)):(this.e("Browser went offline.  Killing connection; don't reconnect."),this.Ra=!1,this.la&&this.la.close())};
h.pd=function(){this.e("data client disconnected");this.S=!1;this.la=null;for(var a=0;a<this.U.length;a++){var b=this.U[a];b&&"h"in b.td&&b.Xd&&(b.D&&b.D("disconnect"),delete this.U[a],this.Db--)}0===this.Db&&(this.U=[]);if(this.Ra)this.lb?this.vb&&(3E4<(new Date).getTime()-this.vb&&(this.ua=1E3),this.vb=null):(this.e("Window isn't visible.  Delaying reconnect."),this.ua=this.Xb,this.Kc=(new Date).getTime()),a=Math.max(0,this.ua-((new Date).getTime()-this.Kc)),a*=Math.random(),this.e("Trying to reconnect in "+
a+"ms"),nd(this,a),this.ua=Math.min(this.Xb,1.3*this.ua);else for(var c in this.Kb)delete this.Kb[c];this.bc(!1)};function Cd(a){if(a.Ra){a.e("Making a connection attempt");a.Kc=(new Date).getTime();a.vb=null;var b=r(a.cc,a),c=r(a.Bb,a),d=r(a.pd,a),e=a.id+":"+od++;a.la=new $c(e,a.N,b,c,d,function(b){L(b+" ("+a.N.toString()+")");a.Ra=!1})}}h.La=function(){this.Ra=!1;this.la?this.la.close():(this.Xa&&(clearTimeout(this.Xa),this.Xa=null),this.S&&this.pd())};
h.jb=function(){this.Ra=!0;this.ua=1E3;this.S||nd(this,0)};function Bd(a,b,c){c=c?vb(c,function(a){return Ka(a)}).join("$"):"{}";(a=rd(a,b,c))&&a.D&&a.D("permission_denied")}function rd(a,b,c){b=(new F(b)).toString();c||(c="{}");var d=a.ia[b][c];delete a.ia[b][c];return d};function Dd(){this.o=this.F=null}function Ed(a,b,c){if(b.f())a.F=c,a.o=null;else if(null!==a.F)a.F=a.F.Aa(b,c);else{null==a.o&&(a.o=new Mc);var d=C(b);a.o.contains(d)||a.o.add(d,new Dd);a=a.o.get(d);b=La(b);Ed(a,b,c)}}function Fd(a,b){if(b.f())return a.F=null,a.o=null,!0;if(null!==a.F){if(a.F.P())return!1;var c=a.F;a.F=null;c.A(function(b,c){Ed(a,new F(b),c)});return Fd(a,b)}return null!==a.o?(c=C(b),b=La(b),a.o.contains(c)&&Fd(a.o.get(c),b)&&a.o.remove(c),a.o.f()?(a.o=null,!0):!1):!0}
function Gd(a,b,c){null!==a.F?c(b,a.F):a.A(function(a,e){var f=new F(b.toString()+"/"+a);Gd(e,f,c)})}Dd.prototype.A=function(a){null!==this.o&&R(this.o,function(b,c){a(b,c)})};function Hd(){this.$=M}function S(a,b){return a.$.L(b)}function T(a,b,c){a.$=a.$.Aa(b,c)}Hd.prototype.toString=function(){return this.$.toString()};function Id(){this.va=new Hd;this.M=new Hd;this.pa=new Hd;this.Fb=new Pa}function Jd(a,b,c){T(a.va,b,c);return Kd(a,b)}function Kd(a,b){for(var c=S(a.va,b),d=S(a.M,b),e=I(a.Fb,b),f=!1,g=e;null!==g;){if(null!==g.j()){f=!0;break}g=g.parent()}if(f)return!1;c=Ld(c,d,e);return c!==d?(T(a.M,b,c),!0):!1}function Ld(a,b,c){if(c.f())return a;if(null!==c.j())return b;a=a||M;c.A(function(d){d=d.name();var e=a.O(d),f=b.O(d),g=I(c,d),e=Ld(e,f,g);a=a.H(d,e)});return a}
Id.prototype.set=function(a,b){var c=this,d=[];ub(b,function(a){var b=a.path;a=a.ta;var g=Kb();J(I(c.Fb,b),g);T(c.M,b,a);d.push({path:b,be:g})});return d};function Md(a,b){ub(b,function(b){var d=b.be;b=I(a.Fb,b.path);var e=b.j();v(null!==e,"pendingPut should not be null.");e===d&&J(b,null)})};function Nd(a,b){return a&&"object"===typeof a?(v(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function Od(a,b){var c=new Dd;Gd(a,new F(""),function(a,e){Ed(c,a,Pd(e,b))});return c}function Pd(a,b){var c=Nd(a.k(),b),d;if(a.P()){var e=Nd(a.j(),b);return e!==a.j()||c!==a.k()?new fc(e,c):a}d=a;c!==a.k()&&(d=d.Ia(c));a.A(function(a,c){var e=Pd(c,b);e!==c&&(d=d.H(a,e))});return d};function Qd(){this.Ya=[]}function Rd(a,b){if(0!==b.length)for(var c=0;c<b.length;c++)a.Ya.push(b[c])}Qd.prototype.Ib=function(){for(var a=0;a<this.Ya.length;a++)if(this.Ya[a]){var b=this.Ya[a];this.Ya[a]=null;Sd(b)}this.Ya=[]};function Sd(a){var b=a.ba,c=a.yd,d=a.Hb;ec(function(){b(c,d)})};function U(a,b,c,d){this.type=a;this.wa=b;this.ca=c;this.Hb=d};function Td(a){this.R=a;this.ra=[];this.Dc=new Qd}function Ud(a,b,c,d,e){a.ra.push({type:b,ba:c,cancel:d,Y:e});d=[];var f=Vd(a.i);a.tb&&f.push(new U("value",a.i));for(var g=0;g<f.length;g++)if(f[g].type===b){var k=new E(a.R.m,a.R.path);f[g].ca&&(k=k.G(f[g].ca));d.push({ba:ac(c,e),yd:new P(f[g].wa,k),Hb:f[g].Hb})}Rd(a.Dc,d)}Td.prototype.ic=function(a,b){b=this.jc(a,b);null!=b&&Wd(this,b)};
function Wd(a,b){for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e.type,g=new E(a.R.m,a.R.path);b[d].ca&&(g=g.G(b[d].ca));g=new P(b[d].wa,g);"value"!==e.type||g.sb()?"value"!==e.type&&(f+=" "+g.name()):f+="("+g.V()+")";K(a.R.m.u.id+": event:"+a.R.path+":"+a.R.Pa()+":"+f);for(f=0;f<a.ra.length;f++){var k=a.ra[f];b[d].type===k.type&&c.push({ba:ac(k.ba,k.Y),yd:g,Hb:e.Hb})}}Rd(a.Dc,c)}Td.prototype.Ib=function(){this.Dc.Ib()};
function Vd(a){var b=[];if(!a.P()){var c=null;a.A(function(a,e){b.push(new U("child_added",e,a,c));c=a})}return b}function Xd(a){a.tb||(a.tb=!0,Wd(a,[new U("value",a.i)]))};function Yd(a,b){Td.call(this,a);this.i=b}ja(Yd,Td);Yd.prototype.jc=function(a,b){this.i=a;this.tb&&null!=b&&b.push(new U("value",this.i));return b};Yd.prototype.qb=function(){return{}};function Zd(a,b){this.Tb=a;this.Mc=b}function $d(a,b,c,d,e){var f=a.L(c),g=b.L(c);d=new Zd(d,e);e=ae(d,c,f,g);g=!f.f()&&!g.f()&&f.k()!==g.k();if(e||g)for(f=c,c=e;null!==f.parent();){var k=a.L(f);e=b.L(f);var l=f.parent();if(!d.Tb||I(d.Tb,l).j()){var m=b.L(l),p=[],f=Ma(f);k.f()?(k=m.ga(f,e),p.push(new U("child_added",e,f,k))):e.f()?p.push(new U("child_removed",k,f)):(k=m.ga(f,e),g&&p.push(new U("child_moved",e,f,k)),c&&p.push(new U("child_changed",e,f,k)));d.Mc(l,m,p)}g&&(g=!1,c=!0);f=l}}
function ae(a,b,c,d){var e,f=[];c===d?e=!1:c.P()&&d.P()?e=c.j()!==d.j():c.P()?(be(a,b,M,d,f),e=!0):d.P()?(be(a,b,c,M,f),e=!0):e=be(a,b,c,d,f);e?a.Mc(b,d,f):c.k()!==d.k()&&a.Mc(b,d,null);return e}
function be(a,b,c,d,e){var f=!1,g=!a.Tb||!I(a.Tb,b).f(),k=[],l=[],m=[],p=[],t={},s={},w,V,G,H;w=c.Za();G=Ya(w);V=d.Za();for(H=Ya(V);null!==G||null!==H;){c=H;c=null===G?1:null===c?-1:G.key===c.key?0:ic({name:G.key,ka:G.value.k()},{name:c.key,ka:c.value.k()});if(0>c)f=va(t,G.key),n(f)?(m.push({Fc:G,$c:k[f]}),k[f]=null):(s[G.key]=l.length,l.push(G)),f=!0,G=Ya(w);else{if(0<c)f=va(s,H.key),n(f)?(m.push({Fc:l[f],$c:H}),l[f]=null):(t[H.key]=k.length,k.push(H)),f=!0;else{c=b.G(H.key);if(c=ae(a,c,G.value,
H.value))p.push(H),f=!0;G.value.k()!==H.value.k()&&(m.push({Fc:G,$c:H}),f=!0);G=Ya(w)}H=Ya(V)}if(!g&&f)return!0}for(g=0;g<l.length;g++)if(t=l[g])c=b.G(t.key),ae(a,c,t.value,M),e.push(new U("child_removed",t.value,t.key));for(g=0;g<k.length;g++)if(t=k[g])c=b.G(t.key),l=d.ga(t.key,t.value),ae(a,c,M,t.value),e.push(new U("child_added",t.value,t.key,l));for(g=0;g<m.length;g++)t=m[g].Fc,k=m[g].$c,c=b.G(k.key),l=d.ga(k.key,k.value),e.push(new U("child_moved",k.value,k.key,l)),(c=ae(a,c,t.value,k.value))&&
p.push(k);for(g=0;g<p.length;g++)a=p[g],l=d.ga(a.key,a.value),e.push(new U("child_changed",a.value,a.key,l));return f};function ce(){this.X=this.za=null;this.set={}}ja(ce,Mc);h=ce.prototype;h.setActive=function(a){this.za=a};function de(a,b,c){a.add(b,c);a.X||(a.X=c.R.path)}function ee(a){var b=a.za;a.za=null;return b}function fe(a){return a.contains("default")}function ge(a){return null!=a.za&&fe(a)}h.defaultView=function(){return fe(this)?this.get("default"):null};h.path=function(){return this.X};h.toString=function(){return vb(this.keys(),function(a){return"default"===a?"{}":a}).join("$")};
h.hb=function(){var a=[];R(this,function(b,c){a.push(c.R)});return a};function he(a,b){Td.call(this,a);this.i=M;this.jc(b,Vd(b))}ja(he,Td);
he.prototype.jc=function(a,b){if(null===b)return b;var c=[],d=this.R;n(d.fa)&&(n(d.ya)&&null!=d.ya?c.push(function(a,b){var c=Ub(b,d.fa);return 0<c||0===c&&0<=Vb(a,d.ya)}):c.push(function(a,b){return 0<=Ub(b,d.fa)}));n(d.Ca)&&(n(d.Wa)?c.push(function(a,b){var c=Ub(b,d.Ca);return 0>c||0===c&&0>=Vb(a,d.Wa)}):c.push(function(a,b){return 0>=Ub(b,d.Ca)}));var e=null,f=null;if(n(this.R.Ea))if(n(this.R.fa)){if(e=ie(a,c,this.R.Ea,!1)){var g=a.O(e).k();c.push(function(a,b){var c=Ub(b,g);return 0>c||0===c&&
0>=Vb(a,e)})}}else if(f=ie(a,c,this.R.Ea,!0)){var k=a.O(f).k();c.push(function(a,b){var c=Ub(b,k);return 0<c||0===c&&0<=Vb(a,f)})}for(var l=[],m=[],p=[],t=[],s=0;s<b.length;s++){var w=b[s].ca,V=b[s].wa;switch(b[s].type){case "child_added":je(c,w,V)&&(this.i=this.i.H(w,V),m.push(b[s]));break;case "child_removed":this.i.O(w).f()||(this.i=this.i.H(w,null),l.push(b[s]));break;case "child_changed":!this.i.O(w).f()&&je(c,w,V)&&(this.i=this.i.H(w,V),t.push(b[s]));break;case "child_moved":var G=!this.i.O(w).f(),
H=je(c,w,V);G?H?(this.i=this.i.H(w,V),p.push(b[s])):(l.push(new U("child_removed",this.i.O(w),w)),this.i=this.i.H(w,null)):H&&(this.i=this.i.H(w,V),m.push(b[s]))}}var Tc=e||f;if(Tc){var Uc=(s=null!==f)?this.i.hd():this.i.kd(),hc=!1,$a=!1,ab=this;(s?a.Ec:a.A).call(a,function(a,b){$a||null!==Uc||($a=!0);if($a&&hc)return!0;hc?(l.push(new U("child_removed",ab.i.O(a),a)),ab.i=ab.i.H(a,null)):$a&&(m.push(new U("child_added",b,a)),ab.i=ab.i.H(a,b));Uc===a&&($a=!0);a===Tc&&(hc=!0)})}for(s=0;s<m.length;s++)c=
m[s],w=this.i.ga(c.ca,c.wa),l.push(new U("child_added",c.wa,c.ca,w));for(s=0;s<p.length;s++)c=p[s],w=this.i.ga(c.ca,c.wa),l.push(new U("child_moved",c.wa,c.ca,w));for(s=0;s<t.length;s++)c=t[s],w=this.i.ga(c.ca,c.wa),l.push(new U("child_changed",c.wa,c.ca,w));this.tb&&0<l.length&&l.push(new U("value",this.i));return l};function ie(a,b,c,d){if(a.P())return null;var e=null;(d?a.Ec:a.A).call(a,function(a,d){if(je(b,a,d)&&(e=a,c--,0===c))return!0});return e}
function je(a,b,c){for(var d=0;d<a.length;d++)if(!a[d](b,c.k()))return!1;return!0}he.prototype.Hc=function(a){return this.i.O(a)!==M};
he.prototype.qb=function(a,b,c){var d={};this.i.P()||this.i.A(function(a){d[a]=3});var e=this.i;c=S(c,new F(""));var f=new Pa;J(I(f,this.R.path),!0);b=M.Aa(a,b);var g=this;$d(c,b,a,f,function(a,b,c){null!==c&&a.toString()===g.R.path.toString()&&g.jc(b,c)});this.i.P()?$b(d,function(a,b){d[b]=2}):(this.i.A(function(a){A(d,a)||(d[a]=1)}),$b(d,function(a,b){g.i.O(b).f()&&(d[b]=2)}));this.i=e;return d};function ke(a,b){this.u=a;this.g=b;this.ac=b.$;this.oa=new Pa}ke.prototype.Rb=function(a,b,c,d,e){var f=a.path,g=I(this.oa,f),k=g.j();null===k?(k=new ce,J(g,k)):v(!k.f(),"We shouldn't be storing empty QueryMaps");var l=a.Pa();if(k.contains(l))a=k.get(l),Ud(a,b,c,d,e);else{var m=this.g.$.L(f);a=le(a,m);me(this,g,k,l,a);Ud(a,b,c,d,e);(b=(b=Sa(I(this.oa,f),function(a){var b;if(b=a.j()&&a.j().defaultView())b=a.j().defaultView().tb;if(b)return!0},!0))||null===this.u&&!S(this.g,f).f())&&Xd(a)}a.Ib()};
function ne(a,b,c,d,e){var f=a.get(b),g;if(g=f){g=!1;for(var k=f.ra.length-1;0<=k;k--){var l=f.ra[k];if(!(c&&l.type!==c||d&&l.ba!==d||e&&l.Y!==e)&&(f.ra.splice(k,1),g=!0,c&&d))break}}(c=g&&!(0<f.ra.length))&&a.remove(b);return c}function oe(a,b,c,d,e){b=b?b.Pa():null;var f=[];b&&"default"!==b?ne(a,b,c,d,e)&&f.push(b):ub(a.keys(),function(b){ne(a,b,c,d,e)&&f.push(b)});return f}ke.prototype.lc=function(a,b,c,d){var e=I(this.oa,a.path).j();return null===e?null:pe(this,e,a,b,c,d)};
function pe(a,b,c,d,e,f){var g=b.path(),g=I(a.oa,g);c=oe(b,c,d,e,f);b.f()&&J(g,null);d=qe(g);if(0<c.length&&!d){d=g;e=g.parent();for(c=!1;!c&&e;){if(f=e.j()){v(!ge(f));var k=d.name(),l=!1;R(f,function(a,b){l=b.Hc(k)||l});l&&(c=!0)}d=e;e=e.parent()}d=null;ge(b)||(b=ee(b),d=re(a,g),b&&b());return c?null:d}return null}function se(a,b,c){Ra(I(a.oa,b),function(a){(a=a.j())&&R(a,function(a,b){Xd(b)})},c,!0)}
function W(a,b,c){function d(a){do{if(g[a.toString()])return!0;a=a.parent()}while(null!==a);return!1}var e=a.ac,f=a.g.$;a.ac=f;for(var g={},k=0;k<c.length;k++)g[c[k].toString()]=!0;$d(e,f,b,a.oa,function(c,e,f){if(b.contains(c)){var g=d(c);g&&se(a,c,!1);a.ic(c,e,f);g&&se(a,c,!0)}else a.ic(c,e,f)});d(b)&&se(a,b,!0);te(a,b)}function te(a,b){var c=I(a.oa,b);Ra(c,function(a){(a=a.j())&&R(a,function(a,b){b.Ib()})},!0,!0);Sa(c,function(a){(a=a.j())&&R(a,function(a,b){b.Ib()})},!1)}
ke.prototype.ic=function(a,b,c){a=I(this.oa,a).j();null!==a&&R(a,function(a,e){e.ic(b,c)})};function qe(a){return Sa(a,function(a){return a.j()&&ge(a.j())})}function me(a,b,c,d,e){if(ge(c)||qe(b))de(c,d,e);else{var f,g;c.f()||(f=c.toString(),g=c.hb());de(c,d,e);c.setActive(ue(a,c));f&&g&&td(a.u,c.path(),f,g)}ge(c)&&Ra(b,function(a){if(a=a.j())a.za&&a.za(),a.za=null})}
function re(a,b){function c(b){var f=b.j();if(f&&fe(f))d.push(f.path()),null==f.za&&f.setActive(ue(a,f));else{if(f){null!=f.za||f.setActive(ue(a,f));var g={};R(f,function(a,b){b.i.A(function(a){A(g,a)||(g[a]=!0,a=f.path().G(a),d.push(a))})})}b.A(c)}}var d=[];c(b);return d}
function ue(a,b){if(a.u){var c=a.u,d=b.path(),e=b.toString(),f=b.hb(),g,k=b.keys(),l=fe(b);pd(a.u,b,function(c){"ok"!==c?(c=cc(c),L("on() or once() for "+b.path().toString()+" failed: "+c.toString()),ve(a,b,c)):g||(l?se(a,b.path(),!0):ub(k,function(a){(a=b.get(a))&&Xd(a)}),te(a,b.path()))});return function(){g=!0;td(c,d,e,f)}}return ba}function ve(a,b,c){b&&(R(b,function(a,b){for(var f=0;f<b.ra.length;f++){var g=b.ra[f];g.cancel&&ac(g.cancel,g.Y)(c)}}),pe(a,b))}
function le(a,b){return"default"===a.Pa()?new Yd(a,b):new he(a,b)}ke.prototype.qb=function(a,b,c,d){function e(a){$b(a,function(a,b){f[b]=3===a?3:(va(f,b)||a)===a?a:3})}var f={};R(b,function(b,f){e(f.qb(a,c,d))});c.P()||c.A(function(a){A(f,a)||(f[a]=4)});return f};function we(a,b,c,d,e){var f=b.path();b=a.qb(f,b,d,e);var g=M,k=[];$b(b,function(b,m){var p=new F(m);3===b||1===b?g=g.H(m,d.L(p)):(2===b&&k.push({path:f.G(m),ta:M}),k=k.concat(xe(a,d.L(p),I(c,p),e)))});return[{path:f,ta:g}].concat(k)}
function ye(a,b,c,d){var e;a:{var f=I(a.oa,b);e=f.parent();for(var g=[];null!==e;){var k=e.j();if(null!==k){if(fe(k)){e=[{path:b,ta:c}];break a}k=a.qb(b,k,c,d);f=va(k,f.name());if(3===f||1===f){e=[{path:b,ta:c}];break a}2===f&&g.push({path:b,ta:M})}f=e;e=e.parent()}e=g}if(1==e.length&&(!e[0].ta.f()||c.f()))return e;g=I(a.oa,b);f=g.j();null!==f?fe(f)?e.push({path:b,ta:c}):e=e.concat(we(a,f,g,c,d)):e=e.concat(xe(a,c,g,d));return e}
function xe(a,b,c,d){var e=c.j();if(null!==e)return fe(e)?[{path:c.path(),ta:b}]:we(a,e,c,b,d);var f=[];c.A(function(c){var e=b.P()?M:b.O(c.name());c=xe(a,e,c,d);f=f.concat(c)});return f};function ze(a){this.N=a;this.aa=Dc(a);this.u=new ld(this.N,r(this.dc,this),r(this.bc,this),r(this.zb,this),r(this.Qc,this),r(this.Gc,this));this.zd=Ec(a,r(function(){return new Ac(this.aa,this.u)},this));this.Sa=new Pa;this.Ha=new Hd;this.g=new Id;this.I=new ke(this.u,this.g.pa);this.Ic=new Hd;this.Jc=new ke(null,this.Ic);Ae(this,"connected",!1);Ae(this,"authenticated",!1);this.T=new Dd;this.Cc=0}h=ze.prototype;h.toString=function(){return(this.N.nc?"https://":"http://")+this.N.host};h.name=function(){return this.N.Yb};
function Be(a){a=S(a.Ic,new F(".info/serverTimeOffset")).V()||0;return(new Date).getTime()+a}function Ce(a){a=a={timestamp:Be(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
h.dc=function(a,b,c){this.Cc++;this.md&&(b=this.md(a,b));var d,e,f=[];9<=a.length&&a.lastIndexOf(".priority")===a.length-9?(d=new F(a.substring(0,a.length-9)),e=S(this.g.va,d).Ia(b),f.push(d)):c?(d=new F(a),e=S(this.g.va,d),$b(b,function(a,b){var c=new F(b);".priority"===b?e=e.Ia(a):(e=e.Aa(c,O(a)),f.push(d.G(b)))})):(d=new F(a),e=O(b),f.push(d));a=ye(this.I,d,e,this.g.M);b=!1;for(c=0;c<a.length;++c){var g=a[c];b=Jd(this.g,g.path,g.ta)||b}b&&(d=De(this,d));W(this.I,d,f)};
h.bc=function(a){Ae(this,"connected",a);!1===a&&Ee(this)};h.Qc=function(a){var b=this;Zb(a,function(a,d){Ae(b,d,a)})};h.Gc=function(a){a=new F(a);return S(this.g.va,a).hash()};h.zb=function(a){Ae(this,"authenticated",a)};function Ae(a,b,c){b=new F("/.info/"+b);T(a.Ic,b,O(c));W(a.Jc,b,[b])}
h.mb=function(a,b,c){"firebaseio-demo.com"===this.N.domain&&L("FirebaseRef.auth() not supported on demo (*.firebaseio-demo.com) Firebases. Please use on production (*.firebaseio.com) Firebases only.");this.u.mb(a,function(a,c){X(b,a,c)},function(a,b){L("auth() was canceled: "+b);if(c){var f=Error(b);f.code=a.toUpperCase();c(f)}})};h.Pb=function(a){this.u.Pb(function(b,c){X(a,b,c)})};
h.kb=function(a,b,c,d){this.e("set",{path:a.toString(),value:b,ka:c});var e=Ce(this);b=O(b,c);var e=Pd(b,e),e=ye(this.I,a,e,this.g.M),f=this.g.set(a,e),g=this;this.u.put(a.toString(),b.V(!0),function(b,c){"ok"!==b&&L("set at "+a+" failed: "+b);Md(g.g,f);Kd(g.g,a);var e=De(g,a);W(g.I,e,[]);X(d,b,c)});e=Fe(this,a);De(this,e);W(this.I,e,[a])};
h.update=function(a,b,c){this.e("update",{path:a.toString(),value:b});var d=S(this.g.pa,a),e=!0,f=[],g=Ce(this),k=[],l;for(l in b){var e=!1,m=O(b[l]),m=Pd(m,g),d=d.H(l,m),p=a.G(l);f.push(p);m=ye(this.I,p,m,this.g.M);k=k.concat(this.g.set(a,m))}if(e)K("update() called with empty data.  Don't do anything."),X(c,"ok");else{var t=this;zd(this.u,a.toString(),b,function(b,d){v("ok"===b||"permission_denied"===b,"merge at "+a+" failed.");"ok"!==b&&L("update at "+a+" failed: "+b);Md(t.g,k);Kd(t.g,a);var e=
De(t,a);W(t.I,e,[]);X(c,b,d)});b=Fe(this,a);De(this,b);W(t.I,b,f)}};h.Wc=function(a,b,c){this.e("setPriority",{path:a.toString(),ka:b});var d=Ce(this),d=Nd(b,d),d=S(this.g.M,a).Ia(d),d=ye(this.I,a,d,this.g.M),e=this.g.set(a,d),f=this;this.u.put(a.toString()+"/.priority",b,function(b,d){"permission_denied"===b&&L("setPriority at "+a+" failed: "+b);Md(f.g,e);Kd(f.g,a);var l=De(f,a);W(f.I,l,[]);X(c,b,d)});b=De(this,a);W(f.I,b,[])};
function Ee(a){a.e("onDisconnectEvents");var b=[],c=Ce(a);Gd(Od(a.T,c),new F(""),function(c,e){var f=ye(a.I,c,e,a.g.M);b.push.apply(b,a.g.set(c,f));f=Fe(a,c);De(a,f);W(a.I,f,[c])});Md(a.g,b);a.T=new Dd}h.Nc=function(a,b){var c=this;this.u.Nc(a.toString(),function(d,e){"ok"===d&&Fd(c.T,a);X(b,d,e)})};function Ge(a,b,c,d){var e=O(c);vd(a.u,b.toString(),e.V(!0),function(c,g){"ok"===c&&Ed(a.T,b,e);X(d,c,g)})}
function He(a,b,c,d,e){var f=O(c,d);vd(a.u,b.toString(),f.V(!0),function(c,d){"ok"===c&&Ed(a.T,b,f);X(e,c,d)})}function Ie(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(K("onDisconnect().update() called with empty data.  Don't do anything."),X(d,"ok")):xd(a.u,b.toString(),c,function(e,f){if("ok"===e)for(var l in c){var m=O(c[l]);Ed(a.T,b.G(l),m)}X(d,e,f)})}function Je(a){yc(a.aa,"deprecated_on_disconnect");a.zd.Zc.deprecated_on_disconnect=!0}
h.Rb=function(a,b,c,d,e){".info"===C(a.path)?this.Jc.Rb(a,b,c,d,e):this.I.Rb(a,b,c,d,e)};h.lc=function(a,b,c,d){if(".info"===C(a.path))this.Jc.lc(a,b,c,d);else{b=this.I.lc(a,b,c,d);if(c=null!==b){c=this.g;d=a.path;for(var e=[],f=0;f<b.length;++f)e[f]=S(c.va,b[f]);T(c.va,d,M);for(f=0;f<b.length;++f)T(c.va,b[f],e[f]);c=Kd(c,d)}c&&(v(this.g.pa.$===this.I.ac,"We should have raised any outstanding events by now.  Else, we'll blow them away."),T(this.g.pa,a.path,S(this.g.M,a.path)),this.I.ac=this.g.pa.$)}};
h.La=function(){this.u.La()};h.jb=function(){this.u.jb()};h.Xc=function(a){if("undefined"!==typeof console){a?(this.qc||(this.qc=new zc(this.aa)),a=this.qc.get()):a=this.aa.get();var b=wb(vc(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};h.Yc=function(a){yc(this.aa,a);this.zd.Zc[a]=!0};h.e=function(){K("r:"+this.u.id+":",arguments)};
function X(a,b,c){a&&ec(function(){if("ok"==b)a(null,c);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function Ke(a,b,c,d,e){function f(){}a.e("transaction on "+b);var g=new E(a,b);g.fb("value",f);c={path:b,update:c,D:d,status:null,qd:Kb(),wc:e,vd:0,tc:function(){g.yb("value",f)},uc:null};a.Ha.$=Le(a,a.Ha.$,a.g.M.$,a.Sa);d=c.update(S(a.Ha,b).V());if(n(d)){Aa("transaction failed: Data returned ",d);c.status=1;e=I(a.Sa,b);var k=e.j()||[];k.push(c);J(e,k);k="object"===typeof d&&null!==d&&A(d,".priority")?d[".priority"]:S(a.g.M,b).k();e=Ce(a);d=O(d,k);d=Pd(d,e);T(a.Ha,b,d);c.wc&&(T(a.g.pa,b,d),W(a.I,
b,[b]));Me(a)}else c.tc(),c.D&&(a=Ne(a,b),c.D(null,!1,a))}function Me(a,b){var c=b||a.Sa;b||Oe(a,c);if(null!==c.j()){var d=Pe(a,c);v(0<d.length);xb(d,function(a){return 1===a.status})&&Qe(a,c.path(),d)}else c.sb()&&c.A(function(b){Me(a,b)})}
function Qe(a,b,c){for(var d=0;d<c.length;d++)v(1===c[d].status,"tryToSendTransactionQueue_: items in queue should all be run."),c[d].status=2,c[d].vd++;var e=S(a.g.M,b).hash();T(a.g.M,b,S(a.g.pa,b));for(var f=S(a.Ha,b).V(!0),g=Kb(),k=Re(c),d=0;d<k.length;d++)J(I(a.g.Fb,k[d]),g);a.u.put(b.toString(),f,function(e){a.e("transaction put response",{path:b.toString(),status:e});for(d=0;d<k.length;d++){var f=I(a.g.Fb,k[d]),p=f.j();v(null!==p,"sendTransactionQueue_: pendingPut should not be null.");p===
g&&(J(f,null),T(a.g.M,k[d],S(a.g.va,k[d])))}if("ok"===e){e=[];for(d=0;d<c.length;d++)c[d].status=3,c[d].D&&(f=Ne(a,c[d].path),e.push(r(c[d].D,null,null,!0,f))),c[d].tc();Oe(a,I(a.Sa,b));Me(a);for(d=0;d<e.length;d++)ec(e[d])}else{if("datastale"===e)for(d=0;d<c.length;d++)c[d].status=4===c[d].status?5:1;else for(L("transaction at "+b+" failed: "+e),d=0;d<c.length;d++)c[d].status=5,c[d].uc=e;e=De(a,b);W(a.I,e,[b])}},e)}
function Re(a){for(var b={},c=0;c<a.length;c++)a[c].wc&&(b[a[c].path.toString()]=a[c].path);a=[];for(var d in b)a.push(b[d]);return a}
function De(a,b){var c=Se(a,b),d=c.path(),c=Pe(a,c);T(a.g.pa,d,S(a.g.M,d));T(a.Ha,d,S(a.g.M,d));if(0!==c.length){for(var e=S(a.g.pa,d),f=e,g=[],k=0;k<c.length;k++){var l=Na(d,c[k].path),m=!1,p;v(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===c[k].status)m=!0,p=c[k].uc;else if(1===c[k].status)if(25<=c[k].vd)m=!0,p="maxretry";else{var t=e.L(l),s=c[k].update(t.V());if(n(s)){Aa("transaction failed: Data returned ",s);var w=O(s);"object"===typeof s&&null!=s&&A(s,".priority")||
(w=w.Ia(t.k()));e=e.Aa(l,w);c[k].wc&&(f=f.Aa(l,w))}else m=!0,p="nodata"}m&&(c[k].status=3,setTimeout(c[k].tc,0),c[k].D&&(m=new E(a,c[k].path),l=new P(e.L(l),m),"nodata"===p?g.push(r(c[k].D,null,null,!1,l)):g.push(r(c[k].D,null,Error(p),!1,l))))}T(a.Ha,d,e);T(a.g.pa,d,f);Oe(a,a.Sa);for(k=0;k<g.length;k++)ec(g[k]);Me(a)}return d}function Se(a,b){for(var c,d=a.Sa;null!==(c=C(b))&&null===d.j();)d=I(d,c),b=La(b);return d}
function Pe(a,b){var c=[];Te(a,b,c);c.sort(function(a,b){return a.qd-b.qd});return c}function Te(a,b,c){var d=b.j();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.A(function(b){Te(a,b,c)})}function Oe(a,b){var c=b.j();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;J(b,0<c.length?c:null)}b.A(function(b){Oe(a,b)})}function Fe(a,b){var c=Se(a,b).path(),d=I(a.Sa,b);Sa(d,function(a){Ue(a)});Ue(d);Ra(d,function(a){Ue(a)});return c}
function Ue(a){var b=a.j();if(null!==b){for(var c=[],d=-1,e=0;e<b.length;e++)4!==b[e].status&&(2===b[e].status?(v(d===e-1,"All SENT items should be at beginning of queue."),d=e,b[e].status=4,b[e].uc="set"):(v(1===b[e].status),b[e].tc(),b[e].D&&c.push(r(b[e].D,null,Error("set"),!1,null))));-1===d?J(a,null):b.length=d+1;for(e=0;e<c.length;e++)ec(c[e])}}function Ne(a,b){var c=new E(a,b);return new P(S(a.Ha,b),c)}
function Le(a,b,c,d){if(d.f())return c;if(null!=d.j())return b;var e=c;d.A(function(d){var g=d.name(),k=new F(g);d=Le(a,b.L(k),c.L(k),d);e=e.H(g,d)});return e};function Y(){this.ib={}}ca(Y);Y.prototype.La=function(){for(var a in this.ib)this.ib[a].La()};Y.prototype.interrupt=Y.prototype.La;Y.prototype.jb=function(){for(var a in this.ib)this.ib[a].jb()};Y.prototype.resume=Y.prototype.jb;var Z={Nd:function(a){var b=N.prototype.hash;N.prototype.hash=a;var c=fc.prototype.hash;fc.prototype.hash=a;return function(){N.prototype.hash=b;fc.prototype.hash=c}}};Z.hijackHash=Z.Nd;Z.Pa=function(a){return a.Pa()};Z.queryIdentifier=Z.Pa;Z.Qd=function(a){return a.m.u.ia};Z.listens=Z.Qd;Z.Yd=function(a){return a.m.u.la};Z.refConnection=Z.Yd;Z.Cd=ld;Z.DataConnection=Z.Cd;ld.prototype.sendRequest=ld.prototype.Ga;ld.prototype.interrupt=ld.prototype.La;Z.Dd=$c;Z.RealTimeConnection=Z.Dd;
$c.prototype.sendRequest=$c.prototype.xd;$c.prototype.close=$c.prototype.close;Z.Bd=ob;Z.ConnectionTarget=Z.Bd;Z.Ld=function(){Oc=Gc=!0};Z.forceLongPolling=Z.Ld;Z.Md=function(){Pc=!0};Z.forceWebSockets=Z.Md;Z.de=function(a,b){a.m.u.Vc=b};Z.setSecurityDebugCallback=Z.de;Z.Xc=function(a,b){a.m.Xc(b)};Z.stats=Z.Xc;Z.Yc=function(a,b){a.m.Yc(b)};Z.statsIncrementCounter=Z.Yc;Z.Cc=function(a){return a.m.Cc};Z.Od=function(a,b){a.m.md=b};Z.interceptServerData=Z.Od;function $(a,b,c){this.Jb=a;this.X=b;this.Fa=c}$.prototype.cancel=function(a){x("Firebase.onDisconnect().cancel",0,1,arguments.length);z("Firebase.onDisconnect().cancel",1,a,!0);this.Jb.Nc(this.X,a)};$.prototype.cancel=$.prototype.cancel;$.prototype.remove=function(a){x("Firebase.onDisconnect().remove",0,1,arguments.length);B("Firebase.onDisconnect().remove",this.X);z("Firebase.onDisconnect().remove",1,a,!0);Ge(this.Jb,this.X,null,a)};$.prototype.remove=$.prototype.remove;
$.prototype.set=function(a,b){x("Firebase.onDisconnect().set",1,2,arguments.length);B("Firebase.onDisconnect().set",this.X);za("Firebase.onDisconnect().set",a,!1);z("Firebase.onDisconnect().set",2,b,!0);Ge(this.Jb,this.X,a,b)};$.prototype.set=$.prototype.set;
$.prototype.kb=function(a,b,c){x("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);B("Firebase.onDisconnect().setWithPriority",this.X);za("Firebase.onDisconnect().setWithPriority",a,!1);Ea("Firebase.onDisconnect().setWithPriority",2,b,!1);z("Firebase.onDisconnect().setWithPriority",3,c,!0);if(".length"===this.Fa||".keys"===this.Fa)throw"Firebase.onDisconnect().setWithPriority failed: "+this.Fa+" is a read-only object.";He(this.Jb,this.X,a,b,c)};$.prototype.setWithPriority=$.prototype.kb;
$.prototype.update=function(a,b){x("Firebase.onDisconnect().update",1,2,arguments.length);B("Firebase.onDisconnect().update",this.X);Da("Firebase.onDisconnect().update",a);z("Firebase.onDisconnect().update",2,b,!0);Ie(this.Jb,this.X,a,b)};$.prototype.update=$.prototype.update;var Ve=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);v(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);v(20===c.length,"NextPushId: Length should be 20.");
return c}}();function E(a,b){var c,d;if(a instanceof ze)c=a,d=b;else{x("new Firebase",1,2,arguments.length);var e=arguments[0];d=c="";var f=!0,g="";if(q(e)){var k=e.indexOf("//");if(0<=k)var l=e.substring(0,k-1),e=e.substring(k+2);k=e.indexOf("/");-1===k&&(k=e.length);c=e.substring(0,k);var e=e.substring(k+1),m=c.split(".");if(3==m.length){k=m[2].indexOf(":");f=0<=k?"https"===l||"wss"===l:!0;if("firebase"===m[1])Sb(c+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");else for(d=m[0],
g="",e=("/"+e).split("/"),k=0;k<e.length;k++)if(0<e[k].length){m=e[k];try{m=decodeURIComponent(m.replace(/\+/g," "))}catch(p){}g+="/"+m}d=d.toLowerCase()}else Sb("Cannot parse Firebase url. Please use https:<YOUR FIREBASE>.firebaseio.com")}f||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&L("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");c=new ob(c,f,d,"ws"===l||"wss"===l);d=new F(g);
f=d.toString();!(l=!q(c.host)||0===c.host.length||!ya(c.Yb))&&(l=0!==f.length)&&(f&&(f=f.replace(/^\/*\.info(\/|$)/,"/")),l=!(q(f)&&0!==f.length&&!xa.test(f)));if(l)throw Error(y("new Firebase",1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');if(b)if(b instanceof Y)f=b;else throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");else f=Y.rb();l=c.toString();e=va(f.ib,l);e||(e=new ze(c),f.ib[l]=e);c=e}D.call(this,c,d)}
ja(E,D);var We=E,Xe=["Firebase"],Ye=aa;Xe[0]in Ye||!Ye.execScript||Ye.execScript("var "+Xe[0]);for(var Ze;Xe.length&&(Ze=Xe.shift());)!Xe.length&&n(We)?Ye[Ze]=We:Ye=Ye[Ze]?Ye[Ze]:Ye[Ze]={};E.prototype.name=function(){x("Firebase.name",0,0,arguments.length);return this.path.f()?null:Ma(this.path)};E.prototype.name=E.prototype.name;
E.prototype.G=function(a){x("Firebase.child",1,1,arguments.length);if(fa(a))a=String(a);else if(!(a instanceof F))if(null===C(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Ha("Firebase.child",b)}else Ha("Firebase.child",a);return new E(this.m,this.path.G(a))};E.prototype.child=E.prototype.G;E.prototype.parent=function(){x("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new E(this.m,a)};E.prototype.parent=E.prototype.parent;
E.prototype.root=function(){x("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.parent();)a=a.parent();return a};E.prototype.root=E.prototype.root;E.prototype.toString=function(){x("Firebase.toString",0,0,arguments.length);var a;if(null===this.parent())a=this.m.toString();else{a=this.parent().toString()+"/";var b=this.name();a+=encodeURIComponent(String(b))}return a};E.prototype.toString=E.prototype.toString;
E.prototype.set=function(a,b){x("Firebase.set",1,2,arguments.length);B("Firebase.set",this.path);za("Firebase.set",a,!1);z("Firebase.set",2,b,!0);this.m.kb(this.path,a,null,b)};E.prototype.set=E.prototype.set;E.prototype.update=function(a,b){x("Firebase.update",1,2,arguments.length);B("Firebase.update",this.path);Da("Firebase.update",a);z("Firebase.update",2,b,!0);if(A(a,".priority"))throw Error("update() does not currently support updating .priority.");this.m.update(this.path,a,b)};
E.prototype.update=E.prototype.update;E.prototype.kb=function(a,b,c){x("Firebase.setWithPriority",2,3,arguments.length);B("Firebase.setWithPriority",this.path);za("Firebase.setWithPriority",a,!1);Ea("Firebase.setWithPriority",2,b,!1);z("Firebase.setWithPriority",3,c,!0);if(".length"===this.name()||".keys"===this.name())throw"Firebase.setWithPriority failed: "+this.name()+" is a read-only object.";this.m.kb(this.path,a,b,c)};E.prototype.setWithPriority=E.prototype.kb;
E.prototype.remove=function(a){x("Firebase.remove",0,1,arguments.length);B("Firebase.remove",this.path);z("Firebase.remove",1,a,!0);this.set(null,a)};E.prototype.remove=E.prototype.remove;
E.prototype.transaction=function(a,b,c){x("Firebase.transaction",1,3,arguments.length);B("Firebase.transaction",this.path);z("Firebase.transaction",1,a,!1);z("Firebase.transaction",2,b,!0);if(n(c)&&"boolean"!=typeof c)throw Error(y("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.name()||".keys"===this.name())throw"Firebase.transaction failed: "+this.name()+" is a read-only object.";"undefined"===typeof c&&(c=!0);Ke(this.m,this.path,a,b,c)};E.prototype.transaction=E.prototype.transaction;
E.prototype.Wc=function(a,b){x("Firebase.setPriority",1,2,arguments.length);B("Firebase.setPriority",this.path);Ea("Firebase.setPriority",1,a,!1);z("Firebase.setPriority",2,b,!0);this.m.Wc(this.path,a,b)};E.prototype.setPriority=E.prototype.Wc;E.prototype.push=function(a,b){x("Firebase.push",0,2,arguments.length);B("Firebase.push",this.path);za("Firebase.push",a,!0);z("Firebase.push",2,b,!0);var c=Be(this.m),c=Ve(c),c=this.G(c);"undefined"!==typeof a&&null!==a&&c.set(a,b);return c};
E.prototype.push=E.prototype.push;E.prototype.ja=function(){return new $(this.m,this.path,this.name())};E.prototype.onDisconnect=E.prototype.ja;E.prototype.Zd=function(){L("FirebaseRef.removeOnDisconnect() being deprecated. Please use FirebaseRef.onDisconnect().remove() instead.");this.ja().remove();Je(this.m)};E.prototype.removeOnDisconnect=E.prototype.Zd;
E.prototype.ce=function(a){L("FirebaseRef.setOnDisconnect(value) being deprecated. Please use FirebaseRef.onDisconnect().set(value) instead.");this.ja().set(a);Je(this.m)};E.prototype.setOnDisconnect=E.prototype.ce;E.prototype.mb=function(a,b,c){x("Firebase.auth",1,3,arguments.length);if(!q(a))throw Error(y("Firebase.auth",1,!1)+"must be a valid credential (a string).");z("Firebase.auth",2,b,!0);z("Firebase.auth",3,b,!0);this.m.mb(a,b,c)};E.prototype.auth=E.prototype.mb;
E.prototype.Pb=function(a){x("Firebase.unauth",0,1,arguments.length);z("Firebase.unauth",1,a,!0);this.m.Pb(a)};E.prototype.unauth=E.prototype.Pb;E.goOffline=function(){x("Firebase.goOffline",0,0,arguments.length);Y.rb().La()};E.goOnline=function(){x("Firebase.goOnline",0,0,arguments.length);Y.rb().jb()};
function Pb(a,b){v(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?Nb=r(console.log,console):"object"===typeof console.log&&(Nb=function(a){console.log(a)})),b&&nb.set("logging_enabled",!0)):a?Nb=a:(Nb=null,nb.remove("logging_enabled"))}E.enableLogging=Pb;E.ServerValue={TIMESTAMP:{".sv":"timestamp"}};E.INTERNAL=Z;E.Context=Y;})();

},{}],19:[function(require,module,exports){
var Router = require('director').Router;
var Vue = require('vue');
var _ = require('underscore');

module.exports = Vue.extend({
  created: function() {
    var app = this;
    var routes = _(this.$options.components).reduce(function(m, v, k) {
      var routeInfo = _.chain(v.options.route).pairs().first().value();
      m[routeInfo[0]] = function() {
        var args = Array.prototype.slice.call(arguments);
        app.currentView = k;
        routeInfo[1].apply(v, args);
      };
      return m
    }, {});

    var router = new Router(routes);
    router.init();
  }
});

},{"director":20,"underscore":21,"vue":42}],20:[function(require,module,exports){


//
// Generated on Fri Dec 27 2013 12:02:11 GMT-0500 (EST) by Nodejitsu, Inc (Using Codesurgeon).
// Version 1.2.2
//

(function (exports) {

/*
 * browser.js: Browser specific functionality for director.
 *
 * (C) 2011, Nodejitsu Inc.
 * MIT LICENSE
 *
 */

if (!Array.prototype.filter) {
  Array.prototype.filter = function(filter, that) {
    var other = [], v;
    for (var i = 0, n = this.length; i < n; i++) {
      if (i in this && filter.call(that, v = this[i], i, this)) {
        other.push(v);
      }
    }
    return other;
  };
}

if (!Array.isArray){
  Array.isArray = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };
}

var dloc = document.location;

function dlocHashEmpty() {
  // Non-IE browsers return '' when the address bar shows '#'; Director's logic
  // assumes both mean empty.
  return dloc.hash === '' || dloc.hash === '#';
}

var listener = {
  mode: 'modern',
  hash: dloc.hash,
  history: false,

  check: function () {
    var h = dloc.hash;
    if (h != this.hash) {
      this.hash = h;
      this.onHashChanged();
    }
  },

  fire: function () {
    if (this.mode === 'modern') {
      this.history === true ? window.onpopstate() : window.onhashchange();
    }
    else {
      this.onHashChanged();
    }
  },

  init: function (fn, history) {
    var self = this;
    this.history = history;

    if (!Router.listeners) {
      Router.listeners = [];
    }

    function onchange(onChangeEvent) {
      for (var i = 0, l = Router.listeners.length; i < l; i++) {
        Router.listeners[i](onChangeEvent);
      }
    }

    //note IE8 is being counted as 'modern' because it has the hashchange event
    if ('onhashchange' in window && (document.documentMode === undefined
      || document.documentMode > 7)) {
      // At least for now HTML5 history is available for 'modern' browsers only
      if (this.history === true) {
        // There is an old bug in Chrome that causes onpopstate to fire even
        // upon initial page load. Since the handler is run manually in init(),
        // this would cause Chrome to run it twise. Currently the only
        // workaround seems to be to set the handler after the initial page load
        // http://code.google.com/p/chromium/issues/detail?id=63040
        setTimeout(function() {
          window.onpopstate = onchange;
        }, 500);
      }
      else {
        window.onhashchange = onchange;
      }
      this.mode = 'modern';
    }
    else {
      //
      // IE support, based on a concept by Erik Arvidson ...
      //
      var frame = document.createElement('iframe');
      frame.id = 'state-frame';
      frame.style.display = 'none';
      document.body.appendChild(frame);
      this.writeFrame('');

      if ('onpropertychange' in document && 'attachEvent' in document) {
        document.attachEvent('onpropertychange', function () {
          if (event.propertyName === 'location') {
            self.check();
          }
        });
      }

      window.setInterval(function () { self.check(); }, 50);

      this.onHashChanged = onchange;
      this.mode = 'legacy';
    }

    Router.listeners.push(fn);

    return this.mode;
  },

  destroy: function (fn) {
    if (!Router || !Router.listeners) {
      return;
    }

    var listeners = Router.listeners;

    for (var i = listeners.length - 1; i >= 0; i--) {
      if (listeners[i] === fn) {
        listeners.splice(i, 1);
      }
    }
  },

  setHash: function (s) {
    // Mozilla always adds an entry to the history
    if (this.mode === 'legacy') {
      this.writeFrame(s);
    }

    if (this.history === true) {
      window.history.pushState({}, document.title, s);
      // Fire an onpopstate event manually since pushing does not obviously
      // trigger the pop event.
      this.fire();
    } else {
      dloc.hash = (s[0] === '/') ? s : '/' + s;
    }
    return this;
  },

  writeFrame: function (s) {
    // IE support...
    var f = document.getElementById('state-frame');
    var d = f.contentDocument || f.contentWindow.document;
    d.open();
    d.write("<script>_hash = '" + s + "'; onload = parent.listener.syncHash;<script>");
    d.close();
  },

  syncHash: function () {
    // IE support...
    var s = this._hash;
    if (s != dloc.hash) {
      dloc.hash = s;
    }
    return this;
  },

  onHashChanged: function () {}
};

var Router = exports.Router = function (routes) {
  if (!(this instanceof Router)) return new Router(routes);

  this.params   = {};
  this.routes   = {};
  this.methods  = ['on', 'once', 'after', 'before'];
  this.scope    = [];
  this._methods = {};

  this._insert = this.insert;
  this.insert = this.insertEx;

  this.historySupport = (window.history != null ? window.history.pushState : null) != null

  this.configure();
  this.mount(routes || {});
};

Router.prototype.init = function (r) {
  var self = this;
  this.handler = function(onChangeEvent) {
    var newURL = onChangeEvent && onChangeEvent.newURL || window.location.hash;
    var url = self.history === true ? self.getPath() : newURL.replace(/.*#/, '');
    self.dispatch('on', url.charAt(0) === '/' ? url : '/' + url);
  };

  listener.init(this.handler, this.history);

  if (this.history === false) {
    if (dlocHashEmpty() && r) {
      dloc.hash = r;
    } else if (!dlocHashEmpty()) {
      self.dispatch('on', '/' + dloc.hash.replace(/^(#\/|#|\/)/, ''));
    }
  }
  else {
    var routeTo = dlocHashEmpty() && r ? r : !dlocHashEmpty() ? dloc.hash.replace(/^#/, '') : null;
    if (routeTo) {
      window.history.replaceState({}, document.title, routeTo);
    }

    // Router has been initialized, but due to the chrome bug it will not
    // yet actually route HTML5 history state changes. Thus, decide if should route.
    if (routeTo || this.run_in_init === true) {
      this.handler();
    }
  }

  return this;
};

Router.prototype.explode = function () {
  var v = this.history === true ? this.getPath() : dloc.hash;
  if (v.charAt(1) === '/') { v=v.slice(1) }
  return v.slice(1, v.length).split("/");
};

Router.prototype.setRoute = function (i, v, val) {
  var url = this.explode();

  if (typeof i === 'number' && typeof v === 'string') {
    url[i] = v;
  }
  else if (typeof val === 'string') {
    url.splice(i, v, s);
  }
  else {
    url = [i];
  }

  listener.setHash(url.join('/'));
  return url;
};

//
// ### function insertEx(method, path, route, parent)
// #### @method {string} Method to insert the specific `route`.
// #### @path {Array} Parsed path to insert the `route` at.
// #### @route {Array|function} Route handlers to insert.
// #### @parent {Object} **Optional** Parent "routes" to insert into.
// insert a callback that will only occur once per the matched route.
//
Router.prototype.insertEx = function(method, path, route, parent) {
  if (method === "once") {
    method = "on";
    route = function(route) {
      var once = false;
      return function() {
        if (once) return;
        once = true;
        return route.apply(this, arguments);
      };
    }(route);
  }
  return this._insert(method, path, route, parent);
};

Router.prototype.getRoute = function (v) {
  var ret = v;

  if (typeof v === "number") {
    ret = this.explode()[v];
  }
  else if (typeof v === "string"){
    var h = this.explode();
    ret = h.indexOf(v);
  }
  else {
    ret = this.explode();
  }

  return ret;
};

Router.prototype.destroy = function () {
  listener.destroy(this.handler);
  return this;
};

Router.prototype.getPath = function () {
  var path = window.location.pathname;
  if (path.substr(0, 1) !== '/') {
    path = '/' + path;
  }
  return path;
};
function _every(arr, iterator) {
  for (var i = 0; i < arr.length; i += 1) {
    if (iterator(arr[i], i, arr) === false) {
      return;
    }
  }
}

function _flatten(arr) {
  var flat = [];
  for (var i = 0, n = arr.length; i < n; i++) {
    flat = flat.concat(arr[i]);
  }
  return flat;
}

function _asyncEverySeries(arr, iterator, callback) {
  if (!arr.length) {
    return callback();
  }
  var completed = 0;
  (function iterate() {
    iterator(arr[completed], function(err) {
      if (err || err === false) {
        callback(err);
        callback = function() {};
      } else {
        completed += 1;
        if (completed === arr.length) {
          callback();
        } else {
          iterate();
        }
      }
    });
  })();
}

function paramifyString(str, params, mod) {
  mod = str;
  for (var param in params) {
    if (params.hasOwnProperty(param)) {
      mod = params[param](str);
      if (mod !== str) {
        break;
      }
    }
  }
  return mod === str ? "([._a-zA-Z0-9-]+)" : mod;
}

function regifyString(str, params) {
  var matches, last = 0, out = "";
  while (matches = str.substr(last).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/)) {
    last = matches.index + matches[0].length;
    matches[0] = matches[0].replace(/^\*/, "([_.()!\\ %@&a-zA-Z0-9-]+)");
    out += str.substr(0, matches.index) + matches[0];
  }
  str = out += str.substr(last);
  var captures = str.match(/:([^\/]+)/ig), capture, length;
  if (captures) {
    length = captures.length;
    for (var i = 0; i < length; i++) {
      capture = captures[i];
      if (capture.slice(0, 2) === "::") {
        str = capture.slice(1);
      } else {
        str = str.replace(capture, paramifyString(capture, params));
      }
    }
  }
  return str;
}

function terminator(routes, delimiter, start, stop) {
  var last = 0, left = 0, right = 0, start = (start || "(").toString(), stop = (stop || ")").toString(), i;
  for (i = 0; i < routes.length; i++) {
    var chunk = routes[i];
    if (chunk.indexOf(start, last) > chunk.indexOf(stop, last) || ~chunk.indexOf(start, last) && !~chunk.indexOf(stop, last) || !~chunk.indexOf(start, last) && ~chunk.indexOf(stop, last)) {
      left = chunk.indexOf(start, last);
      right = chunk.indexOf(stop, last);
      if (~left && !~right || !~left && ~right) {
        var tmp = routes.slice(0, (i || 1) + 1).join(delimiter);
        routes = [ tmp ].concat(routes.slice((i || 1) + 1));
      }
      last = (right > left ? right : left) + 1;
      i = 0;
    } else {
      last = 0;
    }
  }
  return routes;
}

Router.prototype.configure = function(options) {
  options = options || {};
  for (var i = 0; i < this.methods.length; i++) {
    this._methods[this.methods[i]] = true;
  }
  this.recurse = options.recurse || this.recurse || false;
  this.async = options.async || false;
  this.delimiter = options.delimiter || "/";
  this.strict = typeof options.strict === "undefined" ? true : options.strict;
  this.notfound = options.notfound;
  this.resource = options.resource;
  this.history = options.html5history && this.historySupport || false;
  this.run_in_init = this.history === true && options.run_handler_in_init !== false;
  this.every = {
    after: options.after || null,
    before: options.before || null,
    on: options.on || null
  };
  return this;
};

Router.prototype.param = function(token, matcher) {
  if (token[0] !== ":") {
    token = ":" + token;
  }
  var compiled = new RegExp(token, "g");
  this.params[token] = function(str) {
    return str.replace(compiled, matcher.source || matcher);
  };
};

Router.prototype.on = Router.prototype.route = function(method, path, route) {
  var self = this;
  if (!route && typeof path == "function") {
    route = path;
    path = method;
    method = "on";
  }
  if (Array.isArray(path)) {
    return path.forEach(function(p) {
      self.on(method, p, route);
    });
  }
  if (path.source) {
    path = path.source.replace(/\\\//ig, "/");
  }
  if (Array.isArray(method)) {
    return method.forEach(function(m) {
      self.on(m.toLowerCase(), path, route);
    });
  }
  path = path.split(new RegExp(this.delimiter));
  path = terminator(path, this.delimiter);
  this.insert(method, this.scope.concat(path), route);
};

Router.prototype.dispatch = function(method, path, callback) {
  var self = this, fns = this.traverse(method, path, this.routes, ""), invoked = this._invoked, after;
  this._invoked = true;
  if (!fns || fns.length === 0) {
    this.last = [];
    if (typeof this.notfound === "function") {
      this.invoke([ this.notfound ], {
        method: method,
        path: path
      }, callback);
    }
    return false;
  }
  if (this.recurse === "forward") {
    fns = fns.reverse();
  }
  function updateAndInvoke() {
    self.last = fns.after;
    self.invoke(self.runlist(fns), self, callback);
  }
  after = this.every && this.every.after ? [ this.every.after ].concat(this.last) : [ this.last ];
  if (after && after.length > 0 && invoked) {
    if (this.async) {
      this.invoke(after, this, updateAndInvoke);
    } else {
      this.invoke(after, this);
      updateAndInvoke();
    }
    return true;
  }
  updateAndInvoke();
  return true;
};

Router.prototype.invoke = function(fns, thisArg, callback) {
  var self = this;
  var apply;
  if (this.async) {
    apply = function(fn, next) {
      if (Array.isArray(fn)) {
        return _asyncEverySeries(fn, apply, next);
      } else if (typeof fn == "function") {
        fn.apply(thisArg, fns.captures.concat(next));
      }
    };
    _asyncEverySeries(fns, apply, function() {
      if (callback) {
        callback.apply(thisArg, arguments);
      }
    });
  } else {
    apply = function(fn) {
      if (Array.isArray(fn)) {
        return _every(fn, apply);
      } else if (typeof fn === "function") {
        return fn.apply(thisArg, fns.captures || []);
      } else if (typeof fn === "string" && self.resource) {
        self.resource[fn].apply(thisArg, fns.captures || []);
      }
    };
    _every(fns, apply);
  }
};

Router.prototype.traverse = function(method, path, routes, regexp, filter) {
  var fns = [], current, exact, match, next, that;
  function filterRoutes(routes) {
    if (!filter) {
      return routes;
    }
    function deepCopy(source) {
      var result = [];
      for (var i = 0; i < source.length; i++) {
        result[i] = Array.isArray(source[i]) ? deepCopy(source[i]) : source[i];
      }
      return result;
    }
    function applyFilter(fns) {
      for (var i = fns.length - 1; i >= 0; i--) {
        if (Array.isArray(fns[i])) {
          applyFilter(fns[i]);
          if (fns[i].length === 0) {
            fns.splice(i, 1);
          }
        } else {
          if (!filter(fns[i])) {
            fns.splice(i, 1);
          }
        }
      }
    }
    var newRoutes = deepCopy(routes);
    newRoutes.matched = routes.matched;
    newRoutes.captures = routes.captures;
    newRoutes.after = routes.after.filter(filter);
    applyFilter(newRoutes);
    return newRoutes;
  }
  if (path === this.delimiter && routes[method]) {
    next = [ [ routes.before, routes[method] ].filter(Boolean) ];
    next.after = [ routes.after ].filter(Boolean);
    next.matched = true;
    next.captures = [];
    return filterRoutes(next);
  }
  for (var r in routes) {
    if (routes.hasOwnProperty(r) && (!this._methods[r] || this._methods[r] && typeof routes[r] === "object" && !Array.isArray(routes[r]))) {
      current = exact = regexp + this.delimiter + r;
      if (!this.strict) {
        exact += "[" + this.delimiter + "]?";
      }
      match = path.match(new RegExp("^" + exact));
      if (!match) {
        continue;
      }
      if (match[0] && match[0] == path && routes[r][method]) {
        next = [ [ routes[r].before, routes[r][method] ].filter(Boolean) ];
        next.after = [ routes[r].after ].filter(Boolean);
        next.matched = true;
        next.captures = match.slice(1);
        if (this.recurse && routes === this.routes) {
          next.push([ routes.before, routes.on ].filter(Boolean));
          next.after = next.after.concat([ routes.after ].filter(Boolean));
        }
        return filterRoutes(next);
      }
      next = this.traverse(method, path, routes[r], current);
      if (next.matched) {
        if (next.length > 0) {
          fns = fns.concat(next);
        }
        if (this.recurse) {
          fns.push([ routes[r].before, routes[r].on ].filter(Boolean));
          next.after = next.after.concat([ routes[r].after ].filter(Boolean));
          if (routes === this.routes) {
            fns.push([ routes["before"], routes["on"] ].filter(Boolean));
            next.after = next.after.concat([ routes["after"] ].filter(Boolean));
          }
        }
        fns.matched = true;
        fns.captures = next.captures;
        fns.after = next.after;
        return filterRoutes(fns);
      }
    }
  }
  return false;
};

Router.prototype.insert = function(method, path, route, parent) {
  var methodType, parentType, isArray, nested, part;
  path = path.filter(function(p) {
    return p && p.length > 0;
  });
  parent = parent || this.routes;
  part = path.shift();
  if (/\:|\*/.test(part) && !/\\d|\\w/.test(part)) {
    part = regifyString(part, this.params);
  }
  if (path.length > 0) {
    parent[part] = parent[part] || {};
    return this.insert(method, path, route, parent[part]);
  }
  if (!part && !path.length && parent === this.routes) {
    methodType = typeof parent[method];
    switch (methodType) {
     case "function":
      parent[method] = [ parent[method], route ];
      return;
     case "object":
      parent[method].push(route);
      return;
     case "undefined":
      parent[method] = route;
      return;
    }
    return;
  }
  parentType = typeof parent[part];
  isArray = Array.isArray(parent[part]);
  if (parent[part] && !isArray && parentType == "object") {
    methodType = typeof parent[part][method];
    switch (methodType) {
     case "function":
      parent[part][method] = [ parent[part][method], route ];
      return;
     case "object":
      parent[part][method].push(route);
      return;
     case "undefined":
      parent[part][method] = route;
      return;
    }
  } else if (parentType == "undefined") {
    nested = {};
    nested[method] = route;
    parent[part] = nested;
    return;
  }
  throw new Error("Invalid route context: " + parentType);
};



Router.prototype.extend = function(methods) {
  var self = this, len = methods.length, i;
  function extend(method) {
    self._methods[method] = true;
    self[method] = function() {
      var extra = arguments.length === 1 ? [ method, "" ] : [ method ];
      self.on.apply(self, extra.concat(Array.prototype.slice.call(arguments)));
    };
  }
  for (i = 0; i < len; i++) {
    extend(methods[i]);
  }
};

Router.prototype.runlist = function(fns) {
  var runlist = this.every && this.every.before ? [ this.every.before ].concat(_flatten(fns)) : _flatten(fns);
  if (this.every && this.every.on) {
    runlist.push(this.every.on);
  }
  runlist.captures = fns.captures;
  runlist.source = fns.source;
  return runlist;
};

Router.prototype.mount = function(routes, path) {
  if (!routes || typeof routes !== "object" || Array.isArray(routes)) {
    return;
  }
  var self = this;
  path = path || [];
  if (!Array.isArray(path)) {
    path = path.split(self.delimiter);
  }
  function insertOrMount(route, local) {
    var rename = route, parts = route.split(self.delimiter), routeType = typeof routes[route], isRoute = parts[0] === "" || !self._methods[parts[0]], event = isRoute ? "on" : rename;
    if (isRoute) {
      rename = rename.slice((rename.match(new RegExp("^" + self.delimiter)) || [ "" ])[0].length);
      parts.shift();
    }
    if (isRoute && routeType === "object" && !Array.isArray(routes[route])) {
      local = local.concat(parts);
      self.mount(routes[route], local);
      return;
    }
    if (isRoute) {
      local = local.concat(rename.split(self.delimiter));
      local = terminator(local, self.delimiter);
    }
    self.insert(event, local, routes[route]);
  }
  for (var route in routes) {
    if (routes.hasOwnProperty(route)) {
      insertOrMount(route, path.slice(0));
    }
  }
};



}(typeof exports === "object" ? exports : window));
},{}],21:[function(require,module,exports){
//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.6.0';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return obj;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, length = obj.length; i < length; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      var keys = _.keys(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
      }
    }
    return obj;
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var result;
    any(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
    each(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, function(value, index, list) {
      return !predicate.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(predicate, context);
    each(obj, function(value, index, list) {
      if (!(result = result && predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
    each(obj, function(value, index, list) {
      if (result || (result = predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matches(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matches(attrs));
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    var result = -Infinity, lastComputed = -Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed > lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    var result = Infinity, lastComputed = Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed < lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Shuffle an array, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return value;
    return _.property(value);
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, iterator, context) {
    iterator = lookupIterator(iterator);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iterator, context) {
      var result = {};
      iterator = lookupIterator(iterator);
      each(obj, function(value, index) {
        var key = iterator.call(context, value, index, obj);
        behavior(result, key, value);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, key, value) {
    _.has(result, key) ? result[key].push(value) : result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, key, value) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, key) {
    _.has(result, key) ? result[key]++ : result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[0];
    if (n < 0) return [];
    return slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    each(input, function(value) {
      if (_.isArray(value) || _.isArguments(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Split an array into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(array, predicate) {
    var pass = [], fail = [];
    each(array, function(elem) {
      (predicate(elem) ? pass : fail).push(elem);
    });
    return [pass, fail];
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(_.flatten(arguments, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.contains(other, item);
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var length = _.max(_.pluck(arguments, 'length').concat(0));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, '' + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(length);

    while(idx < length) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    return function() {
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return func.apply(this, args);
    };
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) throw new Error('bindAll must be passed function names');
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;
      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = new Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = new Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] === void 0) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                             _.isFunction(bCtor) && (bCtor instanceof bCtor))
                        && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  _.constant = function(value) {
    return function () {
      return value;
    };
  };

  _.property = function(key) {
    return function(obj) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {
    return function(obj) {
      if (obj === attrs) return true; //avoid comparing an object to itself.
      for (var key in attrs) {
        if (attrs[key] !== obj[key])
          return false;
      }
      return true;
    }
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(Math.max(0, n));
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() { return new Date().getTime(); };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}).call(this);

},{}],22:[function(require,module,exports){
var utils = require('./utils')

function Batcher () {
    this.reset()
}

var BatcherProto = Batcher.prototype

BatcherProto.push = function (job) {
    if (!job.id || !this.has[job.id]) {
        this.queue.push(job)
        this.has[job.id] = job
        if (!this.waiting) {
            this.waiting = true
            utils.nextTick(utils.bind(this.flush, this))
        }
    } else if (job.override) {
        var oldJob = this.has[job.id]
        oldJob.cancelled = true
        this.queue.push(job)
        this.has[job.id] = job
    }
}

BatcherProto.flush = function () {
    // before flush hook
    if (this._preFlush) this._preFlush()
    // do not cache length because more jobs might be pushed
    // as we execute existing jobs
    for (var i = 0; i < this.queue.length; i++) {
        var job = this.queue[i]
        if (!job.cancelled) {
            job.execute()
        }
    }
    this.reset()
}

BatcherProto.reset = function () {
    this.has = utils.hash()
    this.queue = []
    this.waiting = false
}

module.exports = Batcher
},{"./utils":46}],23:[function(require,module,exports){
var Batcher        = require('./batcher'),
    bindingBatcher = new Batcher(),
    bindingId      = 1

/**
 *  Binding class.
 *
 *  each property on the viewmodel has one corresponding Binding object
 *  which has multiple directive instances on the DOM
 *  and multiple computed property dependents
 */
function Binding (compiler, key, isExp, isFn) {
    this.id = bindingId++
    this.value = undefined
    this.isExp = !!isExp
    this.isFn = isFn
    this.root = !this.isExp && key.indexOf('.') === -1
    this.compiler = compiler
    this.key = key
    this.dirs = []
    this.subs = []
    this.deps = []
    this.unbound = false
}

var BindingProto = Binding.prototype

/**
 *  Update value and queue instance updates.
 */
BindingProto.update = function (value) {
    if (!this.isComputed || this.isFn) {
        this.value = value
    }
    if (this.dirs.length || this.subs.length) {
        var self = this
        bindingBatcher.push({
            id: this.id,
            execute: function () {
                if (!self.unbound) {
                    self._update()
                }
            }
        })
    }
}

/**
 *  Actually update the directives.
 */
BindingProto._update = function () {
    var i = this.dirs.length,
        value = this.val()
    while (i--) {
        this.dirs[i].$update(value)
    }
    this.pub()
}

/**
 *  Return the valuated value regardless
 *  of whether it is computed or not
 */
BindingProto.val = function () {
    return this.isComputed && !this.isFn
        ? this.value.$get()
        : this.value
}

/**
 *  Notify computed properties that depend on this binding
 *  to update themselves
 */
BindingProto.pub = function () {
    var i = this.subs.length
    while (i--) {
        this.subs[i].update()
    }
}

/**
 *  Unbind the binding, remove itself from all of its dependencies
 */
BindingProto.unbind = function () {
    // Indicate this has been unbound.
    // It's possible this binding will be in
    // the batcher's flush queue when its owner
    // compiler has already been destroyed.
    this.unbound = true
    var i = this.dirs.length
    while (i--) {
        this.dirs[i].$unbind()
    }
    i = this.deps.length
    var subs
    while (i--) {
        subs = this.deps[i].subs
        var j = subs.indexOf(this)
        if (j > -1) subs.splice(j, 1)
    }
}

module.exports = Binding
},{"./batcher":22}],24:[function(require,module,exports){
var Emitter     = require('./emitter'),
    Observer    = require('./observer'),
    config      = require('./config'),
    utils       = require('./utils'),
    Binding     = require('./binding'),
    Directive   = require('./directive'),
    TextParser  = require('./text-parser'),
    DepsParser  = require('./deps-parser'),
    ExpParser   = require('./exp-parser'),
    ViewModel,
    
    // cache methods
    slice       = [].slice,
    extend      = utils.extend,
    hasOwn      = ({}).hasOwnProperty,
    def         = Object.defineProperty,

    // hooks to register
    hooks = [
        'created', 'ready',
        'beforeDestroy', 'afterDestroy',
        'attached', 'detached'
    ],

    // list of priority directives
    // that needs to be checked in specific order
    priorityDirectives = [
        'if',
        'repeat',
        'view',
        'component'
    ]

/**
 *  The DOM compiler
 *  scans a DOM node and compile bindings for a ViewModel
 */
function Compiler (vm, options) {

    var compiler = this,
        key, i

    // default state
    compiler.init       = true
    compiler.destroyed  = false

    // process and extend options
    options = compiler.options = options || {}
    utils.processOptions(options)

    // copy compiler options
    extend(compiler, options.compilerOptions)
    // repeat indicates this is a v-repeat instance
    compiler.repeat   = compiler.repeat || false
    // expCache will be shared between v-repeat instances
    compiler.expCache = compiler.expCache || {}

    // initialize element
    var el = compiler.el = compiler.setupElement(options)
    utils.log('\nnew VM instance: ' + el.tagName + '\n')

    // set other compiler properties
    compiler.vm       = el.vue_vm = vm
    compiler.bindings = utils.hash()
    compiler.dirs     = []
    compiler.deferred = []
    compiler.computed = []
    compiler.children = []
    compiler.emitter  = new Emitter(vm)

    // VM ---------------------------------------------------------------------

    // set VM properties
    vm.$         = {}
    vm.$el       = el
    vm.$options  = options
    vm.$compiler = compiler
    vm.$event    = null

    // set parent & root
    var parentVM = options.parent
    if (parentVM) {
        compiler.parent = parentVM.$compiler
        parentVM.$compiler.children.push(compiler)
        vm.$parent = parentVM
        // inherit lazy option
        if (!('lazy' in options)) {
            options.lazy = compiler.parent.options.lazy
        }
    }
    vm.$root = getRoot(compiler).vm

    // DATA -------------------------------------------------------------------

    // setup observer
    // this is necesarry for all hooks and data observation events
    compiler.setupObserver()

    // create bindings for computed properties
    if (options.methods) {
        for (key in options.methods) {
            compiler.createBinding(key)
        }
    }

    // create bindings for methods
    if (options.computed) {
        for (key in options.computed) {
            compiler.createBinding(key)
        }
    }

    // initialize data
    var data = compiler.data = options.data || {},
        defaultData = options.defaultData
    if (defaultData) {
        for (key in defaultData) {
            if (!hasOwn.call(data, key)) {
                data[key] = defaultData[key]
            }
        }
    }

    // copy paramAttributes
    var params = options.paramAttributes
    if (params) {
        i = params.length
        while (i--) {
            data[params[i]] = utils.checkNumber(
                compiler.eval(
                    el.getAttribute(params[i])
                )
            )
        }
    }

    // copy data properties to vm
    // so user can access them in the created hook
    extend(vm, data)
    vm.$data = data

    // beforeCompile hook
    compiler.execHook('created')

    // the user might have swapped the data ...
    data = compiler.data = vm.$data

    // user might also set some properties on the vm
    // in which case we should copy back to $data
    var vmProp
    for (key in vm) {
        vmProp = vm[key]
        if (
            key.charAt(0) !== '$' &&
            data[key] !== vmProp &&
            typeof vmProp !== 'function'
        ) {
            data[key] = vmProp
        }
    }

    // now we can observe the data.
    // this will convert data properties to getter/setters
    // and emit the first batch of set events, which will
    // in turn create the corresponding bindings.
    compiler.observeData(data)

    // COMPILE ----------------------------------------------------------------

    // before compiling, resolve content insertion points
    if (options.template) {
        this.resolveContent()
    }

    // now parse the DOM and bind directives.
    // During this stage, we will also create bindings for
    // encountered keypaths that don't have a binding yet.
    compiler.compile(el, true)

    // Any directive that creates child VMs are deferred
    // so that when they are compiled, all bindings on the
    // parent VM have been created.
    i = compiler.deferred.length
    while (i--) {
        compiler.bindDirective(compiler.deferred[i])
    }
    compiler.deferred = null

    // extract dependencies for computed properties.
    // this will evaluated all collected computed bindings
    // and collect get events that are emitted.
    if (this.computed.length) {
        DepsParser.parse(this.computed)
    }

    // done!
    compiler.init = false

    // post compile / ready hook
    compiler.execHook('ready')
}

var CompilerProto = Compiler.prototype

/**
 *  Initialize the VM/Compiler's element.
 *  Fill it in with the template if necessary.
 */
CompilerProto.setupElement = function (options) {
    // create the node first
    var el = typeof options.el === 'string'
        ? document.querySelector(options.el)
        : options.el || document.createElement(options.tagName || 'div')

    var template = options.template,
        child, replacer, i, attr, attrs

    if (template) {
        // collect anything already in there
        if (el.hasChildNodes()) {
            this.rawContent = document.createElement('div')
            /* jshint boss: true */
            while (child = el.firstChild) {
                this.rawContent.appendChild(child)
            }
        }
        // replace option: use the first node in
        // the template directly
        if (options.replace && template.firstChild === template.lastChild) {
            replacer = template.firstChild.cloneNode(true)
            if (el.parentNode) {
                el.parentNode.insertBefore(replacer, el)
                el.parentNode.removeChild(el)
            }
            // copy over attributes
            if (el.hasAttributes()) {
                i = el.attributes.length
                while (i--) {
                    attr = el.attributes[i]
                    replacer.setAttribute(attr.name, attr.value)
                }
            }
            // replace
            el = replacer
        } else {
            el.appendChild(template.cloneNode(true))
        }

    }

    // apply element options
    if (options.id) el.id = options.id
    if (options.className) el.className = options.className
    attrs = options.attributes
    if (attrs) {
        for (attr in attrs) {
            el.setAttribute(attr, attrs[attr])
        }
    }

    return el
}

/**
 *  Deal with <content> insertion points
 *  per the Web Components spec
 */
CompilerProto.resolveContent = function () {

    var outlets = slice.call(this.el.getElementsByTagName('content')),
        raw = this.rawContent,
        outlet, select, i, j, main

    i = outlets.length
    if (i) {
        // first pass, collect corresponding content
        // for each outlet.
        while (i--) {
            outlet = outlets[i]
            if (raw) {
                select = outlet.getAttribute('select')
                if (select) { // select content
                    outlet.content =
                        slice.call(raw.querySelectorAll(select))
                } else { // default content
                    main = outlet
                }
            } else { // fallback content
                outlet.content =
                    slice.call(outlet.childNodes)
            }
        }
        // second pass, actually insert the contents
        for (i = 0, j = outlets.length; i < j; i++) {
            outlet = outlets[i]
            if (outlet === main) continue
            insert(outlet, outlet.content)
        }
        // finally insert the main content
        if (raw && main) {
            insert(main, slice.call(raw.childNodes))
        }
    }

    function insert (outlet, contents) {
        var parent = outlet.parentNode,
            i = 0, j = contents.length
        for (; i < j; i++) {
            parent.insertBefore(contents[i], outlet)
        }
        parent.removeChild(outlet)
    }

    this.rawContent = null
}

/**
 *  Setup observer.
 *  The observer listens for get/set/mutate events on all VM
 *  values/objects and trigger corresponding binding updates.
 *  It also listens for lifecycle hooks.
 */
CompilerProto.setupObserver = function () {

    var compiler = this,
        bindings = compiler.bindings,
        options  = compiler.options,
        observer = compiler.observer = new Emitter(compiler.vm)

    // a hash to hold event proxies for each root level key
    // so they can be referenced and removed later
    observer.proxies = {}

    // add own listeners which trigger binding updates
    observer
        .on('get', onGet)
        .on('set', onSet)
        .on('mutate', onSet)

    // register hooks
    var i = hooks.length, j, hook, fns
    while (i--) {
        hook = hooks[i]
        fns = options[hook]
        if (Array.isArray(fns)) {
            j = fns.length
            // since hooks were merged with child at head,
            // we loop reversely.
            while (j--) {
                registerHook(hook, fns[j])
            }
        } else if (fns) {
            registerHook(hook, fns)
        }
    }

    // broadcast attached/detached hooks
    observer
        .on('hook:attached', function () {
            broadcast(1)
        })
        .on('hook:detached', function () {
            broadcast(0)
        })

    function onGet (key) {
        check(key)
        DepsParser.catcher.emit('get', bindings[key])
    }

    function onSet (key, val, mutation) {
        observer.emit('change:' + key, val, mutation)
        check(key)
        bindings[key].update(val)
    }

    function registerHook (hook, fn) {
        observer.on('hook:' + hook, function () {
            fn.call(compiler.vm)
        })
    }

    function broadcast (event) {
        var children = compiler.children
        if (children) {
            var child, i = children.length
            while (i--) {
                child = children[i]
                if (child.el.parentNode) {
                    event = 'hook:' + (event ? 'attached' : 'detached')
                    child.observer.emit(event)
                    child.emitter.emit(event)
                }
            }
        }
    }

    function check (key) {
        if (!bindings[key]) {
            compiler.createBinding(key)
        }
    }
}

CompilerProto.observeData = function (data) {

    var compiler = this,
        observer = compiler.observer

    // recursively observe nested properties
    Observer.observe(data, '', observer)

    // also create binding for top level $data
    // so it can be used in templates too
    var $dataBinding = compiler.bindings['$data'] = new Binding(compiler, '$data')
    $dataBinding.update(data)

    // allow $data to be swapped
    def(compiler.vm, '$data', {
        get: function () {
            compiler.observer.emit('get', '$data')
            return compiler.data
        },
        set: function (newData) {
            var oldData = compiler.data
            Observer.unobserve(oldData, '', observer)
            compiler.data = newData
            Observer.copyPaths(newData, oldData)
            Observer.observe(newData, '', observer)
            update()
        }
    })

    // emit $data change on all changes
    observer
        .on('set', onSet)
        .on('mutate', onSet)

    function onSet (key) {
        if (key !== '$data') update()
    }

    function update () {
        $dataBinding.update(compiler.data)
        observer.emit('change:$data', compiler.data)
    }
}

/**
 *  Compile a DOM node (recursive)
 */
CompilerProto.compile = function (node, root) {
    var nodeType = node.nodeType
    if (nodeType === 1 && node.tagName !== 'SCRIPT') { // a normal node
        this.compileElement(node, root)
    } else if (nodeType === 3 && config.interpolate) {
        this.compileTextNode(node)
    }
}

/**
 *  Check for a priority directive
 *  If it is present and valid, return true to skip the rest
 */
CompilerProto.checkPriorityDir = function (dirname, node, root) {
    var expression, directive, Ctor
    if (
        dirname === 'component' &&
        root !== true &&
        (Ctor = this.resolveComponent(node, undefined, true))
    ) {
        directive = this.parseDirective(dirname, '', node)
        directive.Ctor = Ctor
    } else {
        expression = utils.attr(node, dirname)
        directive = expression && this.parseDirective(dirname, expression, node)
    }
    if (directive) {
        if (root === true) {
            utils.warn(
                'Directive v-' + dirname + ' cannot be used on an already instantiated ' +
                'VM\'s root node. Use it from the parent\'s template instead.'
            )
            return
        }
        this.deferred.push(directive)
        return true
    }
}

/**
 *  Compile normal directives on a node
 */
CompilerProto.compileElement = function (node, root) {

    // textarea is pretty annoying
    // because its value creates childNodes which
    // we don't want to compile.
    if (node.tagName === 'TEXTAREA' && node.value) {
        node.value = this.eval(node.value)
    }

    // only compile if this element has attributes
    // or its tagName contains a hyphen (which means it could
    // potentially be a custom element)
    if (node.hasAttributes() || node.tagName.indexOf('-') > -1) {

        // skip anything with v-pre
        if (utils.attr(node, 'pre') !== null) {
            return
        }

        var i, l, j, k

        // check priority directives.
        // if any of them are present, it will take over the node with a childVM
        // so we can skip the rest
        for (i = 0, l = priorityDirectives.length; i < l; i++) {
            if (this.checkPriorityDir(priorityDirectives[i], node, root)) {
                return
            }
        }

        // check transition & animation properties
        node.vue_trans  = utils.attr(node, 'transition')
        node.vue_anim   = utils.attr(node, 'animation')
        node.vue_effect = this.eval(utils.attr(node, 'effect'))

        var prefix = config.prefix + '-',
            params = this.options.paramAttributes,
            attr, attrname, isDirective, exp, directives, directive, dirname

        // v-with has special priority among the rest
        // it needs to pull in the value from the parent before
        // computed properties are evaluated, because at this stage
        // the computed properties have not set up their dependencies yet.
        if (root) {
            var withExp = utils.attr(node, 'with')
            if (withExp) {
                directives = this.parseDirective('with', withExp, node, true)
                for (j = 0, k = directives.length; j < k; j++) {
                    this.bindDirective(directives[j], this.parent)
                }
            }
        }

        var attrs = slice.call(node.attributes)
        for (i = 0, l = attrs.length; i < l; i++) {

            attr = attrs[i]
            attrname = attr.name
            isDirective = false

            if (attrname.indexOf(prefix) === 0) {
                // a directive - split, parse and bind it.
                isDirective = true
                dirname = attrname.slice(prefix.length)
                // build with multiple: true
                directives = this.parseDirective(dirname, attr.value, node, true)
                // loop through clauses (separated by ",")
                // inside each attribute
                for (j = 0, k = directives.length; j < k; j++) {
                    this.bindDirective(directives[j])
                }
            } else if (config.interpolate) {
                // non directive attribute, check interpolation tags
                exp = TextParser.parseAttr(attr.value)
                if (exp) {
                    directive = this.parseDirective('attr', exp, node)
                    directive.arg = attrname
                    if (params && params.indexOf(attrname) > -1) {
                        // a param attribute... we should use the parent binding
                        // to avoid circular updates like size={{size}}
                        this.bindDirective(directive, this.parent)
                    } else {
                        this.bindDirective(directive)
                    }
                }
            }

            if (isDirective && dirname !== 'cloak') {
                node.removeAttribute(attrname)
            }
        }

    }

    // recursively compile childNodes
    if (node.hasChildNodes()) {
        slice.call(node.childNodes).forEach(this.compile, this)
    }
}

/**
 *  Compile a text node
 */
CompilerProto.compileTextNode = function (node) {

    var tokens = TextParser.parse(node.nodeValue)
    if (!tokens) return
    var el, token, directive

    for (var i = 0, l = tokens.length; i < l; i++) {

        token = tokens[i]
        directive = null

        if (token.key) { // a binding
            if (token.key.charAt(0) === '>') { // a partial
                el = document.createComment('ref')
                directive = this.parseDirective('partial', token.key.slice(1), el)
            } else {
                if (!token.html) { // text binding
                    el = document.createTextNode('')
                    directive = this.parseDirective('text', token.key, el)
                } else { // html binding
                    el = document.createComment(config.prefix + '-html')
                    directive = this.parseDirective('html', token.key, el)
                }
            }
        } else { // a plain string
            el = document.createTextNode(token)
        }

        // insert node
        node.parentNode.insertBefore(el, node)
        // bind directive
        this.bindDirective(directive)

    }
    node.parentNode.removeChild(node)
}

/**
 *  Parse a directive name/value pair into one or more
 *  directive instances
 */
CompilerProto.parseDirective = function (name, value, el, multiple) {
    var compiler = this,
        definition = compiler.getOption('directives', name)
    if (definition) {
        // parse into AST-like objects
        var asts = Directive.parse(value)
        return multiple
            ? asts.map(build)
            : build(asts[0])
    }
    function build (ast) {
        return new Directive(name, ast, definition, compiler, el)
    }
}

/**
 *  Add a directive instance to the correct binding & viewmodel
 */
CompilerProto.bindDirective = function (directive, bindingOwner) {

    if (!directive) return

    // keep track of it so we can unbind() later
    this.dirs.push(directive)

    // for empty or literal directives, simply call its bind()
    // and we're done.
    if (directive.isEmpty || directive.isLiteral) {
        if (directive.bind) directive.bind()
        return
    }

    // otherwise, we got more work to do...
    var binding,
        compiler = bindingOwner || this,
        key      = directive.key

    if (directive.isExp) {
        // expression bindings are always created on current compiler
        binding = compiler.createBinding(key, directive)
    } else {
        // recursively locate which compiler owns the binding
        while (compiler) {
            if (compiler.hasKey(key)) {
                break
            } else {
                compiler = compiler.parent
            }
        }
        compiler = compiler || this
        binding = compiler.bindings[key] || compiler.createBinding(key)
    }
    binding.dirs.push(directive)
    directive.binding = binding

    var value = binding.val()
    // invoke bind hook if exists
    if (directive.bind) {
        directive.bind(value)
    }
    // set initial value
    directive.$update(value, true)
}

/**
 *  Create binding and attach getter/setter for a key to the viewmodel object
 */
CompilerProto.createBinding = function (key, directive) {

    utils.log('  created binding: ' + key)

    var compiler = this,
        methods  = compiler.options.methods,
        isExp    = directive && directive.isExp,
        isFn     = (directive && directive.isFn) || (methods && methods[key]),
        bindings = compiler.bindings,
        computed = compiler.options.computed,
        binding  = new Binding(compiler, key, isExp, isFn)

    if (isExp) {
        // expression bindings are anonymous
        compiler.defineExp(key, binding, directive)
    } else if (isFn) {
        bindings[key] = binding
        compiler.defineVmProp(key, binding, methods[key])
    } else {
        bindings[key] = binding
        if (binding.root) {
            // this is a root level binding. we need to define getter/setters for it.
            if (computed && computed[key]) {
                // computed property
                compiler.defineComputed(key, binding, computed[key])
            } else if (key.charAt(0) !== '$') {
                // normal property
                compiler.defineDataProp(key, binding)
            } else {
                // properties that start with $ are meta properties
                // they should be kept on the vm but not in the data object.
                compiler.defineVmProp(key, binding, compiler.data[key])
                delete compiler.data[key]
            }
        } else if (computed && computed[utils.baseKey(key)]) {
            // nested path on computed property
            compiler.defineExp(key, binding)
        } else {
            // ensure path in data so that computed properties that
            // access the path don't throw an error and can collect
            // dependencies
            Observer.ensurePath(compiler.data, key)
            var parentKey = key.slice(0, key.lastIndexOf('.'))
            if (!bindings[parentKey]) {
                // this is a nested value binding, but the binding for its parent
                // has not been created yet. We better create that one too.
                compiler.createBinding(parentKey)
            }
        }
    }
    return binding
}

/**
 *  Define the getter/setter to proxy a root-level
 *  data property on the VM
 */
CompilerProto.defineDataProp = function (key, binding) {
    var compiler = this,
        data     = compiler.data,
        ob       = data.__emitter__

    // make sure the key is present in data
    // so it can be observed
    if (!(hasOwn.call(data, key))) {
        data[key] = undefined
    }

    // if the data object is already observed, but the key
    // is not observed, we need to add it to the observed keys.
    if (ob && !(hasOwn.call(ob.values, key))) {
        Observer.convertKey(data, key)
    }

    binding.value = data[key]

    def(compiler.vm, key, {
        get: function () {
            return compiler.data[key]
        },
        set: function (val) {
            compiler.data[key] = val
        }
    })
}

/**
 *  Define a vm property, e.g. $index, $key, or mixin methods
 *  which are bindable but only accessible on the VM,
 *  not in the data.
 */
CompilerProto.defineVmProp = function (key, binding, value) {
    var ob = this.observer
    binding.value = value
    def(this.vm, key, {
        get: function () {
            if (Observer.shouldGet) ob.emit('get', key)
            return binding.value
        },
        set: function (val) {
            ob.emit('set', key, val)
        }
    })
}

/**
 *  Define an expression binding, which is essentially
 *  an anonymous computed property
 */
CompilerProto.defineExp = function (key, binding, directive) {
    var computedKey = directive && directive.computedKey,
        exp         = computedKey ? directive.expression : key,
        getter      = this.expCache[exp]
    if (!getter) {
        getter = this.expCache[exp] = ExpParser.parse(computedKey || key, this)
    }
    if (getter) {
        this.markComputed(binding, getter)
    }
}

/**
 *  Define a computed property on the VM
 */
CompilerProto.defineComputed = function (key, binding, value) {
    this.markComputed(binding, value)
    def(this.vm, key, {
        get: binding.value.$get,
        set: binding.value.$set
    })
}

/**
 *  Process a computed property binding
 *  so its getter/setter are bound to proper context
 */
CompilerProto.markComputed = function (binding, value) {
    binding.isComputed = true
    // bind the accessors to the vm
    if (binding.isFn) {
        binding.value = value
    } else {
        if (typeof value === 'function') {
            value = { $get: value }
        }
        binding.value = {
            $get: utils.bind(value.$get, this.vm),
            $set: value.$set
                ? utils.bind(value.$set, this.vm)
                : undefined
        }
    }
    // keep track for dep parsing later
    this.computed.push(binding)
}

/**
 *  Retrive an option from the compiler
 */
CompilerProto.getOption = function (type, id, silent) {
    var opts = this.options,
        parent = this.parent,
        globalAssets = config.globalAssets,
        res = (opts[type] && opts[type][id]) || (
            parent
                ? parent.getOption(type, id, silent)
                : globalAssets[type] && globalAssets[type][id]
        )
    if (!res && !silent && typeof id === 'string') {
        utils.warn('Unknown ' + type.slice(0, -1) + ': ' + id)
    }
    return res
}

/**
 *  Emit lifecycle events to trigger hooks
 */
CompilerProto.execHook = function (event) {
    event = 'hook:' + event
    this.observer.emit(event)
    this.emitter.emit(event)
}

/**
 *  Check if a compiler's data contains a keypath
 */
CompilerProto.hasKey = function (key) {
    var baseKey = utils.baseKey(key)
    return hasOwn.call(this.data, baseKey) ||
        hasOwn.call(this.vm, baseKey)
}

/**
 *  Do a one-time eval of a string that potentially
 *  includes bindings. It accepts additional raw data
 *  because we need to dynamically resolve v-component
 *  before a childVM is even compiled...
 */
CompilerProto.eval = function (exp, data) {
    var parsed = TextParser.parseAttr(exp)
    return parsed
        ? ExpParser.eval(parsed, this, data)
        : exp
}

/**
 *  Resolve a Component constructor for an element
 *  with the data to be used
 */
CompilerProto.resolveComponent = function (node, data, test) {

    // late require to avoid circular deps
    ViewModel = ViewModel || require('./viewmodel')

    var exp     = utils.attr(node, 'component'),
        tagName = node.tagName,
        id      = this.eval(exp, data),
        tagId   = (tagName.indexOf('-') > 0 && tagName.toLowerCase()),
        Ctor    = this.getOption('components', id || tagId, true)

    if (id && !Ctor) {
        utils.warn('Unknown component: ' + id)
    }

    return test
        ? exp === ''
            ? ViewModel
            : Ctor
        : Ctor || ViewModel
}

/**
 *  Unbind and remove element
 */
CompilerProto.destroy = function (noRemove) {

    // avoid being called more than once
    // this is irreversible!
    if (this.destroyed) return

    var compiler = this,
        i, j, key, dir, dirs, binding,
        vm          = compiler.vm,
        el          = compiler.el,
        directives  = compiler.dirs,
        computed    = compiler.computed,
        bindings    = compiler.bindings,
        children    = compiler.children,
        parent      = compiler.parent

    compiler.execHook('beforeDestroy')

    // unobserve data
    Observer.unobserve(compiler.data, '', compiler.observer)

    // destroy all children
    // do not remove their elements since the parent
    // may have transitions and the children may not
    i = children.length
    while (i--) {
        children[i].destroy(true)
    }

    // unbind all direcitves
    i = directives.length
    while (i--) {
        dir = directives[i]
        // if this directive is an instance of an external binding
        // e.g. a directive that refers to a variable on the parent VM
        // we need to remove it from that binding's directives
        // * empty and literal bindings do not have binding.
        if (dir.binding && dir.binding.compiler !== compiler) {
            dirs = dir.binding.dirs
            if (dirs) {
                j = dirs.indexOf(dir)
                if (j > -1) dirs.splice(j, 1)
            }
        }
        dir.$unbind()
    }

    // unbind all computed, anonymous bindings
    i = computed.length
    while (i--) {
        computed[i].unbind()
    }

    // unbind all keypath bindings
    for (key in bindings) {
        binding = bindings[key]
        if (binding) {
            binding.unbind()
        }
    }

    // remove self from parent
    if (parent) {
        j = parent.children.indexOf(compiler)
        if (j > -1) parent.children.splice(j, 1)
    }

    // finally remove dom element
    if (!noRemove) {
        if (el === document.body) {
            el.innerHTML = ''
        } else {
            vm.$remove()
        }
    }
    el.vue_vm = null

    compiler.destroyed = true
    // emit destroy hook
    compiler.execHook('afterDestroy')

    // finally, unregister all listeners
    compiler.observer.off()
    compiler.emitter.off()
}

// Helpers --------------------------------------------------------------------

/**
 *  shorthand for getting root compiler
 */
function getRoot (compiler) {
    while (compiler.parent) {
        compiler = compiler.parent
    }
    return compiler
}

module.exports = Compiler
},{"./binding":23,"./config":25,"./deps-parser":26,"./directive":27,"./emitter":38,"./exp-parser":39,"./observer":43,"./text-parser":44,"./utils":46,"./viewmodel":47}],25:[function(require,module,exports){
var TextParser = require('./text-parser')

module.exports = {
    prefix         : 'v',
    debug          : false,
    silent         : false,
    enterClass     : 'v-enter',
    leaveClass     : 'v-leave',
    interpolate    : true
}

Object.defineProperty(module.exports, 'delimiters', {
    get: function () {
        return TextParser.delimiters
    },
    set: function (delimiters) {
        TextParser.setDelimiters(delimiters)
    }
})
},{"./text-parser":44}],26:[function(require,module,exports){
var Emitter  = require('./emitter'),
    utils    = require('./utils'),
    Observer = require('./observer'),
    catcher  = new Emitter()

/**
 *  Auto-extract the dependencies of a computed property
 *  by recording the getters triggered when evaluating it.
 */
function catchDeps (binding) {
    if (binding.isFn) return
    utils.log('\n- ' + binding.key)
    var got = utils.hash()
    binding.deps = []
    catcher.on('get', function (dep) {
        var has = got[dep.key]
        if (
            // avoid duplicate bindings
            (has && has.compiler === dep.compiler) ||
            // avoid repeated items as dependency
            // only when the binding is from self or the parent chain
            (dep.compiler.repeat && !isParentOf(dep.compiler, binding.compiler))
        ) {
            return
        }
        got[dep.key] = dep
        utils.log('  - ' + dep.key)
        binding.deps.push(dep)
        dep.subs.push(binding)
    })
    binding.value.$get()
    catcher.off('get')
}

/**
 *  Test if A is a parent of or equals B
 */
function isParentOf (a, b) {
    while (b) {
        if (a === b) {
            return true
        }
        b = b.parent
    }
}

module.exports = {

    /**
     *  the observer that catches events triggered by getters
     */
    catcher: catcher,

    /**
     *  parse a list of computed property bindings
     */
    parse: function (bindings) {
        utils.log('\nparsing dependencies...')
        Observer.shouldGet = true
        bindings.forEach(catchDeps)
        Observer.shouldGet = false
        utils.log('\ndone.')
    }
    
}
},{"./emitter":38,"./observer":43,"./utils":46}],27:[function(require,module,exports){
var dirId           = 1,
    ARG_RE          = /^[\w\$-]+$/,
    FILTER_TOKEN_RE = /[^\s'"]+|'[^']+'|"[^"]+"/g,
    NESTING_RE      = /^\$(parent|root)\./,
    SINGLE_VAR_RE   = /^[\w\.$]+$/,
    QUOTE_RE        = /"/g,
    TextParser      = require('./text-parser')

/**
 *  Directive class
 *  represents a single directive instance in the DOM
 */
function Directive (name, ast, definition, compiler, el) {

    this.id             = dirId++
    this.name           = name
    this.compiler       = compiler
    this.vm             = compiler.vm
    this.el             = el
    this.computeFilters = false
    this.key            = ast.key
    this.arg            = ast.arg
    this.expression     = ast.expression

    var isEmpty = this.expression === ''

    // mix in properties from the directive definition
    if (typeof definition === 'function') {
        this[isEmpty ? 'bind' : 'update'] = definition
    } else {
        for (var prop in definition) {
            this[prop] = definition[prop]
        }
    }

    // empty expression, we're done.
    if (isEmpty || this.isEmpty) {
        this.isEmpty = true
        return
    }

    if (TextParser.Regex.test(this.key)) {
        this.key = compiler.eval(this.key)
        if (this.isLiteral) {
            this.expression = this.key
        }
    }

    var filters = ast.filters,
        filter, fn, i, l, computed
    if (filters) {
        this.filters = []
        for (i = 0, l = filters.length; i < l; i++) {
            filter = filters[i]
            fn = this.compiler.getOption('filters', filter.name)
            if (fn) {
                filter.apply = fn
                this.filters.push(filter)
                if (fn.computed) {
                    computed = true
                }
            }
        }
    }

    if (!this.filters || !this.filters.length) {
        this.filters = null
    }

    if (computed) {
        this.computedKey = Directive.inlineFilters(this.key, this.filters)
        this.filters = null
    }

    this.isExp =
        computed ||
        !SINGLE_VAR_RE.test(this.key) ||
        NESTING_RE.test(this.key)

}

var DirProto = Directive.prototype

/**
 *  called when a new value is set 
 *  for computed properties, this will only be called once
 *  during initialization.
 */
DirProto.$update = function (value, init) {
    if (this.$lock) return
    if (init || value !== this.value || (value && typeof value === 'object')) {
        this.value = value
        if (this.update) {
            this.update(
                this.filters && !this.computeFilters
                    ? this.$applyFilters(value)
                    : value,
                init
            )
        }
    }
}

/**
 *  pipe the value through filters
 */
DirProto.$applyFilters = function (value) {
    var filtered = value, filter
    for (var i = 0, l = this.filters.length; i < l; i++) {
        filter = this.filters[i]
        filtered = filter.apply.apply(this.vm, [filtered].concat(filter.args))
    }
    return filtered
}

/**
 *  Unbind diretive
 */
DirProto.$unbind = function () {
    // this can be called before the el is even assigned...
    if (!this.el || !this.vm) return
    if (this.unbind) this.unbind()
    this.vm = this.el = this.binding = this.compiler = null
}

// Exposed static methods -----------------------------------------------------

/**
 *  Parse a directive string into an Array of
 *  AST-like objects representing directives
 */
Directive.parse = function (str) {

    var inSingle = false,
        inDouble = false,
        curly    = 0,
        square   = 0,
        paren    = 0,
        begin    = 0,
        argIndex = 0,
        dirs     = [],
        dir      = {},
        lastFilterIndex = 0,
        arg

    for (var c, i = 0, l = str.length; i < l; i++) {
        c = str.charAt(i)
        if (inSingle) {
            // check single quote
            if (c === "'") inSingle = !inSingle
        } else if (inDouble) {
            // check double quote
            if (c === '"') inDouble = !inDouble
        } else if (c === ',' && !paren && !curly && !square) {
            // reached the end of a directive
            pushDir()
            // reset & skip the comma
            dir = {}
            begin = argIndex = lastFilterIndex = i + 1
        } else if (c === ':' && !dir.key && !dir.arg) {
            // argument
            arg = str.slice(begin, i).trim()
            if (ARG_RE.test(arg)) {
                argIndex = i + 1
                dir.arg = arg
            }
        } else if (c === '|' && str.charAt(i + 1) !== '|' && str.charAt(i - 1) !== '|') {
            if (dir.key === undefined) {
                // first filter, end of key
                lastFilterIndex = i + 1
                dir.key = str.slice(argIndex, i).trim()
            } else {
                // already has filter
                pushFilter()
            }
        } else if (c === '"') {
            inDouble = true
        } else if (c === "'") {
            inSingle = true
        } else if (c === '(') {
            paren++
        } else if (c === ')') {
            paren--
        } else if (c === '[') {
            square++
        } else if (c === ']') {
            square--
        } else if (c === '{') {
            curly++
        } else if (c === '}') {
            curly--
        }
    }
    if (i === 0 || begin !== i) {
        pushDir()
    }

    function pushDir () {
        dir.expression = str.slice(begin, i).trim()
        if (dir.key === undefined) {
            dir.key = str.slice(argIndex, i).trim()
        } else if (lastFilterIndex !== begin) {
            pushFilter()
        }
        if (i === 0 || dir.key) {
            dirs.push(dir)
        }
    }

    function pushFilter () {
        var exp = str.slice(lastFilterIndex, i).trim(),
            filter
        if (exp) {
            filter = {}
            var tokens = exp.match(FILTER_TOKEN_RE)
            filter.name = tokens[0]
            filter.args = tokens.length > 1 ? tokens.slice(1) : null
        }
        if (filter) {
            (dir.filters = dir.filters || []).push(filter)
        }
        lastFilterIndex = i + 1
    }

    return dirs
}

/**
 *  Inline computed filters so they become part
 *  of the expression
 */
Directive.inlineFilters = function (key, filters) {
    var args, filter
    for (var i = 0, l = filters.length; i < l; i++) {
        filter = filters[i]
        args = filter.args
            ? ',"' + filter.args.map(escapeQuote).join('","') + '"'
            : ''
        key = 'this.$compiler.getOption("filters", "' +
                filter.name +
            '").call(this,' +
                key + args +
            ')'
    }
    return key
}

/**
 *  Convert double quotes to single quotes
 *  so they don't mess up the generated function body
 */
function escapeQuote (v) {
    return v.indexOf('"') > -1
        ? v.replace(QUOTE_RE, '\'')
        : v
}

module.exports = Directive
},{"./text-parser":44}],28:[function(require,module,exports){
var utils = require('../utils'),
    slice = [].slice

/**
 *  Binding for innerHTML
 */
module.exports = {

    bind: function () {
        // a comment node means this is a binding for
        // {{{ inline unescaped html }}}
        if (this.el.nodeType === 8) {
            // hold nodes
            this.nodes = []
        }
    },

    update: function (value) {
        value = utils.guard(value)
        if (this.nodes) {
            this.swap(value)
        } else {
            this.el.innerHTML = value
        }
    },

    swap: function (value) {
        var parent = this.el.parentNode,
            nodes  = this.nodes,
            i      = nodes.length
        // remove old nodes
        while (i--) {
            parent.removeChild(nodes[i])
        }
        // convert new value to a fragment
        var frag = utils.toFragment(value)
        // save a reference to these nodes so we can remove later
        this.nodes = slice.call(frag.childNodes)
        parent.insertBefore(frag, this.el)
    }
}
},{"../utils":46}],29:[function(require,module,exports){
var utils    = require('../utils')

/**
 *  Manages a conditional child VM
 */
module.exports = {

    bind: function () {
        
        this.parent = this.el.parentNode
        this.ref    = document.createComment('vue-if')
        this.Ctor   = this.compiler.resolveComponent(this.el)

        // insert ref
        this.parent.insertBefore(this.ref, this.el)
        this.parent.removeChild(this.el)

        if (utils.attr(this.el, 'view')) {
            utils.warn(
                'Conflict: v-if cannot be used together with v-view. ' +
                'Just set v-view\'s binding value to empty string to empty it.'
            )
        }
        if (utils.attr(this.el, 'repeat')) {
            utils.warn(
                'Conflict: v-if cannot be used together with v-repeat. ' +
                'Use `v-show` or the `filterBy` filter instead.'
            )
        }
    },

    update: function (value) {

        if (!value) {
            this.unbind()
        } else if (!this.childVM) {
            this.childVM = new this.Ctor({
                el: this.el.cloneNode(true),
                parent: this.vm
            })
            if (this.compiler.init) {
                this.parent.insertBefore(this.childVM.$el, this.ref)
            } else {
                this.childVM.$before(this.ref)
            }
        }
        
    },

    unbind: function () {
        if (this.childVM) {
            this.childVM.$destroy()
            this.childVM = null
        }
    }
}
},{"../utils":46}],30:[function(require,module,exports){
var utils      = require('../utils'),
    config     = require('../config'),
    transition = require('../transition'),
    directives = module.exports = utils.hash()

/**
 *  Nest and manage a Child VM
 */
directives.component = {
    isLiteral: true,
    bind: function () {
        if (!this.el.vue_vm) {
            this.childVM = new this.Ctor({
                el: this.el,
                parent: this.vm
            })
        }
    },
    unbind: function () {
        if (this.childVM) {
            this.childVM.$destroy()
        }
    }
}

/**
 *  Binding HTML attributes
 */
directives.attr = {
    bind: function () {
        var params = this.vm.$options.paramAttributes
        this.isParam = params && params.indexOf(this.arg) > -1
    },
    update: function (value) {
        if (value || value === 0) {
            this.el.setAttribute(this.arg, value)
        } else {
            this.el.removeAttribute(this.arg)
        }
        if (this.isParam) {
            this.vm[this.arg] = utils.checkNumber(value)
        }
    }
}

/**
 *  Binding textContent
 */
directives.text = {
    bind: function () {
        this.attr = this.el.nodeType === 3
            ? 'nodeValue'
            : 'textContent'
    },
    update: function (value) {
        this.el[this.attr] = utils.guard(value)
    }
}

/**
 *  Binding CSS display property
 */
directives.show = function (value) {
    var el = this.el,
        target = value ? '' : 'none',
        change = function () {
            el.style.display = target
        }
    transition(el, value ? 1 : -1, change, this.compiler)
}

/**
 *  Binding CSS classes
 */
directives['class'] = function (value) {
    if (this.arg) {
        utils[value ? 'addClass' : 'removeClass'](this.el, this.arg)
    } else {
        if (this.lastVal) {
            utils.removeClass(this.el, this.lastVal)
        }
        if (value) {
            utils.addClass(this.el, value)
            this.lastVal = value
        }
    }
}

/**
 *  Only removed after the owner VM is ready
 */
directives.cloak = {
    isEmpty: true,
    bind: function () {
        var el = this.el
        this.compiler.observer.once('hook:ready', function () {
            el.removeAttribute(config.prefix + '-cloak')
        })
    }
}

/**
 *  Store a reference to self in parent VM's $
 */
directives.ref = {
    isLiteral: true,
    bind: function () {
        var id = this.expression
        if (id) {
            this.vm.$parent.$[id] = this.vm
        }
    },
    unbind: function () {
        var id = this.expression
        if (id) {
            delete this.vm.$parent.$[id]
        }
    }
}

directives.on      = require('./on')
directives.repeat  = require('./repeat')
directives.model   = require('./model')
directives['if']   = require('./if')
directives['with'] = require('./with')
directives.html    = require('./html')
directives.style   = require('./style')
directives.partial = require('./partial')
directives.view    = require('./view')
},{"../config":25,"../transition":45,"../utils":46,"./html":28,"./if":29,"./model":31,"./on":32,"./partial":33,"./repeat":34,"./style":35,"./view":36,"./with":37}],31:[function(require,module,exports){
var utils = require('../utils'),
    isIE9 = navigator.userAgent.indexOf('MSIE 9.0') > 0,
    filter = [].filter

/**
 *  Returns an array of values from a multiple select
 */
function getMultipleSelectOptions (select) {
    return filter
        .call(select.options, function (option) {
            return option.selected
        })
        .map(function (option) {
            return option.value || option.text
        })
}

/**
 *  Two-way binding for form input elements
 */
module.exports = {

    bind: function () {

        var self = this,
            el   = self.el,
            type = el.type,
            tag  = el.tagName

        self.lock = false
        self.ownerVM = self.binding.compiler.vm

        // determine what event to listen to
        self.event =
            (self.compiler.options.lazy ||
            tag === 'SELECT' ||
            type === 'checkbox' || type === 'radio')
                ? 'change'
                : 'input'

        // determine the attribute to change when updating
        self.attr = type === 'checkbox'
            ? 'checked'
            : (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA')
                ? 'value'
                : 'innerHTML'

        // select[multiple] support
        if(tag === 'SELECT' && el.hasAttribute('multiple')) {
            this.multi = true
        }

        var compositionLock = false
        self.cLock = function () {
            compositionLock = true
        }
        self.cUnlock = function () {
            compositionLock = false
        }
        el.addEventListener('compositionstart', this.cLock)
        el.addEventListener('compositionend', this.cUnlock)

        // attach listener
        self.set = self.filters
            ? function () {
                if (compositionLock) return
                // if this directive has filters
                // we need to let the vm.$set trigger
                // update() so filters are applied.
                // therefore we have to record cursor position
                // so that after vm.$set changes the input
                // value we can put the cursor back at where it is
                var cursorPos
                try { cursorPos = el.selectionStart } catch (e) {}

                self._set()

                // since updates are async
                // we need to reset cursor position async too
                utils.nextTick(function () {
                    if (cursorPos !== undefined) {
                        el.setSelectionRange(cursorPos, cursorPos)
                    }
                })
            }
            : function () {
                if (compositionLock) return
                // no filters, don't let it trigger update()
                self.lock = true

                self._set()

                utils.nextTick(function () {
                    self.lock = false
                })
            }
        el.addEventListener(self.event, self.set)

        // fix shit for IE9
        // since it doesn't fire input on backspace / del / cut
        if (isIE9) {
            self.onCut = function () {
                // cut event fires before the value actually changes
                utils.nextTick(function () {
                    self.set()
                })
            }
            self.onDel = function (e) {
                if (e.keyCode === 46 || e.keyCode === 8) {
                    self.set()
                }
            }
            el.addEventListener('cut', self.onCut)
            el.addEventListener('keyup', self.onDel)
        }
    },

    _set: function () {
        this.ownerVM.$set(
            this.key, this.multi
                ? getMultipleSelectOptions(this.el)
                : this.el[this.attr]
        )
    },

    update: function (value, init) {
        /* jshint eqeqeq: false */
        // sync back inline value if initial data is undefined
        if (init && value === undefined) {
            return this._set()
        }
        if (this.lock) return
        var el = this.el
        if (el.tagName === 'SELECT') { // select dropdown
            el.selectedIndex = -1
            if(this.multi && Array.isArray(value)) {
                value.forEach(this.updateSelect, this)
            } else {
                this.updateSelect(value)
            }
        } else if (el.type === 'radio') { // radio button
            el.checked = value == el.value
        } else if (el.type === 'checkbox') { // checkbox
            el.checked = !!value
        } else {
            el[this.attr] = utils.guard(value)
        }
    },

    updateSelect: function (value) {
        /* jshint eqeqeq: false */
        // setting <select>'s value in IE9 doesn't work
        // we have to manually loop through the options
        var options = this.el.options,
            i = options.length
        while (i--) {
            if (options[i].value == value) {
                options[i].selected = true
                break
            }
        }
    },

    unbind: function () {
        var el = this.el
        el.removeEventListener(this.event, this.set)
        el.removeEventListener('compositionstart', this.cLock)
        el.removeEventListener('compositionend', this.cUnlock)
        if (isIE9) {
            el.removeEventListener('cut', this.onCut)
            el.removeEventListener('keyup', this.onDel)
        }
    }
}
},{"../utils":46}],32:[function(require,module,exports){
var utils    = require('../utils')

/**
 *  Binding for event listeners
 */
module.exports = {

    isFn: true,

    bind: function () {
        this.context = this.binding.isExp
            ? this.vm
            : this.binding.compiler.vm
        if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
            var self = this
            this.iframeBind = function () {
                self.el.contentWindow.addEventListener(self.arg, self.handler)
            }
            this.el.addEventListener('load', this.iframeBind)
        }
    },

    update: function (handler) {
        if (typeof handler !== 'function') {
            utils.warn('Directive "v-on:' + this.expression + '" expects a method.')
            return
        }
        this.reset()
        var vm = this.vm,
            context = this.context
        this.handler = function (e) {
            e.targetVM = vm
            context.$event = e
            var res = handler.call(context, e)
            context.$event = null
            return res
        }
        if (this.iframeBind) {
            this.iframeBind()
        } else {
            this.el.addEventListener(this.arg, this.handler)
        }
    },

    reset: function () {
        var el = this.iframeBind
            ? this.el.contentWindow
            : this.el
        el.removeEventListener(this.arg, this.handler)
    },

    unbind: function () {
        this.reset()
        this.el.removeEventListener('load', this.iframeBind)
    }
}
},{"../utils":46}],33:[function(require,module,exports){
var utils = require('../utils')

/**
 *  Binding for partials
 */
module.exports = {

    isLiteral: true,

    bind: function () {

        var id = this.expression
        if (!id) return

        var el       = this.el,
            compiler = this.compiler,
            partial  = compiler.getOption('partials', id)

        if (!partial) {
            if (id === 'yield') {
                utils.warn('{{>yield}} syntax has been deprecated. Use <content> tag instead.')
            }
            return
        }

        partial = partial.cloneNode(true)

        // comment ref node means inline partial
        if (el.nodeType === 8) {

            // keep a ref for the partial's content nodes
            var nodes = [].slice.call(partial.childNodes),
                parent = el.parentNode
            parent.insertBefore(partial, el)
            parent.removeChild(el)
            // compile partial after appending, because its children's parentNode
            // will change from the fragment to the correct parentNode.
            // This could affect directives that need access to its element's parentNode.
            nodes.forEach(compiler.compile, compiler)

        } else {

            // just set innerHTML...
            el.innerHTML = ''
            el.appendChild(partial)

        }
    }

}
},{"../utils":46}],34:[function(require,module,exports){
var utils      = require('../utils'),
    config     = require('../config')

/**
 *  Binding that manages VMs based on an Array
 */
module.exports = {

    bind: function () {

        this.identifier = '$r' + this.id

        // a hash to cache the same expressions on repeated instances
        // so they don't have to be compiled for every single instance
        this.expCache = utils.hash()

        var el   = this.el,
            ctn  = this.container = el.parentNode

        // extract child Id, if any
        this.childId = this.compiler.eval(utils.attr(el, 'ref'))

        // create a comment node as a reference node for DOM insertions
        this.ref = document.createComment(config.prefix + '-repeat-' + this.key)
        ctn.insertBefore(this.ref, el)
        ctn.removeChild(el)

        this.collection = null
        this.vms = null

    },

    update: function (collection) {

        if (!Array.isArray(collection)) {
            if (utils.isObject(collection)) {
                collection = utils.objectToArray(collection)
            } else {
                utils.warn('v-repeat only accepts Array or Object values.')
            }
        }

        // keep reference of old data and VMs
        // so we can reuse them if possible
        this.oldVMs = this.vms
        this.oldCollection = this.collection
        collection = this.collection = collection || []

        var isObject = collection[0] && utils.isObject(collection[0])
        this.vms = this.oldCollection
            ? this.diff(collection, isObject)
            : this.init(collection, isObject)

        if (this.childId) {
            this.vm.$[this.childId] = this.vms
        }

    },

    init: function (collection, isObject) {
        var vm, vms = []
        for (var i = 0, l = collection.length; i < l; i++) {
            vm = this.build(collection[i], i, isObject)
            vms.push(vm)
            if (this.compiler.init) {
                this.container.insertBefore(vm.$el, this.ref)
            } else {
                vm.$before(this.ref)
            }
        }
        return vms
    },

    /**
     *  Diff the new array with the old
     *  and determine the minimum amount of DOM manipulations.
     */
    diff: function (newCollection, isObject) {

        var i, l, item, vm,
            oldIndex,
            targetNext,
            currentNext,
            nextEl,
            ctn    = this.container,
            oldVMs = this.oldVMs,
            vms    = []

        vms.length = newCollection.length

        // first pass, collect new reused and new created
        for (i = 0, l = newCollection.length; i < l; i++) {
            item = newCollection[i]
            if (isObject) {
                item.$index = i
                if (item.__emitter__ && item.__emitter__[this.identifier]) {
                    // this piece of data is being reused.
                    // record its final position in reused vms
                    item.$reused = true
                } else {
                    vms[i] = this.build(item, i, isObject)
                }
            } else {
                // we can't attach an identifier to primitive values
                // so have to do an indexOf...
                oldIndex = indexOf(oldVMs, item)
                if (oldIndex > -1) {
                    // record the position on the existing vm
                    oldVMs[oldIndex].$reused = true
                    oldVMs[oldIndex].$data.$index = i
                } else {
                    vms[i] = this.build(item, i, isObject)
                }
            }
        }

        // second pass, collect old reused and destroy unused
        for (i = 0, l = oldVMs.length; i < l; i++) {
            vm = oldVMs[i]
            item = this.arg
                ? vm.$data[this.arg]
                : vm.$data
            if (item.$reused) {
                vm.$reused = true
                delete item.$reused
            }
            if (vm.$reused) {
                // update the index to latest
                vm.$index = item.$index
                // the item could have had a new key
                if (item.$key && item.$key !== vm.$key) {
                    vm.$key = item.$key
                }
                vms[vm.$index] = vm
            } else {
                // this one can be destroyed.
                if (item.__emitter__) {
                    delete item.__emitter__[this.identifier]
                }
                vm.$destroy()
            }
        }

        // final pass, move/insert DOM elements
        i = vms.length
        while (i--) {
            vm = vms[i]
            item = vm.$data
            targetNext = vms[i + 1]
            if (vm.$reused) {
                nextEl = vm.$el.nextSibling
                // destroyed VMs' element might still be in the DOM
                // due to transitions
                while (!nextEl.vue_vm && nextEl !== this.ref) {
                    nextEl = nextEl.nextSibling
                }
                currentNext = nextEl.vue_vm
                if (currentNext !== targetNext) {
                    if (!targetNext) {
                        ctn.insertBefore(vm.$el, this.ref)
                    } else {
                        nextEl = targetNext.$el
                        // new VMs' element might not be in the DOM yet
                        // due to transitions
                        while (!nextEl.parentNode) {
                            targetNext = vms[nextEl.vue_vm.$index + 1]
                            nextEl = targetNext
                                ? targetNext.$el
                                : this.ref
                        }
                        ctn.insertBefore(vm.$el, nextEl)
                    }
                }
                delete vm.$reused
                delete item.$index
                delete item.$key
            } else { // a new vm
                vm.$before(targetNext ? targetNext.$el : this.ref)
            }
        }

        return vms
    },

    build: function (data, index, isObject) {

        // wrap non-object values
        var raw, alias,
            wrap = !isObject || this.arg
        if (wrap) {
            raw = data
            alias = this.arg || '$value'
            data = {}
            data[alias] = raw
        }
        data.$index = index

        var el = this.el.cloneNode(true),
            Ctor = this.compiler.resolveComponent(el, data),
            vm = new Ctor({
                el: el,
                data: data,
                parent: this.vm,
                compilerOptions: {
                    repeat: true,
                    expCache: this.expCache
                }
            })

        if (isObject) {
            // attach an ienumerable identifier to the raw data
            (raw || data).__emitter__[this.identifier] = true
        }

        return vm

    },

    unbind: function () {
        if (this.childId) {
            delete this.vm.$[this.childId]
        }
        if (this.vms) {
            var i = this.vms.length
            while (i--) {
                this.vms[i].$destroy()
            }
        }
    }
}

// Helpers --------------------------------------------------------------------

/**
 *  Find an object or a wrapped data object
 *  from an Array
 */
function indexOf (vms, obj) {
    for (var vm, i = 0, l = vms.length; i < l; i++) {
        vm = vms[i]
        if (!vm.$reused && vm.$value === obj) {
            return i
        }
    }
    return -1
}
},{"../config":25,"../utils":46}],35:[function(require,module,exports){
var prefixes = ['-webkit-', '-moz-', '-ms-']

/**
 *  Binding for CSS styles
 */
module.exports = {

    bind: function () {
        var prop = this.arg
        if (!prop) return
        if (prop.charAt(0) === '$') {
            // properties that start with $ will be auto-prefixed
            prop = prop.slice(1)
            this.prefixed = true
        }
        this.prop = prop
    },

    update: function (value) {
        var prop = this.prop
        if (prop) {
            var isImportant = value.slice(-10) === '!important'
                ? 'important'
                : ''
            if (isImportant) {
                value = value.slice(0, -10).trim()
            }
            this.el.style.setProperty(prop, value, isImportant)
            if (this.prefixed) {
                var i = prefixes.length
                while (i--) {
                    this.el.style.setProperty(prefixes[i] + prop, value, isImportant)
                }
            }
        } else {
            this.el.style.cssText = value
        }
    }

}
},{}],36:[function(require,module,exports){
/**
 *  Manages a conditional child VM using the
 *  binding's value as the component ID.
 */
module.exports = {

    bind: function () {

        // track position in DOM with a ref node
        var el       = this.raw = this.el,
            parent   = el.parentNode,
            ref      = this.ref = document.createComment('v-view')
        parent.insertBefore(ref, el)
        parent.removeChild(el)

        // cache original content
        /* jshint boss: true */
        var node,
            frag = this.inner = document.createElement('div')
        while (node = el.firstChild) {
            frag.appendChild(node)
        }

    },

    update: function(value) {

        this.unbind()

        var Ctor  = this.compiler.getOption('components', value)
        if (!Ctor) return

        this.childVM = new Ctor({
            el: this.raw.cloneNode(true),
            parent: this.vm,
            compilerOptions: {
                rawContent: this.inner.cloneNode(true)
            }
        })

        this.el = this.childVM.$el
        if (this.compiler.init) {
            this.ref.parentNode.insertBefore(this.el, this.ref)
        } else {
            this.childVM.$before(this.ref)
        }

    },

    unbind: function() {
        if (this.childVM) {
            this.childVM.$destroy()
        }
    }

}
},{}],37:[function(require,module,exports){
var utils = require('../utils')

/**
 *  Binding for inheriting data from parent VMs.
 */
module.exports = {

    bind: function () {

        var self      = this,
            childKey  = self.arg,
            parentKey = self.key,
            compiler  = self.compiler,
            owner     = self.binding.compiler

        if (compiler === owner) {
            this.alone = true
            return
        }

        if (childKey) {
            if (!compiler.bindings[childKey]) {
                compiler.createBinding(childKey)
            }
            // sync changes on child back to parent
            compiler.observer.on('change:' + childKey, function (val) {
                if (compiler.init) return
                if (!self.lock) {
                    self.lock = true
                    utils.nextTick(function () {
                        self.lock = false
                    })
                }
                owner.vm.$set(parentKey, val)
            })
        }
    },

    update: function (value) {
        // sync from parent
        if (!this.alone && !this.lock) {
            if (this.arg) {
                this.vm.$set(this.arg, value)
            } else if (this.vm.$data !== value) {
                this.vm.$data = value
            }
        }
    }

}
},{"../utils":46}],38:[function(require,module,exports){
var slice = [].slice

function Emitter (ctx) {
    this._ctx = ctx || this
}

var EmitterProto = Emitter.prototype

EmitterProto.on = function (event, fn) {
    this._cbs = this._cbs || {}
    ;(this._cbs[event] = this._cbs[event] || [])
        .push(fn)
    return this
}

EmitterProto.once = function (event, fn) {
    var self = this
    this._cbs = this._cbs || {}

    function on () {
        self.off(event, on)
        fn.apply(this, arguments)
    }

    on.fn = fn
    this.on(event, on)
    return this
}

EmitterProto.off = function (event, fn) {
    this._cbs = this._cbs || {}

    // all
    if (!arguments.length) {
        this._cbs = {}
        return this
    }

    // specific event
    var callbacks = this._cbs[event]
    if (!callbacks) return this

    // remove all handlers
    if (arguments.length === 1) {
        delete this._cbs[event]
        return this
    }

    // remove specific handler
    var cb
    for (var i = 0; i < callbacks.length; i++) {
        cb = callbacks[i]
        if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1)
            break
        }
    }
    return this
}

/**
 *  The internal, faster emit with fixed amount of arguments
 *  using Function.call
 */
EmitterProto.emit = function (event, a, b, c) {
    this._cbs = this._cbs || {}
    var callbacks = this._cbs[event]

    if (callbacks) {
        callbacks = callbacks.slice(0)
        for (var i = 0, len = callbacks.length; i < len; i++) {
            callbacks[i].call(this._ctx, a, b, c)
        }
    }

    return this
}

/**
 *  The external emit using Function.apply
 */
EmitterProto.applyEmit = function (event) {
    this._cbs = this._cbs || {}
    var callbacks = this._cbs[event], args

    if (callbacks) {
        callbacks = callbacks.slice(0)
        args = slice.call(arguments, 1)
        for (var i = 0, len = callbacks.length; i < len; i++) {
            callbacks[i].apply(this._ctx, args)
        }
    }

    return this
}

module.exports = Emitter
},{}],39:[function(require,module,exports){
var utils           = require('./utils'),
    STR_SAVE_RE     = /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g,
    STR_RESTORE_RE  = /"(\d+)"/g,
    NEWLINE_RE      = /\n/g,
    CTOR_RE         = new RegExp('constructor'.split('').join('[\'"+, ]*')),
    UNICODE_RE      = /\\u\d\d\d\d/

// Variable extraction scooped from https://github.com/RubyLouvre/avalon

var KEYWORDS =
        // keywords
        'break,case,catch,continue,debugger,default,delete,do,else,false' +
        ',finally,for,function,if,in,instanceof,new,null,return,switch,this' +
        ',throw,true,try,typeof,var,void,while,with,undefined' +
        // reserved
        ',abstract,boolean,byte,char,class,const,double,enum,export,extends' +
        ',final,float,goto,implements,import,int,interface,long,native' +
        ',package,private,protected,public,short,static,super,synchronized' +
        ',throws,transient,volatile' +
        // ECMA 5 - use strict
        ',arguments,let,yield' +
        // allow using Math in expressions
        ',Math',
        
    KEYWORDS_RE = new RegExp(["\\b" + KEYWORDS.replace(/,/g, '\\b|\\b') + "\\b"].join('|'), 'g'),
    REMOVE_RE   = /\/\*(?:.|\n)*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|'[^']*'|"[^"]*"|[\s\t\n]*\.[\s\t\n]*[$\w\.]+|[\{,]\s*[\w\$_]+\s*:/g,
    SPLIT_RE    = /[^\w$]+/g,
    NUMBER_RE   = /\b\d[^,]*/g,
    BOUNDARY_RE = /^,+|,+$/g

/**
 *  Strip top level variable names from a snippet of JS expression
 */
function getVariables (code) {
    code = code
        .replace(REMOVE_RE, '')
        .replace(SPLIT_RE, ',')
        .replace(KEYWORDS_RE, '')
        .replace(NUMBER_RE, '')
        .replace(BOUNDARY_RE, '')
    return code
        ? code.split(/,+/)
        : []
}

/**
 *  A given path could potentially exist not on the
 *  current compiler, but up in the parent chain somewhere.
 *  This function generates an access relationship string
 *  that can be used in the getter function by walking up
 *  the parent chain to check for key existence.
 *
 *  It stops at top parent if no vm in the chain has the
 *  key. It then creates any missing bindings on the
 *  final resolved vm.
 */
function traceScope (path, compiler, data) {
    var rel  = '',
        dist = 0,
        self = compiler

    if (data && utils.get(data, path) !== undefined) {
        // hack: temporarily attached data
        return '$temp.'
    }

    while (compiler) {
        if (compiler.hasKey(path)) {
            break
        } else {
            compiler = compiler.parent
            dist++
        }
    }
    if (compiler) {
        while (dist--) {
            rel += '$parent.'
        }
        if (!compiler.bindings[path] && path.charAt(0) !== '$') {
            compiler.createBinding(path)
        }
    } else {
        self.createBinding(path)
    }
    return rel
}

/**
 *  Create a function from a string...
 *  this looks like evil magic but since all variables are limited
 *  to the VM's data it's actually properly sandboxed
 */
function makeGetter (exp, raw) {
    var fn
    try {
        fn = new Function(exp)
    } catch (e) {
        utils.warn('Error parsing expression: ' + raw)
    }
    return fn
}

/**
 *  Escape a leading dollar sign for regex construction
 */
function escapeDollar (v) {
    return v.charAt(0) === '$'
        ? '\\' + v
        : v
}

/**
 *  Parse and return an anonymous computed property getter function
 *  from an arbitrary expression, together with a list of paths to be
 *  created as bindings.
 */
exports.parse = function (exp, compiler, data) {
    // unicode and 'constructor' are not allowed for XSS security.
    if (UNICODE_RE.test(exp) || CTOR_RE.test(exp)) {
        utils.warn('Unsafe expression: ' + exp)
        return
    }
    // extract variable names
    var vars = getVariables(exp)
    if (!vars.length) {
        return makeGetter('return ' + exp, exp)
    }
    vars = utils.unique(vars)

    var accessors = '',
        has       = utils.hash(),
        strings   = [],
        // construct a regex to extract all valid variable paths
        // ones that begin with "$" are particularly tricky
        // because we can't use \b for them
        pathRE = new RegExp(
            "[^$\\w\\.](" +
            vars.map(escapeDollar).join('|') +
            ")[$\\w\\.]*\\b", 'g'
        ),
        body = (' ' + exp)
            .replace(STR_SAVE_RE, saveStrings)
            .replace(pathRE, replacePath)
            .replace(STR_RESTORE_RE, restoreStrings)

    body = accessors + 'return ' + body

    function saveStrings (str) {
        var i = strings.length
        // escape newlines in strings so the expression
        // can be correctly evaluated
        strings[i] = str.replace(NEWLINE_RE, '\\n')
        return '"' + i + '"'
    }

    function replacePath (path) {
        // keep track of the first char
        var c = path.charAt(0)
        path = path.slice(1)
        var val = 'this.' + traceScope(path, compiler, data) + path
        if (!has[path]) {
            accessors += val + ';'
            has[path] = 1
        }
        // don't forget to put that first char back
        return c + val
    }

    function restoreStrings (str, i) {
        return strings[i]
    }

    return makeGetter(body, exp)
}

/**
 *  Evaluate an expression in the context of a compiler.
 *  Accepts additional data.
 */
exports.eval = function (exp, compiler, data) {
    var getter = exports.parse(exp, compiler, data), res
    if (getter) {
        // hack: temporarily attach the additional data so
        // it can be accessed in the getter
        compiler.vm.$temp = data
        res = getter.call(compiler.vm)
        delete compiler.vm.$temp
    }
    return res
}
},{"./utils":46}],40:[function(require,module,exports){
var utils    = require('./utils'),
    get      = utils.get,
    slice    = [].slice,
    QUOTE_RE = /^'.*'$/,
    filters  = module.exports = utils.hash()

/**
 *  'abc' => 'Abc'
 */
filters.capitalize = function (value) {
    if (!value && value !== 0) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
}

/**
 *  'abc' => 'ABC'
 */
filters.uppercase = function (value) {
    return (value || value === 0)
        ? value.toString().toUpperCase()
        : ''
}

/**
 *  'AbC' => 'abc'
 */
filters.lowercase = function (value) {
    return (value || value === 0)
        ? value.toString().toLowerCase()
        : ''
}

/**
 *  12345 => $12,345.00
 */
filters.currency = function (value, sign) {
    if (!value && value !== 0) return ''
    sign = sign || '$'
    var s = Math.floor(value).toString(),
        i = s.length % 3,
        h = i > 0 ? (s.slice(0, i) + (s.length > 3 ? ',' : '')) : '',
        f = '.' + value.toFixed(2).slice(-2)
    return sign + h + s.slice(i).replace(/(\d{3})(?=\d)/g, '$1,') + f
}

/**
 *  args: an array of strings corresponding to
 *  the single, double, triple ... forms of the word to
 *  be pluralized. When the number to be pluralized
 *  exceeds the length of the args, it will use the last
 *  entry in the array.
 *
 *  e.g. ['single', 'double', 'triple', 'multiple']
 */
filters.pluralize = function (value) {
    var args = slice.call(arguments, 1)
    return args.length > 1
        ? (args[value - 1] || args[args.length - 1])
        : (args[value - 1] || args[0] + 's')
}

/**
 *  A special filter that takes a handler function,
 *  wraps it so it only gets triggered on specific keypresses.
 *
 *  v-on only
 */

var keyCodes = {
    enter    : 13,
    tab      : 9,
    'delete' : 46,
    up       : 38,
    left     : 37,
    right    : 39,
    down     : 40,
    esc      : 27
}

filters.key = function (handler, key) {
    if (!handler) return
    var code = keyCodes[key]
    if (!code) {
        code = parseInt(key, 10)
    }
    return function (e) {
        if (e.keyCode === code) {
            return handler.call(this, e)
        }
    }
}

/**
 *  Filter filter for v-repeat
 */
filters.filterBy = function (arr, searchKey, delimiter, dataKey) {

    // allow optional `in` delimiter
    // because why not
    if (delimiter && delimiter !== 'in') {
        dataKey = delimiter
    }

    // get the search string
    var search = stripQuotes(searchKey) || this.$get(searchKey)
    if (!search) return arr
    search = search.toLowerCase()

    // get the optional dataKey
    dataKey = dataKey && (stripQuotes(dataKey) || this.$get(dataKey))

    // convert object to array
    if (!Array.isArray(arr)) {
        arr = utils.objectToArray(arr)
    }

    return arr.filter(function (item) {
        return dataKey
            ? contains(get(item, dataKey), search)
            : contains(item, search)
    })

}

filters.filterBy.computed = true

/**
 *  Sort fitler for v-repeat
 */
filters.orderBy = function (arr, sortKey, reverseKey) {

    var key = stripQuotes(sortKey) || this.$get(sortKey)
    if (!key) return arr

    // convert object to array
    if (!Array.isArray(arr)) {
        arr = utils.objectToArray(arr)
    }

    var order = 1
    if (reverseKey) {
        if (reverseKey === '-1') {
            order = -1
        } else if (reverseKey.charAt(0) === '!') {
            reverseKey = reverseKey.slice(1)
            order = this.$get(reverseKey) ? 1 : -1
        } else {
            order = this.$get(reverseKey) ? -1 : 1
        }
    }

    // sort on a copy to avoid mutating original array
    return arr.slice().sort(function (a, b) {
        a = get(a, key)
        b = get(b, key)
        return a === b ? 0 : a > b ? order : -order
    })

}

filters.orderBy.computed = true

// Array filter helpers -------------------------------------------------------

/**
 *  String contain helper
 */
function contains (val, search) {
    /* jshint eqeqeq: false */
    if (utils.isObject(val)) {
        for (var key in val) {
            if (contains(val[key], search)) {
                return true
            }
        }
    } else if (val != null) {
        return val.toString().toLowerCase().indexOf(search) > -1
    }
}

/**
 *  Test whether a string is in quotes,
 *  if yes return stripped string
 */
function stripQuotes (str) {
    if (QUOTE_RE.test(str)) {
        return str.slice(1, -1)
    }
}
},{"./utils":46}],41:[function(require,module,exports){
// string -> DOM conversion
// wrappers originally from jQuery, scooped from component/domify
var map = {
    legend   : [1, '<fieldset>', '</fieldset>'],
    tr       : [2, '<table><tbody>', '</tbody></table>'],
    col      : [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
    _default : [0, '', '']
}

map.td =
map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>']

map.option =
map.optgroup = [1, '<select multiple="multiple">', '</select>']

map.thead =
map.tbody =
map.colgroup =
map.caption =
map.tfoot = [1, '<table>', '</table>']

map.text =
map.circle =
map.ellipse =
map.line =
map.path =
map.polygon =
map.polyline =
map.rect = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>']

var TAG_RE = /<([\w:]+)/

module.exports = function (template) {

    if (typeof template !== 'string') {
        return template
    }

    // template by ID
    if (template.charAt(0) === '#') {
        var templateNode = document.getElementById(template.slice(1))
        if (!templateNode) return
        // if its a template tag and the browser supports it,
        // its content is already a document fragment!
        if (templateNode.tagName === 'TEMPLATE' && templateNode.content) {
            return templateNode.content
        }
        template = templateNode.innerHTML
    }

    var frag = document.createDocumentFragment(),
        m = TAG_RE.exec(template)
    // text only
    if (!m) {
        frag.appendChild(document.createTextNode(template))
        return frag
    }

    var tag = m[1],
        wrap = map[tag] || map._default,
        depth = wrap[0],
        prefix = wrap[1],
        suffix = wrap[2],
        node = document.createElement('div')

    node.innerHTML = prefix + template.trim() + suffix
    while (depth--) node = node.lastChild

    // one element
    if (node.firstChild === node.lastChild) {
        frag.appendChild(node.firstChild)
        return frag
    }

    // multiple nodes, return a fragment
    var child
    /* jshint boss: true */
    while (child = node.firstChild) {
        if (node.nodeType === 1) {
            frag.appendChild(child)
        }
    }
    return frag
}
},{}],42:[function(require,module,exports){
var config      = require('./config'),
    ViewModel   = require('./viewmodel'),
    utils       = require('./utils'),
    makeHash    = utils.hash,
    assetTypes  = ['directive', 'filter', 'partial', 'effect', 'component']

// require these so Browserify can catch them
// so they can be used in Vue.require
require('./observer')
require('./transition')

ViewModel.options = config.globalAssets = {
    directives  : require('./directives'),
    filters     : require('./filters'),
    partials    : makeHash(),
    effects     : makeHash(),
    components  : makeHash()
}

/**
 *  Expose asset registration methods
 */
assetTypes.forEach(function (type) {
    ViewModel[type] = function (id, value) {
        var hash = this.options[type + 's']
        if (!hash) {
            hash = this.options[type + 's'] = makeHash()
        }
        if (!value) return hash[id]
        if (type === 'partial') {
            value = utils.toFragment(value)
        } else if (type === 'component') {
            value = utils.toConstructor(value)
        } else if (type === 'filter') {
            utils.checkFilter(value)
        }
        hash[id] = value
        return this
    }
})

/**
 *  Set config options
 */
ViewModel.config = function (opts, val) {
    if (typeof opts === 'string') {
        if (val === undefined) {
            return config[opts]
        } else {
            config[opts] = val
        }
    } else {
        utils.extend(config, opts)
    }
    return this
}

/**
 *  Expose an interface for plugins
 */
ViewModel.use = function (plugin) {
    if (typeof plugin === 'string') {
        try {
            plugin = require(plugin)
        } catch (e) {
            utils.warn('Cannot find plugin: ' + plugin)
            return
        }
    }

    // additional parameters
    var args = [].slice.call(arguments, 1)
    args.unshift(this)

    if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args)
    } else {
        plugin.apply(null, args)
    }
    return this
}

/**
 *  Expose internal modules for plugins
 */
ViewModel.require = function (path) {
    return require('./' + path)
}

ViewModel.extend = extend
ViewModel.nextTick = utils.nextTick

/**
 *  Expose the main ViewModel class
 *  and add extend method
 */
function extend (options) {

    var ParentVM = this

    // extend data options need to be copied
    // on instantiation
    if (options.data) {
        options.defaultData = options.data
        delete options.data
    }

    // inherit options
    // but only when the super class is not the native Vue.
    if (ParentVM !== ViewModel) {
        options = inheritOptions(options, ParentVM.options, true)
    }
    utils.processOptions(options)

    var ExtendedVM = function (opts, asParent) {
        if (!asParent) {
            opts = inheritOptions(opts, options, true)
        }
        ParentVM.call(this, opts, true)
    }

    // inherit prototype props
    var proto = ExtendedVM.prototype = Object.create(ParentVM.prototype)
    utils.defProtected(proto, 'constructor', ExtendedVM)

    // allow extended VM to be further extended
    ExtendedVM.extend  = extend
    ExtendedVM.super   = ParentVM
    ExtendedVM.options = options

    // allow extended VM to add its own assets
    assetTypes.forEach(function (type) {
        ExtendedVM[type] = ViewModel[type]
    })

    // allow extended VM to use plugins
    ExtendedVM.use     = ViewModel.use
    ExtendedVM.require = ViewModel.require

    return ExtendedVM
}

/**
 *  Inherit options
 *
 *  For options such as `data`, `vms`, `directives`, 'partials',
 *  they should be further extended. However extending should only
 *  be done at top level.
 *  
 *  `proto` is an exception because it's handled directly on the
 *  prototype.
 *
 *  `el` is an exception because it's not allowed as an
 *  extension option, but only as an instance option.
 */
function inheritOptions (child, parent, topLevel) {
    child = child || {}
    if (!parent) return child
    for (var key in parent) {
        if (key === 'el') continue
        var val = child[key],
            parentVal = parent[key]
        if (topLevel && typeof val === 'function' && parentVal) {
            // merge hook functions into an array
            child[key] = [val]
            if (Array.isArray(parentVal)) {
                child[key] = child[key].concat(parentVal)
            } else {
                child[key].push(parentVal)
            }
        } else if (
            topLevel &&
            (utils.isTrueObject(val) || utils.isTrueObject(parentVal))
            && !(parentVal instanceof ViewModel)
        ) {
            // merge toplevel object options
            child[key] = inheritOptions(val, parentVal)
        } else if (val === undefined) {
            // inherit if child doesn't override
            child[key] = parentVal
        }
    }
    return child
}

module.exports = ViewModel
},{"./config":25,"./directives":30,"./filters":40,"./observer":43,"./transition":45,"./utils":46,"./viewmodel":47}],43:[function(require,module,exports){
/* jshint proto:true */

var Emitter  = require('./emitter'),
    utils    = require('./utils'),
    // cache methods
    def      = utils.defProtected,
    isObject = utils.isObject,
    isArray  = Array.isArray,
    hasOwn   = ({}).hasOwnProperty,
    oDef     = Object.defineProperty,
    slice    = [].slice,
    // fix for IE + __proto__ problem
    // define methods as inenumerable if __proto__ is present,
    // otherwise enumerable so we can loop through and manually
    // attach to array instances
    hasProto = ({}).__proto__

// Array Mutation Handlers & Augmentations ------------------------------------

// The proxy prototype to replace the __proto__ of
// an observed array
var ArrayProxy = Object.create(Array.prototype)

// intercept mutation methods
;[
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
].forEach(watchMutation)

// Augment the ArrayProxy with convenience methods
def(ArrayProxy, '$set', function (index, data) {
    return this.splice(index, 1, data)[0]
}, !hasProto)

def(ArrayProxy, '$remove', function (index) {
    if (typeof index !== 'number') {
        index = this.indexOf(index)
    }
    if (index > -1) {
        return this.splice(index, 1)[0]
    }
}, !hasProto)

/**
 *  Intercep a mutation event so we can emit the mutation info.
 *  we also analyze what elements are added/removed and link/unlink
 *  them with the parent Array.
 */
function watchMutation (method) {
    def(ArrayProxy, method, function () {

        var args = slice.call(arguments),
            result = Array.prototype[method].apply(this, args),
            inserted, removed

        // determine new / removed elements
        if (method === 'push' || method === 'unshift') {
            inserted = args
        } else if (method === 'pop' || method === 'shift') {
            removed = [result]
        } else if (method === 'splice') {
            inserted = args.slice(2)
            removed = result
        }
        
        // link & unlink
        linkArrayElements(this, inserted)
        unlinkArrayElements(this, removed)

        // emit the mutation event
        this.__emitter__.emit('mutate', '', this, {
            method   : method,
            args     : args,
            result   : result,
            inserted : inserted,
            removed  : removed
        })

        return result
        
    }, !hasProto)
}

/**
 *  Link new elements to an Array, so when they change
 *  and emit events, the owner Array can be notified.
 */
function linkArrayElements (arr, items) {
    if (items) {
        var i = items.length, item, owners
        while (i--) {
            item = items[i]
            if (isWatchable(item)) {
                // if object is not converted for observing
                // convert it...
                if (!item.__emitter__) {
                    convert(item)
                    watch(item)
                }
                owners = item.__emitter__.owners
                if (owners.indexOf(arr) < 0) {
                    owners.push(arr)
                }
            }
        }
    }
}

/**
 *  Unlink removed elements from the ex-owner Array.
 */
function unlinkArrayElements (arr, items) {
    if (items) {
        var i = items.length, item
        while (i--) {
            item = items[i]
            if (item && item.__emitter__) {
                var owners = item.__emitter__.owners
                if (owners) owners.splice(owners.indexOf(arr))
            }
        }
    }
}

// Object add/delete key augmentation -----------------------------------------

var ObjProxy = Object.create(Object.prototype)

def(ObjProxy, '$add', function (key, val) {
    if (hasOwn.call(this, key)) return
    this[key] = val
    convertKey(this, key, true)
}, !hasProto)

def(ObjProxy, '$delete', function (key) {
    if (!(hasOwn.call(this, key))) return
    // trigger set events
    this[key] = undefined
    delete this[key]
    this.__emitter__.emit('delete', key)
}, !hasProto)

// Watch Helpers --------------------------------------------------------------

/**
 *  Check if a value is watchable
 */
function isWatchable (obj) {
    return typeof obj === 'object' && obj && !obj.$compiler
}

/**
 *  Convert an Object/Array to give it a change emitter.
 */
function convert (obj) {
    if (obj.__emitter__) return true
    var emitter = new Emitter()
    def(obj, '__emitter__', emitter)
    emitter
        .on('set', function (key, val, propagate) {
            if (propagate) propagateChange(obj)
        })
        .on('mutate', function () {
            propagateChange(obj)
        })
    emitter.values = utils.hash()
    emitter.owners = []
    return false
}

/**
 *  Propagate an array element's change to its owner arrays
 */
function propagateChange (obj) {
    var owners = obj.__emitter__.owners,
        i = owners.length
    while (i--) {
        owners[i].__emitter__.emit('set', '', '', true)
    }
}

/**
 *  Watch target based on its type
 */
function watch (obj) {
    if (isArray(obj)) {
        watchArray(obj)
    } else {
        watchObject(obj)
    }
}

/**
 *  Augment target objects with modified
 *  methods
 */
function augment (target, src) {
    if (hasProto) {
        target.__proto__ = src
    } else {
        for (var key in src) {
            def(target, key, src[key])
        }
    }
}

/**
 *  Watch an Object, recursive.
 */
function watchObject (obj) {
    augment(obj, ObjProxy)
    for (var key in obj) {
        convertKey(obj, key)
    }
}

/**
 *  Watch an Array, overload mutation methods
 *  and add augmentations by intercepting the prototype chain
 */
function watchArray (arr) {
    augment(arr, ArrayProxy)
    linkArrayElements(arr, arr)
}

/**
 *  Define accessors for a property on an Object
 *  so it emits get/set events.
 *  Then watch the value itself.
 */
function convertKey (obj, key, propagate) {
    var keyPrefix = key.charAt(0)
    if (keyPrefix === '$' || keyPrefix === '_') {
        return
    }
    // emit set on bind
    // this means when an object is observed it will emit
    // a first batch of set events.
    var emitter = obj.__emitter__,
        values  = emitter.values

    init(obj[key], propagate)

    oDef(obj, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            var value = values[key]
            // only emit get on tip values
            if (pub.shouldGet) {
                emitter.emit('get', key)
            }
            return value
        },
        set: function (newVal) {
            var oldVal = values[key]
            unobserve(oldVal, key, emitter)
            copyPaths(newVal, oldVal)
            // an immediate property should notify its parent
            // to emit set for itself too
            init(newVal, true)
        }
    })

    function init (val, propagate) {
        values[key] = val
        emitter.emit('set', key, val, propagate)
        if (isArray(val)) {
            emitter.emit('set', key + '.length', val.length, propagate)
        }
        observe(val, key, emitter)
    }
}

/**
 *  When a value that is already converted is
 *  observed again by another observer, we can skip
 *  the watch conversion and simply emit set event for
 *  all of its properties.
 */
function emitSet (obj) {
    var emitter = obj && obj.__emitter__
    if (!emitter) return
    if (isArray(obj)) {
        emitter.emit('set', 'length', obj.length)
    } else {
        var key, val
        for (key in obj) {
            val = obj[key]
            emitter.emit('set', key, val)
            emitSet(val)
        }
    }
}

/**
 *  Make sure all the paths in an old object exists
 *  in a new object.
 *  So when an object changes, all missing keys will
 *  emit a set event with undefined value.
 */
function copyPaths (newObj, oldObj) {
    if (!isObject(newObj) || !isObject(oldObj)) {
        return
    }
    var path, oldVal, newVal
    for (path in oldObj) {
        if (!(hasOwn.call(newObj, path))) {
            oldVal = oldObj[path]
            if (isArray(oldVal)) {
                newObj[path] = []
            } else if (isObject(oldVal)) {
                newVal = newObj[path] = {}
                copyPaths(newVal, oldVal)
            } else {
                newObj[path] = undefined
            }
        }
    }
}

/**
 *  walk along a path and make sure it can be accessed
 *  and enumerated in that object
 */
function ensurePath (obj, key) {
    var path = key.split('.'), sec
    for (var i = 0, d = path.length - 1; i < d; i++) {
        sec = path[i]
        if (!obj[sec]) {
            obj[sec] = {}
            if (obj.__emitter__) convertKey(obj, sec)
        }
        obj = obj[sec]
    }
    if (isObject(obj)) {
        sec = path[i]
        if (!(hasOwn.call(obj, sec))) {
            obj[sec] = undefined
            if (obj.__emitter__) convertKey(obj, sec)
        }
    }
}

// Main API Methods -----------------------------------------------------------

/**
 *  Observe an object with a given path,
 *  and proxy get/set/mutate events to the provided observer.
 */
function observe (obj, rawPath, observer) {

    if (!isWatchable(obj)) return

    var path = rawPath ? rawPath + '.' : '',
        alreadyConverted = convert(obj),
        emitter = obj.__emitter__

    // setup proxy listeners on the parent observer.
    // we need to keep reference to them so that they
    // can be removed when the object is un-observed.
    observer.proxies = observer.proxies || {}
    var proxies = observer.proxies[path] = {
        get: function (key) {
            observer.emit('get', path + key)
        },
        set: function (key, val, propagate) {
            if (key) observer.emit('set', path + key, val)
            // also notify observer that the object itself changed
            // but only do so when it's a immediate property. this
            // avoids duplicate event firing.
            if (rawPath && propagate) {
                observer.emit('set', rawPath, obj, true)
            }
        },
        mutate: function (key, val, mutation) {
            // if the Array is a root value
            // the key will be null
            var fixedPath = key ? path + key : rawPath
            observer.emit('mutate', fixedPath, val, mutation)
            // also emit set for Array's length when it mutates
            var m = mutation.method
            if (m !== 'sort' && m !== 'reverse') {
                observer.emit('set', fixedPath + '.length', val.length)
            }
        }
    }

    // attach the listeners to the child observer.
    // now all the events will propagate upwards.
    emitter
        .on('get', proxies.get)
        .on('set', proxies.set)
        .on('mutate', proxies.mutate)

    if (alreadyConverted) {
        // for objects that have already been converted,
        // emit set events for everything inside
        emitSet(obj)
    } else {
        watch(obj)
    }
}

/**
 *  Cancel observation, turn off the listeners.
 */
function unobserve (obj, path, observer) {

    if (!obj || !obj.__emitter__) return

    path = path ? path + '.' : ''
    var proxies = observer.proxies[path]
    if (!proxies) return

    // turn off listeners
    obj.__emitter__
        .off('get', proxies.get)
        .off('set', proxies.set)
        .off('mutate', proxies.mutate)

    // remove reference
    observer.proxies[path] = null
}

// Expose API -----------------------------------------------------------------

var pub = module.exports = {

    // whether to emit get events
    // only enabled during dependency parsing
    shouldGet   : false,

    observe     : observe,
    unobserve   : unobserve,
    ensurePath  : ensurePath,
    copyPaths   : copyPaths,
    watch       : watch,
    convert     : convert,
    convertKey  : convertKey
}
},{"./emitter":38,"./utils":46}],44:[function(require,module,exports){
var openChar        = '{',
    endChar         = '}',
    ESCAPE_RE       = /[-.*+?^${}()|[\]\/\\]/g,
    // lazy require
    Directive

exports.Regex = buildInterpolationRegex()

function buildInterpolationRegex () {
    var open = escapeRegex(openChar),
        end  = escapeRegex(endChar)
    return new RegExp(open + open + open + '?(.+?)' + end + '?' + end + end)
}

function escapeRegex (str) {
    return str.replace(ESCAPE_RE, '\\$&')
}

function setDelimiters (delimiters) {
    openChar = delimiters[0]
    endChar = delimiters[1]
    exports.delimiters = delimiters
    exports.Regex = buildInterpolationRegex()
}

/** 
 *  Parse a piece of text, return an array of tokens
 *  token types:
 *  1. plain string
 *  2. object with key = binding key
 *  3. object with key & html = true
 */
function parse (text) {
    if (!exports.Regex.test(text)) return null
    var m, i, token, match, tokens = []
    /* jshint boss: true */
    while (m = text.match(exports.Regex)) {
        i = m.index
        if (i > 0) tokens.push(text.slice(0, i))
        token = { key: m[1].trim() }
        match = m[0]
        token.html =
            match.charAt(2) === openChar &&
            match.charAt(match.length - 3) === endChar
        tokens.push(token)
        text = text.slice(i + m[0].length)
    }
    if (text.length) tokens.push(text)
    return tokens
}

/**
 *  Parse an attribute value with possible interpolation tags
 *  return a Directive-friendly expression
 *
 *  e.g.  a {{b}} c  =>  "a " + b + " c"
 */
function parseAttr (attr) {
    Directive = Directive || require('./directive')
    var tokens = parse(attr)
    if (!tokens) return null
    if (tokens.length === 1) return tokens[0].key
    var res = [], token
    for (var i = 0, l = tokens.length; i < l; i++) {
        token = tokens[i]
        res.push(
            token.key
                ? inlineFilters(token.key)
                : ('"' + token + '"')
        )
    }
    return res.join('+')
}

/**
 *  Inlines any possible filters in a binding
 *  so that we can combine everything into a huge expression
 */
function inlineFilters (key) {
    if (key.indexOf('|') > -1) {
        var dirs = Directive.parse(key),
            dir = dirs && dirs[0]
        if (dir && dir.filters) {
            key = Directive.inlineFilters(
                dir.key,
                dir.filters
            )
        }
    }
    return '(' + key + ')'
}

exports.parse         = parse
exports.parseAttr     = parseAttr
exports.setDelimiters = setDelimiters
exports.delimiters    = [openChar, endChar]
},{"./directive":27}],45:[function(require,module,exports){
var endEvents  = sniffEndEvents(),
    config     = require('./config'),
    // batch enter animations so we only force the layout once
    Batcher    = require('./batcher'),
    batcher    = new Batcher(),
    // cache timer functions
    setTO      = window.setTimeout,
    clearTO    = window.clearTimeout,
    // exit codes for testing
    codes = {
        CSS_E     : 1,
        CSS_L     : 2,
        JS_E      : 3,
        JS_L      : 4,
        CSS_SKIP  : -1,
        JS_SKIP   : -2,
        JS_SKIP_E : -3,
        JS_SKIP_L : -4,
        INIT      : -5,
        SKIP      : -6
    }

// force layout before triggering transitions/animations
batcher._preFlush = function () {
    /* jshint unused: false */
    var f = document.body.offsetHeight
}

/**
 *  stage:
 *    1 = enter
 *    2 = leave
 */
var transition = module.exports = function (el, stage, cb, compiler) {

    var changeState = function () {
        cb()
        compiler.execHook(stage > 0 ? 'attached' : 'detached')
    }

    if (compiler.init) {
        changeState()
        return codes.INIT
    }

    var hasTransition = el.vue_trans === '',
        hasAnimation  = el.vue_anim === '',
        effectId      = el.vue_effect

    if (effectId) {
        return applyTransitionFunctions(
            el,
            stage,
            changeState,
            effectId,
            compiler
        )
    } else if (hasTransition || hasAnimation) {
        return applyTransitionClass(
            el,
            stage,
            changeState,
            hasAnimation
        )
    } else {
        changeState()
        return codes.SKIP
    }

}

/**
 *  Togggle a CSS class to trigger transition
 */
function applyTransitionClass (el, stage, changeState, hasAnimation) {

    if (!endEvents.trans) {
        changeState()
        return codes.CSS_SKIP
    }

    // if the browser supports transition,
    // it must have classList...
    var onEnd,
        classList        = el.classList,
        existingCallback = el.vue_trans_cb,
        enterClass       = config.enterClass,
        leaveClass       = config.leaveClass,
        endEvent         = hasAnimation ? endEvents.anim : endEvents.trans

    // cancel unfinished callbacks and jobs
    if (existingCallback) {
        el.removeEventListener(endEvent, existingCallback)
        classList.remove(enterClass)
        classList.remove(leaveClass)
        el.vue_trans_cb = null
    }

    if (stage > 0) { // enter

        // set to enter state before appending
        classList.add(enterClass)
        // append
        changeState()
        // trigger transition
        if (!hasAnimation) {
            batcher.push({
                execute: function () {
                    classList.remove(enterClass)
                }
            })
        } else {
            onEnd = function (e) {
                if (e.target === el) {
                    el.removeEventListener(endEvent, onEnd)
                    el.vue_trans_cb = null
                    classList.remove(enterClass)
                }
            }
            el.addEventListener(endEvent, onEnd)
            el.vue_trans_cb = onEnd
        }
        return codes.CSS_E

    } else { // leave

        if (el.offsetWidth || el.offsetHeight) {
            // trigger hide transition
            classList.add(leaveClass)
            onEnd = function (e) {
                if (e.target === el) {
                    el.removeEventListener(endEvent, onEnd)
                    el.vue_trans_cb = null
                    // actually remove node here
                    changeState()
                    classList.remove(leaveClass)
                }
            }
            // attach transition end listener
            el.addEventListener(endEvent, onEnd)
            el.vue_trans_cb = onEnd
        } else {
            // directly remove invisible elements
            changeState()
        }
        return codes.CSS_L
        
    }

}

function applyTransitionFunctions (el, stage, changeState, effectId, compiler) {

    var funcs = compiler.getOption('effects', effectId)
    if (!funcs) {
        changeState()
        return codes.JS_SKIP
    }

    var enter = funcs.enter,
        leave = funcs.leave,
        timeouts = el.vue_timeouts

    // clear previous timeouts
    if (timeouts) {
        var i = timeouts.length
        while (i--) {
            clearTO(timeouts[i])
        }
    }

    timeouts = el.vue_timeouts = []
    function timeout (cb, delay) {
        var id = setTO(function () {
            cb()
            timeouts.splice(timeouts.indexOf(id), 1)
            if (!timeouts.length) {
                el.vue_timeouts = null
            }
        }, delay)
        timeouts.push(id)
    }

    if (stage > 0) { // enter
        if (typeof enter !== 'function') {
            changeState()
            return codes.JS_SKIP_E
        }
        enter(el, changeState, timeout)
        return codes.JS_E
    } else { // leave
        if (typeof leave !== 'function') {
            changeState()
            return codes.JS_SKIP_L
        }
        leave(el, changeState, timeout)
        return codes.JS_L
    }

}

/**
 *  Sniff proper transition end event name
 */
function sniffEndEvents () {
    var el = document.createElement('vue'),
        defaultEvent = 'transitionend',
        events = {
            'webkitTransition' : 'webkitTransitionEnd',
            'transition'       : defaultEvent,
            'mozTransition'    : defaultEvent
        },
        ret = {}
    for (var name in events) {
        if (el.style[name] !== undefined) {
            ret.trans = events[name]
            break
        }
    }
    ret.anim = el.style.animation === ''
        ? 'animationend'
        : 'webkitAnimationEnd'
    return ret
}

// Expose some stuff for testing purposes
transition.codes = codes
transition.sniff = sniffEndEvents
},{"./batcher":22,"./config":25}],46:[function(require,module,exports){
var config       = require('./config'),
    toString     = ({}).toString,
    win          = window,
    console      = win.console,
    def          = Object.defineProperty,
    OBJECT       = 'object',
    THIS_RE      = /[^\w]this[^\w]/,
    BRACKET_RE_S = /\['([^']+)'\]/g,
    BRACKET_RE_D = /\["([^"]+)"\]/g,
    hasClassList = 'classList' in document.documentElement,
    ViewModel // late def

var defer =
    win.requestAnimationFrame ||
    win.webkitRequestAnimationFrame ||
    win.setTimeout

/**
 *  Normalize keypath with possible brackets into dot notations
 */
function normalizeKeypath (key) {
    return key.indexOf('[') < 0
        ? key
        : key.replace(BRACKET_RE_S, '.$1')
             .replace(BRACKET_RE_D, '.$1')
}

var utils = module.exports = {

    /**
     *  Convert a string template to a dom fragment
     */
    toFragment: require('./fragment'),

    /**
     *  get a value from an object keypath
     */
    get: function (obj, key) {
        /* jshint eqeqeq: false */
        key = normalizeKeypath(key)
        if (key.indexOf('.') < 0) {
            return obj[key]
        }
        var path = key.split('.'),
            d = -1, l = path.length
        while (++d < l && obj != null) {
            obj = obj[path[d]]
        }
        return obj
    },

    /**
     *  set a value to an object keypath
     */
    set: function (obj, key, val) {
        /* jshint eqeqeq: false */
        key = normalizeKeypath(key)
        if (key.indexOf('.') < 0) {
            obj[key] = val
            return
        }
        var path = key.split('.'),
            d = -1, l = path.length - 1
        while (++d < l) {
            if (obj[path[d]] == null) {
                obj[path[d]] = {}
            }
            obj = obj[path[d]]
        }
        obj[path[d]] = val
    },

    /**
     *  return the base segment of a keypath
     */
    baseKey: function (key) {
        return key.indexOf('.') > 0
            ? key.split('.')[0]
            : key
    },

    /**
     *  Create a prototype-less object
     *  which is a better hash/map
     */
    hash: function () {
        return Object.create(null)
    },

    /**
     *  get an attribute and remove it.
     */
    attr: function (el, type) {
        var attr = config.prefix + '-' + type,
            val = el.getAttribute(attr)
        if (val !== null) {
            el.removeAttribute(attr)
        }
        return val
    },

    /**
     *  Define an ienumerable property
     *  This avoids it being included in JSON.stringify
     *  or for...in loops.
     */
    defProtected: function (obj, key, val, enumerable, writable) {
        def(obj, key, {
            value        : val,
            enumerable   : enumerable,
            writable     : writable,
            configurable : true
        })
    },

    /**
     *  A less bullet-proof but more efficient type check
     *  than Object.prototype.toString
     */
    isObject: function (obj) {
        return typeof obj === OBJECT && obj && !Array.isArray(obj)
    },

    /**
     *  A more accurate but less efficient type check
     */
    isTrueObject: function (obj) {
        return toString.call(obj) === '[object Object]'
    },

    /**
     *  Most simple bind
     *  enough for the usecase and fast than native bind()
     */
    bind: function (fn, ctx) {
        return function (arg) {
            return fn.call(ctx, arg)
        }
    },

    /**
     *  Make sure null and undefined output empty string
     */
    guard: function (value) {
        /* jshint eqeqeq: false, eqnull: true */
        return value == null
            ? ''
            : (typeof value == 'object')
                ? JSON.stringify(value)
                : value
    },

    /**
     *  When setting value on the VM, parse possible numbers
     */
    checkNumber: function (value) {
        return (isNaN(value) || value === null || typeof value === 'boolean')
            ? value
            : Number(value)
    },

    /**
     *  simple extend
     */
    extend: function (obj, ext) {
        for (var key in ext) {
            if (obj[key] !== ext[key]) {
                obj[key] = ext[key]
            }
        }
        return obj
    },

    /**
     *  filter an array with duplicates into uniques
     */
    unique: function (arr) {
        var hash = utils.hash(),
            i = arr.length,
            key, res = []
        while (i--) {
            key = arr[i]
            if (hash[key]) continue
            hash[key] = 1
            res.push(key)
        }
        return res
    },

    /**
     *  Convert the object to a ViewModel constructor
     *  if it is not already one
     */
    toConstructor: function (obj) {
        ViewModel = ViewModel || require('./viewmodel')
        return utils.isObject(obj)
            ? ViewModel.extend(obj)
            : typeof obj === 'function'
                ? obj
                : null
    },

    /**
     *  Check if a filter function contains references to `this`
     *  If yes, mark it as a computed filter.
     */
    checkFilter: function (filter) {
        if (THIS_RE.test(filter.toString())) {
            filter.computed = true
        }
    },

    /**
     *  convert certain option values to the desired format.
     */
    processOptions: function (options) {
        var components = options.components,
            partials   = options.partials,
            template   = options.template,
            filters    = options.filters,
            key
        if (components) {
            for (key in components) {
                components[key] = utils.toConstructor(components[key])
            }
        }
        if (partials) {
            for (key in partials) {
                partials[key] = utils.toFragment(partials[key])
            }
        }
        if (filters) {
            for (key in filters) {
                utils.checkFilter(filters[key])
            }
        }
        if (template) {
            options.template = utils.toFragment(template)
        }
    },

    /**
     *  used to defer batch updates
     */
    nextTick: function (cb) {
        defer(cb, 0)
    },

    /**
     *  add class for IE9
     *  uses classList if available
     */
    addClass: function (el, cls) {
        if (hasClassList) {
            el.classList.add(cls)
        } else {
            var cur = ' ' + el.className + ' '
            if (cur.indexOf(' ' + cls + ' ') < 0) {
                el.className = (cur + cls).trim()
            }
        }
    },

    /**
     *  remove class for IE9
     */
    removeClass: function (el, cls) {
        if (hasClassList) {
            el.classList.remove(cls)
        } else {
            var cur = ' ' + el.className + ' ',
                tar = ' ' + cls + ' '
            while (cur.indexOf(tar) >= 0) {
                cur = cur.replace(tar, ' ')
            }
            el.className = cur.trim()
        }
    },

    /**
     *  Convert an object to Array
     *  used in v-repeat and array filters
     */
    objectToArray: function (obj) {
        var res = [], val, data
        for (var key in obj) {
            val = obj[key]
            data = utils.isObject(val)
                ? val
                : { $value: val }
            data.$key = key
            res.push(data)
        }
        return res
    }
}

enableDebug()
function enableDebug () {
    /**
     *  log for debugging
     */
    utils.log = function (msg) {
        if (config.debug && console) {
            console.log(msg)
        }
    }
    
    /**
     *  warnings, traces by default
     *  can be suppressed by `silent` option.
     */
    utils.warn = function (msg) {
        if (!config.silent && console) {
            console.warn(msg)
            if (config.debug && console.trace) {
                console.trace()
            }
        }
    }
}
},{"./config":25,"./fragment":41,"./viewmodel":47}],47:[function(require,module,exports){
var Compiler   = require('./compiler'),
    utils      = require('./utils'),
    transition = require('./transition'),
    Batcher    = require('./batcher'),
    slice      = [].slice,
    def        = utils.defProtected,
    nextTick   = utils.nextTick,

    // batch $watch callbacks
    watcherBatcher = new Batcher(),
    watcherId      = 1

/**
 *  ViewModel exposed to the user that holds data,
 *  computed properties, event handlers
 *  and a few reserved methods
 */
function ViewModel (options) {
    // just compile. options are passed directly to compiler
    new Compiler(this, options)
}

// All VM prototype methods are inenumerable
// so it can be stringified/looped through as raw data
var VMProto = ViewModel.prototype

/**
 *  Convenience function to get a value from
 *  a keypath
 */
def(VMProto, '$get', function (key) {
    var val = utils.get(this, key)
    return val === undefined && this.$parent
        ? this.$parent.$get(key)
        : val
})

/**
 *  Convenience function to set an actual nested value
 *  from a flat key string. Used in directives.
 */
def(VMProto, '$set', function (key, value) {
    utils.set(this, key, value)
})

/**
 *  watch a key on the viewmodel for changes
 *  fire callback with new value
 */
def(VMProto, '$watch', function (key, callback) {
    // save a unique id for each watcher
    var id = watcherId++,
        self = this
    function on () {
        var args = slice.call(arguments)
        watcherBatcher.push({
            id: id,
            override: true,
            execute: function () {
                callback.apply(self, args)
            }
        })
    }
    callback._fn = on
    self.$compiler.observer.on('change:' + key, on)
})

/**
 *  unwatch a key
 */
def(VMProto, '$unwatch', function (key, callback) {
    // workaround here
    // since the emitter module checks callback existence
    // by checking the length of arguments
    var args = ['change:' + key],
        ob = this.$compiler.observer
    if (callback) args.push(callback._fn)
    ob.off.apply(ob, args)
})

/**
 *  unbind everything, remove everything
 */
def(VMProto, '$destroy', function () {
    this.$compiler.destroy()
})

/**
 *  broadcast an event to all child VMs recursively.
 */
def(VMProto, '$broadcast', function () {
    var children = this.$compiler.children,
        i = children.length,
        child
    while (i--) {
        child = children[i]
        child.emitter.applyEmit.apply(child.emitter, arguments)
        child.vm.$broadcast.apply(child.vm, arguments)
    }
})

/**
 *  emit an event that propagates all the way up to parent VMs.
 */
def(VMProto, '$dispatch', function () {
    var compiler = this.$compiler,
        emitter = compiler.emitter,
        parent = compiler.parent
    emitter.applyEmit.apply(emitter, arguments)
    if (parent) {
        parent.vm.$dispatch.apply(parent.vm, arguments)
    }
})

/**
 *  delegate on/off/once to the compiler's emitter
 */
;['emit', 'on', 'off', 'once'].forEach(function (method) {
    // internal emit has fixed number of arguments.
    // exposed emit uses the external version
    // with fn.apply.
    var realMethod = method === 'emit'
        ? 'applyEmit'
        : method
    def(VMProto, '$' + method, function () {
        var emitter = this.$compiler.emitter
        emitter[realMethod].apply(emitter, arguments)
    })
})

// DOM convenience methods

def(VMProto, '$appendTo', function (target, cb) {
    target = query(target)
    var el = this.$el
    transition(el, 1, function () {
        target.appendChild(el)
        if (cb) nextTick(cb)
    }, this.$compiler)
})

def(VMProto, '$remove', function (cb) {
    var el = this.$el
    transition(el, -1, function () {
        if (el.parentNode) {
            el.parentNode.removeChild(el)
        }
        if (cb) nextTick(cb)
    }, this.$compiler)
})

def(VMProto, '$before', function (target, cb) {
    target = query(target)
    var el = this.$el
    transition(el, 1, function () {
        target.parentNode.insertBefore(el, target)
        if (cb) nextTick(cb)
    }, this.$compiler)
})

def(VMProto, '$after', function (target, cb) {
    target = query(target)
    var el = this.$el
    transition(el, 1, function () {
        if (target.nextSibling) {
            target.parentNode.insertBefore(el, target.nextSibling)
        } else {
            target.parentNode.appendChild(el)
        }
        if (cb) nextTick(cb)
    }, this.$compiler)
})

function query (el) {
    return typeof el === 'string'
        ? document.querySelector(el)
        : el
}

module.exports = ViewModel
},{"./batcher":22,"./compiler":24,"./transition":45,"./utils":46}]},{},[9])