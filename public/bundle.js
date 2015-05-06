(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = '<div class="container fadeIn">\n  <header>\n    <h1 class="title"><a href="http://en.wikipedia.org/wiki/Community">Community</a></h1>\n  </header>\n  <div class="row">\n    <blockquote class="title">\n      A community is a social unit of any size that shares common values.\n    </blockquote>\n    <p class="col-md-8 col-md-offset-2">\n      We also are involved in several technical communities that work together to\n      maintain and manage specific technologies. By working together in these broad reaching\n      communities, we are able to be part of the direction instead of having it dictated to us.\n    </p>\n  </div>\n  <div class="row">\n    <h3 class="title"><a href="#">Local</a></h3>\n    <p class="col-md-8 col-md-offset-2">\n      We host several local events and participant in local community driven events.\n    </p>\n  </div>\n  <div class="row">\n    <ul class="list-group col-md-offset-1">\n      <li class="list-group-item col-md-4 col-md-offset-1" v-repeat="local"><a href="{{link}}">{{name}}</a></li>\n    </ul>\n  </div>\n  <div class="row">\n    <div class="col-md-8 col-md-offset-2">\n      <h3>Silicon Harbor</h3>\n      <p>The <a href="#">Silicon Harbor</a> has grown immensely and continues to grow,\n        the need for more outlets to grow talent is more significant than ever, and\n        the only way we will grow talent is to share and learn together.\n      </p>\n    </div>\n  </div>\n  <div class="row">\n    <h3 class="title"><a href="#">Technical</a></h3>\n    <p class="col-md-8 col-md-offset-2">We also are involved in several technical\n    communities. These communities work together to maintain and manage specific\n    technologies.  By working together in these broad reaching communitees, we are\n    able to be part of the direction instead of having it be dictated to us.</p>\n    <ul class="list-group col-md-offset-1">\n      <li class="list-group-item col-md-4 col-md-offset-1" v-repeat="technical"><a href="{{link}}">{{name}}</a></li>\n    </ul>\n  </div>\n  <div class="row">\n    <h3 class="title"><a href="#">Open Source</a></h3>\n    <p class="col-md-8 col-md-offset-2">JRS is a proponent of open source, and all of our technology stacks are based on open source platforms. We also have several open source projects and technology tutorials.</p>\n    <ul class="list-group col-md-offset-1">\n      <li class="list-group-item col-md-4 col-md-offset-1" v-repeat="opensource"><a href="{{link}}">{{name}}</a></li>\n    </ul>\n  </div>\n\n</div>\n';
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
module.exports = '<div class="container fadeIn">\n  <header>\n    <h1 class="title">Contact Us</h1>\n  </header>\n  <div class="row">\n    <div class="col-md-5 col-md-offset-1">\n      <div id="wufoo-zzp92a10nvj7pe">\n      Fill out my <a href="https://jackhq.wufoo.com/forms/zzp92a10nvj7pe">online form</a>.\n      </div>\n      <div id="wuf-adv" style="font-family:inherit;font-size: small;color:#a7a7a7;text-align:center;display:block;">Online contact and registration forms from <a href="http://www.wufoo.com">Wufoo</a>.</div>\n      <script type="text/javascript">var zzp92a10nvj7pe;(function(d, t) {\n      var s = d.createElement(t), options = {\n      \'userName\':\'jackhq\',\n      \'formHash\':\'zzp92a10nvj7pe\',\n      \'autoResize\':true,\n      \'height\':\'597\',\n      \'async\':true,\n      \'host\':\'wufoo.com\',\n      \'header\':\'show\',\n      \'ssl\':true};\n      s.src = (\'https:\' == d.location.protocol ? \'https://\' : \'http://\') + \'www.wufoo.com/scripts/embed/form.js\';\n      s.onload = s.onreadystatechange = function() {\n      var rs = this.readyState; if (rs) if (rs != \'complete\') if (rs != \'loaded\') return;\n      try { zzp92a10nvj7pe = new WufooForm();zzp92a10nvj7pe.initialize(options);zzp92a10nvj7pe.display(); } catch (e) {}};\n      var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);\n      })(document, \'script\');</script>\n\n    </div>\n    <div class="col-md-6">\n      <iframe width="380" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=494+C+Wando+Park+Boulevard,+Mount+Pleasant,+SC&amp;aq=0&amp;oq=494+C+wando+park+,&amp;sll=32.841231,-79.867948&amp;sspn=0.013936,0.017982&amp;gl=us&amp;ie=UTF8&amp;hq=&amp;hnear=494+Wando+Park+Blvd,+Mt+Pleasant,+South+Carolina+29464&amp;t=m&amp;z=14&amp;ll=32.841231,-79.867948&amp;output=embed"></iframe>\n      <p>\n        <address>\n          494 C Wando Park Boulevard\n          Mount Pleasant, SC  29464\n        </address>\n        <br />\n        Phone:\n        843.606.6484\n        <br />\n        Email:\n        <a href=\'mailto://info@jackrussellsoftware.com\'>info@jackrussellsoftware.com</a>\n        <br />\n        Twitter:\n        <a href=\'http://twitter.com/jackhq\'>@jackhq</a>\n      </p>\n    </div>\n  </div>\n</div>\n';
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
module.exports = '<div id="app">\n  <header>\n    <div class="text-center">\n      <img src="images/jackhq-logo.png" height="200px;" />\n    </div>\n    <h3 class="text-center">A <a href="http://www.tabularasahealthcare.com">Tabula Rasa Healthcare</a> Division</h3>\n  </header>\n  <nav class="navbar navbar-default">\n    <div class="container">\n      <div class="col-md-11 col-md-offset-1">\n        <ul class="nav navbar-nav">\n          <li v-class="active: isCurrentView(\'team\')"><a href="#/">Team</a></li>\n          <li v-class="active: isCurrentView(\'technology\')"><a href="#/technology">Technology</a></li>\n          <li v-class="active: isCurrentView(\'philosophy\')"><a href="#/philosophy">Philosophy</a></li>\n          <li v-class="active: isCurrentView(\'community\')"><a href="#/community">Community</a></li>\n        </ul>\n        <ul class="nav navbar-nav navbar-right">\n          <li v-class="active: isCurrentView(\'contact\')"><a href="#/contact">Contact</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <div class="main container">\n    <div class="text-center" v-view="currentView"></div>\n  </div>\n  <footer class="well">\n    <div class="container">\n      <ul class="list-inline text-center">\n        <li>All Rights Reserved 2014</li>\n        <li>.</li>\n        <li><a class="btn btn-link" href="http://twitter.com/jackhq">twitter</a></li>\n        <li>.</li>\n        <li><a class="btn btn-link" href="http://github.com/jackruss">Github</a></li>\n      </ul>\n    </div>\n  </footer>\n</div>\n';
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
module.exports = '<div class="container fadeIn">\n  <header>\n    <h1 class="title">Philosophy</h1>\n  </header>\n  <div class="row">\n    <p class="col-md-8 col-md-offset-2">\n      At JRS, our number one responsibility is to provide\n      quality software to our clients or users.  At any given time, the process and\n      workflow to provide such services needs to evolve.  In order to do this, we\n      are constantly re-working our process to improve our productivity.  If you\n      leave that last sentence the way it is, grammar should be: So, we are constantly\n      re-working our process to improve our productivity.\n    </p>\n  </div>\n  <div class="row">\n    <p class="col-md-8 col-md-offset-2">\n      It is not easy to write quality code with tight timelines and\n      complex user requirements.  We leverage several industry standards\n      and proven methods that help us manage our development products and\n      processes.\n    </p>\n  </div>\n  <div class="row">\n    <h3 class="title"><a href="http://en.wikipedia.org/wiki/Pair_programming">Pair Programming</a></h3>\n    <p class="col-md-8 col-md-offset-2">\n      Pair Programming is one of the most controversial of techniques.  We\n      have found Pair Programming to be invaluable in our development process.\n      Not only does it help reduce common human bugs, but it helps the\n      developers to continue to share knowledge and grow.  Pair Programming\n      is one of the best teaching/learning processes for new developers.\n    </p>\n  </div>\n  <div class="row">\n    <h3  class="title"><a href="http://en.wikipedia.org/wiki/User_stories">User-Stories/Sprint Planning</a></h3>\n    <p class="col-md-8 col-md-offset-2">\n      The development team works with the product team creating user-stories and a\n      sprint development plan for every feature.  The time preparing helps\n      prevent tangents and provides a more focused execution during\n      the development sprint.\n    </p>\n  </div>\n  <div class="row">\n    <h3  class="title"><a href="http://en.wikipedia.org/wiki/Code_reviews">Code Reviews</a></h3>\n    <p class="col-md-8 col-md-offset-2">\n      Some people think that pair programming replaces code reviews, but we feel code reviews also\n      share a place in the development life-cycle.  The Code Review is focused on the code quality\n      and structure.  Is the code maintainable?  Can the code be refactored to provide a simpler solution?\n    </p>\n  </div>\n  <div class="row">\n    <h3  class="title">\n      <a href="http://en.wikipedia.org/wiki/Unit_testing">Unit Testing</a>\n      /\n      <a href="http://en.wikipedia.org/wiki/Continuous_integration">Continuous Integration</a>\n    </h3>\n    <p class="col-md-8 col-md-offset-2">\n      All production code should have unit tests, no matter what the code is. The tests should be isolated\n      and only test the specific code of the unit.  This goes for front-end JavaScript and back-end Serverside\n      code.  Our teams are very focused on testing and it is a requirement. It is all about confidence in\n      your deliverables; creating unit tests helps to increase that confidence. Unit-tests are a great way\n      to document edge cases and strange bugs.\n    </p>\n    <p class="col-md-8 col-md-offset-2">\n      Continuous Integration is an automated process that runs all of your automated test after\n      every check-in to your repository.  It will alert you when your code is breaking the build.\n    </p>\n  </div>\n  <div class="row">\n    <h3  class="title"><a href="http://en.wikipedia.org/wiki/User_stories">Integration Testing</a></h3>\n    <p class="col-md-8 col-md-offset-2">\n      Our main integration testing process is performed using a series of visual test cases and managed\n      by our testing team.  There is also some manual testing that is performed before every release.\n      This high-touch approach to integration testing allows us to focus on the core scenarios that\n      can turn releases into support disasters.\n    </p>\n  </div>\n\n  <!--\n  <div class="row">\n    <h3  class="title"><a href="http://en.wikipedia.org/wiki/User_stories">Automated Deployment</a></h3>\n    <p class="col-md-8 col-md-offset-2">\n\n    </p>\n  </div>\n-->\n</div>\n';
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
module.exports = '<article class="container row fadeIn">\n  <div class="list-group">\n    <div class="list-group-item col-md-5 col-md-offset-1 glow" v-repeat="team">\n      <div class="media">\n        <div class="media-body">\n          <div class="pull-left">\n            <span class=\'label label-success\'>{{start}}</span>\n          </div>\n          <div class="">\n            <img class="img-circle" src="{{image}}" height="60px" width="60px" alt="{{name}}"/>\n          </div>\n\n          <h4 class="media-header">{{name}}</h4>\n          <p>{{title}}</p>\n          <div>\n            <div class="pull-right" v-show="github">\n              <iframe src="http://ghbtns.com/github-btn.html?user={{github}}&type=follow&count=true"\n  allowtransparency="true" frameborder="0" scrolling="0" width="165" height="20"></iframe>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n</article>\n';
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
  twitter: 'Joel_0604',
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
  twitter: 'tejaycar',
  github: 'tejaycar',
  start: 2014
},  {
  name: 'Jenni Kissinger',
  title: 'Programmer/Analyst I',
  image: 'images/jenni1.jpg',
  twitter: 'jennikissinger',
  github: 'jenjaina',
  start: 2014
}, {
  name: 'Kevin Collins',
  title: 'Programmer/Analyst I',
  image: 'images/k2.jpg',
  twitter: 'kevco54',
  github: 'kevincol54',
  start: 2014
}, {
  name: 'Michael Dion',
  title: 'Programmer/Analyst I',
  image: 'images/michael.jpg',
  twitter: 'mwdion',
  github: 'mwdion',
  start: 2015
}, {
  name: 'Brian Kelsey',
  title: 'Programmer/Analyst II',
  image: 'images/brian.jpg',
  github: 'bkelsey',
  start: 2015
}];

},{}],15:[function(require,module,exports){
module.exports = '<div class="container fadeIn">\n  <header>\n    <h1 class="title">Technology</h1>\n  </header>\n  <div class="row">\n    <p class="col-md-6 col-md-offset-3">\n      At JRS, we have 6 development teams. Each team uses\n      a different technology stack for its product line.\n      Every stack must communicate via http/json api, which\n      provides a rich integration amongst the technologies.\n      Over time, we will continue to add new technology, but\n      we also strive to be very selective to keep the on\n      boarding of developers as efficient as possible.\n    </p>\n\n  </div>\n  <div class="row">\n    <div class="col-md-4">\n      <h3 class="title">EireneRx</h3>\n      <ul class="list-group">\n        <li class="list-group-item">RubyOnRails</li>\n        <li class="list-group-item">AngularJS</li>\n        <li class="list-group-item">MySQL</li>\n        <li class="list-group-item">CouchDb</li>\n      </ul>\n    </div>\n    <div class="col-md-4">\n      <h3 class="title">EOM</h3>\n      <ul class="list-group">\n        <li class="list-group-item">RubyOnRails</li>\n        <li class="list-group-item">AngularJS</li>\n        <li class="list-group-item">MySQL</li>\n        <li class="list-group-item">CouchDb</li>\n      </ul>\n    </div>\n    <div class="col-md-4">\n      <h3 class="title">NiaRx</h3>\n      <ul class="list-group">\n        <li class="list-group-item">NodeJS</li>\n        <li class="list-group-item">AngularJS</li>\n        <li class="list-group-item">CouchDb</li>\n      </ul>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-md-4">\n      <h3 class="title">DevOps</h3>\n      <ul class="list-group">\n        <li class="list-group-item">Chef</li>\n        <li class="list-group-item">Ruby</li>\n        <li class="list-group-item">Linux</li>\n      </ul>\n    </div>\n    <div class="col-md-4">\n      <h3 class="title">InterOps - A</h3>\n      <ul class="list-group">\n        <li class="list-group-item">Clojure</li>\n        <li class="list-group-item">Java</li>\n      </ul>\n    </div>\n    <div class="col-md-4">\n      <h3 class="title">InterOps - B</h3>\n      <ul class="list-group">\n        <li class="list-group-item">NodeJS</li>\n        <li class="list-group-item">CouchDb</li>\n      </ul>\n    </div>\n  </div>\n</div>\n';
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
 * Tests for browser support.
 */

var div = document.createElement('div');
// Setup
div.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
// Make sure that link elements get serialized correctly by innerHTML
// This requires a wrapper element in IE
var innerHTMLBug = !div.getElementsByTagName('link').length;
div = undefined;

/**
 * Wrap map from jquery.
 */

var map = {
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  // for script/link/style tags to work in IE6-8, you have to wrap
  // in a div with a non-whitespace character in front, ha!
  _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
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
/* Firebase v1.0.24 - License: https://www.firebase.com/terms/terms-of-service.html */ (function() {var scope={};(function(){"use strict";function m(c,b){if(0===c.length||0===b.length)return c.concat(b);var a=c[c.length-1],d=Math.round(a/1099511627776)||32,e;if(32===d)e=c.concat(b);else{e=b;var a=a|0,f=c.slice(0,c.length-1),g;for(void 0===f&&(f=[]);32<=d;d-=32)f.push(a),a=0;if(0===d)e=f.concat(e);else{for(g=0;g<e.length;g++)f.push(a|e[g]>>>d),a=e[g]<<32-d;g=e.length?e[e.length-1]:0;e=Math.round(g/1099511627776)||32;f.push(n(d+e&31,32<d+e?a:f.pop(),1));e=f}}return e}
function p(c){var b=c.length;return 0===b?0:32*(b-1)+(Math.round(c[b-1]/1099511627776)||32)}function n(c,b,a){return 32===c?b:(a?b|0:b<<32-c)+1099511627776*c}function r(c){c?(this.c=c.c.slice(0),this.b=c.b.slice(0),this.a=c.a):this.reset()}
r.prototype={d:512,reset:function(){this.c=this.e.slice(0);this.b=[];this.a=0;return this},update:function(c){if("string"===typeof c){c=unescape(encodeURIComponent(c));var b=[],a,d=0;for(a=0;a<c.length;a++)d=d<<8|c.charCodeAt(a),3===(a&3)&&(b.push(d),d=0);a&3&&b.push(n(8*(a&3),d));c=b}a=this.b=m(this.b,c);b=this.a;c=this.a=b+p(c);for(b=this.d+b&-this.d;b<=c;b+=this.d)s(this,a.splice(0,16));return this},e:[1732584193,4023233417,2562383102,271733878,3285377520],f:[1518500249,1859775393,2400959708,3395469782]};
function s(c,b){var a,d,e,f,g,l,q,k=b.slice(0),h=c.c;e=h[0];f=h[1];g=h[2];l=h[3];q=h[4];for(a=0;79>=a;a++)16<=a&&(k[a]=(k[a-3]^k[a-8]^k[a-14]^k[a-16])<<1|(k[a-3]^k[a-8]^k[a-14]^k[a-16])>>>31),d=19>=a?f&g|~f&l:39>=a?f^g^l:59>=a?f&g|f&l|g&l:79>=a?f^g^l:void 0,d=(e<<5|e>>>27)+d+q+k[a]+c.f[Math.floor(a/20)]|0,q=l,l=g,g=f<<30|f>>>2,f=e,e=d;h[0]=h[0]+e|0;h[1]=h[1]+f|0;h[2]=h[2]+g|0;h[3]=h[3]+l|0;h[4]=h[4]+q|0}
function t(c){var b=(new r).update(c),a,d=b.b;c=b.c;d=m(d,[n(1,1)]);for(a=d.length+2;a&15;a++)d.push(0);d.push(Math.floor(b.a/4294967296));for(d.push(b.a|0);d.length;)s(b,d.splice(0,16));b.reset();var e,b="";a=0;var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=0,g=p(c);e&&(d=d.substr(0,62)+"-_");for(e=0;6*b.length<g;)b+=d.charAt((f^c[e]>>>a)>>>26),6>a?(f=c[e]<<6-a,a+=26,e++):(f<<=6,a-=6);for(;b.length&3;)b+="=";return b}var u=["sjclHashToBase64"],v=this;
u[0]in v||!v.execScript||v.execScript("var "+u[0]);for(var w;u.length&&(w=u.shift());)u.length||void 0===t?v=v[w]?v[w]:v[w]={}:v[w]=t;}).apply(scope);var sjclHashToBase64=scope['sjclHashToBase64']; var h,aa=this;function m(a){return void 0!==a}function ba(){}function ca(a){a.qb=function(){return a.hd?a.hd:a.hd=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ia(a,b,c){return a.call.apply(a.bind,arguments)}
function ja(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return q.apply(null,arguments)}
function ka(a,b){function c(){}c.prototype=b.prototype;a.ge=b.prototype;a.prototype=new c;a.ee=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};function la(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function ma(){this.mc=void 0}
function na(a,b,c){switch(typeof b){case "string":oa(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(ea(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],na(a,a.mc?a.mc.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),oa(f,c),
c.push(":"),na(a,a.mc?a.mc.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var pa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},qa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function oa(a,b){b.push('"',a.replace(qa,function(a){if(a in pa)return pa[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return pa[a]=e+b.toString(16)}),'"')};function ra(a){return"undefined"!==typeof JSON&&m(JSON.parse)?JSON.parse(a):la(a)}function u(a){if("undefined"!==typeof JSON&&m(JSON.stringify))a=JSON.stringify(a);else{var b=[];na(new ma,a,b);a=b.join("")}return a};function sa(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,v(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var ta={};function x(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}
function y(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:ua.assert(!1,"errorPrefix_ called with argumentNumber > 4.  Need to update it?")}return a=a+" failed: "+(d+" argument ")}function z(a,b,c,d){if((!d||m(c))&&"function"!=da(c))throw Error(y(a,b,d)+"must be a valid function.");}
function va(a,b,c){if(m(c)&&(!ha(c)||null===c))throw Error(y(a,b,!0)+"must be a valid context object.");};function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function wa(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};var ua={},xa=/[\[\].#$\/\u0000-\u001F\u007F]/,ya=/[\[\].#$\u0000-\u001F\u007F]/;function za(a){return p(a)&&0!==a.length&&!xa.test(a)}function Aa(a,b,c){c&&!m(b)||Ba(y(a,1,c),b)}
function Ba(a,b,c,d){c||(c=0);d=d||[];if(!m(b))throw Error(a+"contains undefined"+Ca(d));if("function"==da(b))throw Error(a+"contains a function"+Ca(d)+" with contents: "+b.toString());if(Da(b))throw Error(a+"contains "+b.toString()+Ca(d));if(1E3<c)throw new TypeError(a+"contains a cyclic object value ("+d.slice(0,100).join(".")+"...)");if(p(b)&&b.length>10485760/3&&10485760<sa(b).length)throw Error(a+"contains a string greater than 10485760 utf8 bytes"+Ca(d)+" ('"+b.substring(0,50)+"...')");if(ha(b))for(var e in b)if(A(b,
e)){var f=b[e];if(".priority"!==e&&".value"!==e&&".sv"!==e&&!za(e))throw Error(a+" contains an invalid key ("+e+")"+Ca(d)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');d.push(e);Ba(a,f,c+1,d);d.pop()}}function Ca(a){return 0==a.length?"":" in property '"+a.join(".")+"'"}function Ea(a,b){if(!ha(b)||ea(b))throw Error(y(a,1,!1)+" must be an Object containing the children to replace.");Aa(a,b,!1)}
function Fa(a,b,c,d){if(!d||m(c)){if(Da(c))throw Error(y(a,b,d)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, or null).");if(!(null===c||ga(c)||p(c)||ha(c)&&A(c,".sv")))throw Error(y(a,b,d)+"must be a valid Firebase priority (a string, finite number, or null).");}}
function Ga(a,b,c){if(!c||m(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(y(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function Ha(a,b){if(m(b)&&!za(b))throw Error(y(a,2,!0)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
function Ia(a,b){if(!p(b)||0===b.length||ya.test(b))throw Error(y(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function B(a,b){if(".info"===C(b))throw Error(a+" failed: Can't modify data under /.info/");};function D(a,b,c,d,e,f,g){this.m=a;this.path=b;this.Da=c;this.da=d;this.wa=e;this.Ba=f;this.Xa=g;if(m(this.da)&&m(this.Ba)&&m(this.Da))throw"Query: Can't combine startAt(), endAt(), and limit().";}D.prototype.Qc=function(){x("Query.ref",0,0,arguments.length);return new E(this.m,this.path)};D.prototype.ref=D.prototype.Qc;
D.prototype.eb=function(a,b){x("Query.on",2,4,arguments.length);Ga("Query.on",a,!1);z("Query.on",2,b,!1);var c=Ja("Query.on",arguments[2],arguments[3]);this.m.Qb(this,a,b,c.cancel,c.Y);return b};D.prototype.on=D.prototype.eb;D.prototype.xb=function(a,b,c){x("Query.off",0,3,arguments.length);Ga("Query.off",a,!0);z("Query.off",2,b,!0);va("Query.off",3,c);this.m.lc(this,a,b,c)};D.prototype.off=D.prototype.xb;
D.prototype.Td=function(a,b){function c(g){f&&(f=!1,e.xb(a,c),b.call(d.Y,g))}x("Query.once",2,4,arguments.length);Ga("Query.once",a,!1);z("Query.once",2,b,!1);var d=Ja("Query.once",arguments[2],arguments[3]),e=this,f=!0;this.eb(a,c,function(b){e.xb(a,c);d.cancel&&d.cancel.call(d.Y,b)})};D.prototype.once=D.prototype.Td;
D.prototype.Md=function(a){x("Query.limit",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw"Query.limit: First argument must be a positive integer.";return new D(this.m,this.path,a,this.da,this.wa,this.Ba,this.Xa)};D.prototype.limit=D.prototype.Md;D.prototype.wd=function(a,b){x("Query.startAt",0,2,arguments.length);Fa("Query.startAt",1,a,!0);Ha("Query.startAt",b);m(a)||(b=a=null);return new D(this.m,this.path,this.Da,a,b,this.Ba,this.Xa)};D.prototype.startAt=D.prototype.wd;
D.prototype.cd=function(a,b){x("Query.endAt",0,2,arguments.length);Fa("Query.endAt",1,a,!0);Ha("Query.endAt",b);return new D(this.m,this.path,this.Da,this.da,this.wa,a,b)};D.prototype.endAt=D.prototype.cd;D.prototype.Gd=function(a,b){x("Query.equalTo",1,2,arguments.length);Fa("Query.equalTo",1,a,!1);Ha("Query.equalTo",b);return this.wd(a,b).cd(a,b)};D.prototype.equalTo=D.prototype.Gd;
function Ka(a){var b={};m(a.da)&&(b.sp=a.da);m(a.wa)&&(b.sn=a.wa);m(a.Ba)&&(b.ep=a.Ba);m(a.Xa)&&(b.en=a.Xa);m(a.Da)&&(b.l=a.Da);m(a.da)&&m(a.wa)&&null===a.da&&null===a.wa&&(b.vf="l");return b}D.prototype.Ra=function(){var a=La(Ka(this));return"{}"===a?"default":a};
function Ja(a,b,c){var d={};if(b&&c)d.cancel=b,z(a,3,d.cancel,!0),d.Y=c,va(a,4,d.Y);else if(b)if("object"===typeof b&&null!==b)d.Y=b;else if("function"===typeof b)d.cancel=b;else throw Error(ta.fe(a,3,!0)+"must either be a cancel callback or a context object.");return d};function F(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.U=0}else this.o=a,this.U=b}function C(a){return a.U>=a.o.length?null:a.o[a.U]}function Ma(a){var b=a.U;b<a.o.length&&b++;return new F(a.o,b)}function Na(a){return a.U<a.o.length?a.o[a.o.length-1]:null}h=F.prototype;h.toString=function(){for(var a="",b=this.U;b<this.o.length;b++)""!==this.o[b]&&(a+="/"+this.o[b]);return a||"/"};
h.parent=function(){if(this.U>=this.o.length)return null;for(var a=[],b=this.U;b<this.o.length-1;b++)a.push(this.o[b]);return new F(a,0)};h.G=function(a){for(var b=[],c=this.U;c<this.o.length;c++)b.push(this.o[c]);if(a instanceof F)for(c=a.U;c<a.o.length;c++)b.push(a.o[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new F(b,0)};h.f=function(){return this.U>=this.o.length};h.length=function(){return this.o.length-this.U};
function Oa(a,b){var c=C(a);if(null===c)return b;if(c===C(b))return Oa(Ma(a),Ma(b));throw"INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")";}h.contains=function(a){var b=this.U,c=a.U;if(this.length()>a.length())return!1;for(;b<this.o.length;){if(this.o[b]!==a.o[c])return!1;++b;++c}return!0};function Pa(){this.children={};this.wc=0;this.value=null}function Qa(a,b,c){this.Ea=a?a:"";this.Db=b?b:null;this.C=c?c:new Pa}function I(a,b){for(var c=b instanceof F?b:new F(b),d=a,e;null!==(e=C(c));)d=new Qa(e,d,wa(d.C.children,e)||new Pa),c=Ma(c);return d}h=Qa.prototype;h.j=function(){return this.C.value};function J(a,b){v("undefined"!==typeof b,"Cannot set value to undefined");a.C.value=b;Ra(a)}h.rb=function(){return 0<this.C.wc};h.f=function(){return null===this.j()&&!this.rb()};
h.A=function(a){for(var b in this.C.children)a(new Qa(b,this,this.C.children[b]))};function Sa(a,b,c,d){c&&!d&&b(a);a.A(function(a){Sa(a,b,!0,d)});c&&d&&b(a)}function Ta(a,b,c){for(a=c?a:a.parent();null!==a;){if(b(a))return!0;a=a.parent()}return!1}h.path=function(){return new F(null===this.Db?this.Ea:this.Db.path()+"/"+this.Ea)};h.name=function(){return this.Ea};h.parent=function(){return this.Db};
function Ra(a){if(null!==a.Db){var b=a.Db,c=a.Ea,d=a.f(),e=A(b.C.children,c);d&&e?(delete b.C.children[c],b.C.wc--,Ra(b)):d||e||(b.C.children[c]=a.C,b.C.wc++,Ra(b))}};function Ua(a,b){this.Va=a?a:Va;this.ca=b?b:Wa}function Va(a,b){return a<b?-1:a>b?1:0}h=Ua.prototype;h.qa=function(a,b){return new Ua(this.Va,this.ca.qa(a,b,this.Va).J(null,null,!1,null,null))};h.remove=function(a){return new Ua(this.Va,this.ca.remove(a,this.Va).J(null,null,!1,null,null))};h.get=function(a){for(var b,c=this.ca;!c.f();){b=this.Va(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
function Xa(a,b){for(var c,d=a.ca,e=null;!d.f();){c=a.Va(b,d.key);if(0===c){if(d.left.f())return e?e.key:null;for(d=d.left;!d.right.f();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}h.f=function(){return this.ca.f()};h.count=function(){return this.ca.count()};h.wb=function(){return this.ca.wb()};h.ab=function(){return this.ca.ab()};h.Ca=function(a){return this.ca.Ca(a)};h.Sa=function(a){return this.ca.Sa(a)};
h.$a=function(a){return new Ya(this.ca,a)};function Ya(a,b){this.rd=b;for(this.$b=[];!a.f();)this.$b.push(a),a=a.left}function Za(a){if(0===a.$b.length)return null;var b=a.$b.pop(),c;c=a.rd?a.rd(b.key,b.value):{key:b.key,value:b.value};for(b=b.right;!b.f();)a.$b.push(b),b=b.left;return c}function $a(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:Wa;this.right=null!=e?e:Wa}h=$a.prototype;
h.J=function(a,b,c,d,e){return new $a(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};h.count=function(){return this.left.count()+1+this.right.count()};h.f=function(){return!1};h.Ca=function(a){return this.left.Ca(a)||a(this.key,this.value)||this.right.Ca(a)};h.Sa=function(a){return this.right.Sa(a)||a(this.key,this.value)||this.left.Sa(a)};function cb(a){return a.left.f()?a:cb(a.left)}h.wb=function(){return cb(this).key};
h.ab=function(){return this.right.f()?this.key:this.right.ab()};h.qa=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.J(null,null,null,e.left.qa(a,b,c),null):0===d?e.J(null,b,null,null,null):e.J(null,null,null,null,e.right.qa(a,b,c));return db(e)};function eb(a){if(a.left.f())return Wa;a.left.P()||a.left.left.P()||(a=fb(a));a=a.J(null,null,null,eb(a.left),null);return db(a)}
h.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.f()||c.left.P()||c.left.left.P()||(c=fb(c)),c=c.J(null,null,null,c.left.remove(a,b),null);else{c.left.P()&&(c=gb(c));c.right.f()||c.right.P()||c.right.left.P()||(c=hb(c),c.left.left.P()&&(c=gb(c),c=hb(c)));if(0===b(a,c.key)){if(c.right.f())return Wa;d=cb(c.right);c=c.J(d.key,d.value,null,null,eb(c.right))}c=c.J(null,null,null,null,c.right.remove(a,b))}return db(c)};h.P=function(){return this.color};
function db(a){a.right.P()&&!a.left.P()&&(a=ib(a));a.left.P()&&a.left.left.P()&&(a=gb(a));a.left.P()&&a.right.P()&&(a=hb(a));return a}function fb(a){a=hb(a);a.right.left.P()&&(a=a.J(null,null,null,null,gb(a.right)),a=ib(a),a=hb(a));return a}function ib(a){return a.right.J(null,null,a.color,a.J(null,null,!0,null,a.right.left),null)}function gb(a){return a.left.J(null,null,a.color,null,a.J(null,null,!0,a.left.right,null))}
function hb(a){return a.J(null,null,!a.color,a.left.J(null,null,!a.left.color,null,null),a.right.J(null,null,!a.right.color,null,null))}function jb(){}h=jb.prototype;h.J=function(){return this};h.qa=function(a,b){return new $a(a,b,null)};h.remove=function(){return this};h.count=function(){return 0};h.f=function(){return!0};h.Ca=function(){return!1};h.Sa=function(){return!1};h.wb=function(){return null};h.ab=function(){return null};h.P=function(){return!1};var Wa=new jb;function kb(a){this.Ub=a;this.hc="firebase:"}kb.prototype.set=function(a,b){null==b?this.Ub.removeItem(this.hc+a):this.Ub.setItem(this.hc+a,u(b))};kb.prototype.get=function(a){a=this.Ub.getItem(this.hc+a);return null==a?null:ra(a)};kb.prototype.remove=function(a){this.Ub.removeItem(this.hc+a)};kb.prototype.kd=!1;function lb(){this.mb={}}lb.prototype.set=function(a,b){null==b?delete this.mb[a]:this.mb[a]=b};lb.prototype.get=function(a){return A(this.mb,a)?this.mb[a]:null};lb.prototype.remove=function(a){delete this.mb[a]};lb.prototype.kd=!0;function mb(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new kb(b)}}catch(c){}return new lb}var nb=mb("localStorage"),ob=mb("sessionStorage");function pb(a,b,c,d){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.nc=b;this.Zb=c;this.ce=d;this.ga=nb.get("host:"+a)||this.host}function qb(a,b){b!==a.ga&&(a.ga=b,"s-"===a.ga.substr(0,2)&&nb.set("host:"+a.host,a.ga))}pb.prototype.toString=function(){return(this.nc?"https://":"http://")+this.host};var rb=Array.prototype,sb=rb.forEach?function(a,b,c){rb.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},tb=rb.map?function(a,b,c){return rb.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},ub=rb.reduce?function(a,b,c,d){d&&(b=q(b,d));return rb.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;sb(a,function(c,g){e=b.call(d,e,c,g,a)});return e},
vb=rb.every?function(a,b,c){return rb.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function wb(a,b){var c;a:{c=a.length;for(var d=p(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:p(a)?a.charAt(c):a[c]};var xb;a:{var yb=aa.navigator;if(yb){var zb=yb.userAgent;if(zb){xb=zb;break a}}xb=""}function Ab(a){return-1!=xb.indexOf(a)};var Bb=Ab("Opera")||Ab("OPR"),Cb=Ab("Trident")||Ab("MSIE"),Db=Ab("Gecko")&&-1==xb.toLowerCase().indexOf("webkit")&&!(Ab("Trident")||Ab("MSIE")),Eb=-1!=xb.toLowerCase().indexOf("webkit");(function(){var a="",b;if(Bb&&aa.opera)return a=aa.opera.version,"function"==da(a)?a():a;Db?b=/rv\:([^\);]+)(\)|;)/:Cb?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Eb&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(xb))?a[1]:"");return Cb&&(b=(b=aa.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var Fb=null,Gb=null;var Hb=function(){var a=1;return function(){return a++}}();function v(a,b){if(!a)throw Error("Firebase INTERNAL ASSERT FAILED:"+b);}function Ib(a){for(var b="",c=0;c<arguments.length;c++)b=fa(arguments[c])?b+Ib.apply(null,arguments[c]):"object"===typeof arguments[c]?b+u(arguments[c]):b+arguments[c],b+=" ";return b}var Jb=null,Kb=!0;function K(a){!0===Kb&&(Kb=!1,null===Jb&&!0===ob.get("logging_enabled")&&Lb(!0));if(Jb){var b=Ib.apply(null,arguments);Jb(b)}}
function Mb(a){return function(){K(a,arguments)}}function Nb(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+Ib.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function Ob(a){var b=Ib.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function L(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+Ib.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
function Da(a){return ga(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}function Pb(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
function Qb(a,b){return a!==b?null===a?-1:null===b?1:typeof a!==typeof b?"number"===typeof a?-1:1:a>b?1:-1:0}function Rb(a,b){if(a===b)return 0;var c=Sb(a),d=Sb(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function Tb(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+u(b));}
function La(a){if("object"!==typeof a||null===a)return u(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=u(b[d]),c+=":",c+=La(a[b[d]]);return c+"}"}function Ub(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function Vb(a,b){if(ea(a))for(var c=0;c<a.length;++c)b(c,a[c]);else Wb(a,b)}function Xb(a,b){return b?q(a,b):a}
function Yb(a){v(!Da(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;a-=1)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;a-=1)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
(d="0"+d),c+=d;return c.toLowerCase()}function Zb(a){var b="Unknown Error";"too_big"===a?b="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==a?b="Client doesn't have permission to access the desired data.":"unavailable"==a&&(b="The service is unavailable");b=Error(a+": "+b);b.code=a.toUpperCase();return b}var $b=/^-?\d{1,10}$/;function Sb(a){return $b.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}
function ac(a){try{a()}catch(b){setTimeout(function(){throw b;},Math.floor(0))}};function bc(a,b){this.F=a;v(null!==this.F,"LeafNode shouldn't be created with null value.");this.fb="undefined"!==typeof b?b:null}h=bc.prototype;h.O=function(){return!0};h.k=function(){return this.fb};h.Ha=function(a){return new bc(this.F,a)};h.N=function(){return M};h.K=function(a){return null===C(a)?this:M};h.fa=function(){return null};h.H=function(a,b){return(new N).H(a,b).Ha(this.fb)};h.ya=function(a,b){var c=C(a);return null===c?b:this.H(c,M.ya(Ma(a),b))};h.f=function(){return!1};h.ac=function(){return 0};
h.V=function(a){return a&&null!==this.k()?{".value":this.j(),".priority":this.k()}:this.j()};h.hash=function(){var a="";null!==this.k()&&(a+="priority:"+cc(this.k())+":");var b=typeof this.F,a=a+(b+":"),a="number"===b?a+Yb(this.F):a+this.F;return sjclHashToBase64(a)};h.j=function(){return this.F};h.toString=function(){return"string"===typeof this.F?this.F:'"'+this.F+'"'};function dc(a,b){return Qb(a.ja,b.ja)||Rb(a.name,b.name)}function ec(a,b){return Rb(a.name,b.name)}function fc(a,b){return Rb(a,b)};function N(a,b){this.n=a||new Ua(fc);this.fb="undefined"!==typeof b?b:null}h=N.prototype;h.O=function(){return!1};h.k=function(){return this.fb};h.Ha=function(a){return new N(this.n,a)};h.H=function(a,b){var c=this.n.remove(a);b&&b.f()&&(b=null);null!==b&&(c=c.qa(a,b));return b&&null!==b.k()?new gc(c,null,this.fb):new N(c,this.fb)};h.ya=function(a,b){var c=C(a);if(null===c)return b;var d=this.N(c).ya(Ma(a),b);return this.H(c,d)};h.f=function(){return this.n.f()};h.ac=function(){return this.n.count()};
var ic=/^(0|[1-9]\d*)$/;h=N.prototype;h.V=function(a){if(this.f())return null;var b={},c=0,d=0,e=!0;this.A(function(f,g){b[f]=g.V(a);c++;e&&ic.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],g;for(g in b)f[g]=b[g];return f}a&&null!==this.k()&&(b[".priority"]=this.k());return b};h.hash=function(){var a="";null!==this.k()&&(a+="priority:"+cc(this.k())+":");this.A(function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});return""===a?"":sjclHashToBase64(a)};
h.N=function(a){a=this.n.get(a);return null===a?M:a};h.K=function(a){var b=C(a);return null===b?this:this.N(b).K(Ma(a))};h.fa=function(a){return Xa(this.n,a)};h.ed=function(){return this.n.wb()};h.gd=function(){return this.n.ab()};h.A=function(a){return this.n.Ca(a)};h.Bc=function(a){return this.n.Sa(a)};h.$a=function(){return this.n.$a()};h.toString=function(){var a="{",b=!0;this.A(function(c,d){b?b=!1:a+=", ";a+='"'+c+'" : '+d.toString()});return a+="}"};var M=new N;function gc(a,b,c){N.call(this,a,c);null===b&&(b=new Ua(dc),a.Ca(function(a,c){b=b.qa({name:a,ja:c.k()},c)}));this.va=b}ka(gc,N);h=gc.prototype;h.H=function(a,b){var c=this.N(a),d=this.n,e=this.va;null!==c&&(d=d.remove(a),e=e.remove({name:a,ja:c.k()}));b&&b.f()&&(b=null);null!==b&&(d=d.qa(a,b),e=e.qa({name:a,ja:b.k()},b));return new gc(d,e,this.k())};h.fa=function(a,b){var c=Xa(this.va,{name:a,ja:b.k()});return c?c.name:null};h.A=function(a){return this.va.Ca(function(b,c){return a(b.name,c)})};
h.Bc=function(a){return this.va.Sa(function(b,c){return a(b.name,c)})};h.$a=function(){return this.va.$a(function(a,b){return{key:a.name,value:b}})};h.ed=function(){return this.va.f()?null:this.va.wb().name};h.gd=function(){return this.va.f()?null:this.va.ab().name};function O(a,b){if(null===a)return M;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);v(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new bc(a,c);if(a instanceof Array){var d=M,e=a;Wb(e,function(a,b){if(A(e,b)&&"."!==b.substring(0,1)){var c=O(a);if(c.O()||!c.f())d=
d.H(b,c)}});return d.Ha(c)}var f=[],g={},k=!1,l=a;Vb(l,function(a,b){if("string"!==typeof b||"."!==b.substring(0,1)){var c=O(l[b]);c.f()||(k=k||null!==c.k(),f.push({name:b,ja:c.k()}),g[b]=c)}});var n=jc(f,g,!1);if(k){var r=jc(f,g,!0);return new gc(n,r,c)}return new N(n,c)}var kc=Math.log(2);function lc(a){this.count=parseInt(Math.log(a+1)/kc,10);this.ad=this.count-1;this.Dd=a+1&parseInt(Array(this.count+1).join("1"),2)}function mc(a){var b=!(a.Dd&1<<a.ad);a.ad--;return b}
function jc(a,b,c){function d(e,f){var l=f-e;if(0==l)return null;if(1==l){var l=a[e].name,n=c?a[e]:l;return new $a(n,b[l],!1,null,null)}var n=parseInt(l/2,10)+e,r=d(e,n),t=d(n+1,f),l=a[n].name,n=c?a[n]:l;return new $a(n,b[l],!1,r,t)}var e=c?dc:ec;a.sort(e);var f=function(e){function f(e,g){var k=r-e,t=r;r-=e;var s=a[k].name,k=new $a(c?a[k]:s,b[s],g,null,d(k+1,t));l?l.left=k:n=k;l=k}for(var l=null,n=null,r=a.length,t=0;t<e.count;++t){var s=mc(e),w=Math.pow(2,e.count-(t+1));s?f(w,!1):(f(w,!1),f(w,!0))}return n}(new lc(a.length)),
e=c?dc:fc;return null!==f?new Ua(e,f):new Ua(e)}function cc(a){return"number"===typeof a?"number:"+Yb(a):"string:"+a};function P(a,b){this.C=a;this.kc=b}P.prototype.V=function(){x("Firebase.DataSnapshot.val",0,0,arguments.length);return this.C.V()};P.prototype.val=P.prototype.V;P.prototype.Hd=function(){x("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.C.V(!0)};P.prototype.exportVal=P.prototype.Hd;P.prototype.G=function(a){x("Firebase.DataSnapshot.child",0,1,arguments.length);ga(a)&&(a=String(a));Ia("Firebase.DataSnapshot.child",a);var b=new F(a),c=this.kc.G(b);return new P(this.C.K(b),c)};
P.prototype.child=P.prototype.G;P.prototype.Ec=function(a){x("Firebase.DataSnapshot.hasChild",1,1,arguments.length);Ia("Firebase.DataSnapshot.hasChild",a);var b=new F(a);return!this.C.K(b).f()};P.prototype.hasChild=P.prototype.Ec;P.prototype.k=function(){x("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.C.k()};P.prototype.getPriority=P.prototype.k;
P.prototype.forEach=function(a){x("Firebase.DataSnapshot.forEach",1,1,arguments.length);z("Firebase.DataSnapshot.forEach",1,a,!1);if(this.C.O())return!1;var b=this;return this.C.A(function(c,d){return a(new P(d,b.kc.G(c)))})};P.prototype.forEach=P.prototype.forEach;P.prototype.rb=function(){x("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.C.O()?!1:!this.C.f()};P.prototype.hasChildren=P.prototype.rb;
P.prototype.name=function(){x("Firebase.DataSnapshot.name",0,0,arguments.length);return this.kc.name()};P.prototype.name=P.prototype.name;P.prototype.ac=function(){x("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.C.ac()};P.prototype.numChildren=P.prototype.ac;P.prototype.Qc=function(){x("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.kc};P.prototype.ref=P.prototype.Qc;function nc(a){v(ea(a)&&0<a.length,"Requires a non-empty array");this.Cd=a;this.vb={}}nc.prototype.Yc=function(a,b){for(var c=this.vb[a]||[],d=0;d<c.length;d++)c[d].aa.apply(c[d].Y,Array.prototype.slice.call(arguments,1))};nc.prototype.eb=function(a,b,c){oc(this,a);this.vb[a]=this.vb[a]||[];this.vb[a].push({aa:b,Y:c});(a=this.fd(a))&&b.apply(c,a)};nc.prototype.xb=function(a,b,c){oc(this,a);a=this.vb[a]||[];for(var d=0;d<a.length;d++)if(a[d].aa===b&&(!c||c===a[d].Y)){a.splice(d,1);break}};
function oc(a,b){v(wb(a.Cd,function(a){return a===b}),"Unknown event: "+b)};function pc(){nc.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.kb=!0;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];b!==c.kb&&(c.kb=b,c.Yc("visible",b))},!1)}}ka(pc,nc);ca(pc);pc.prototype.fd=function(a){v("visible"===a,"Unknown event type: "+a);return[this.kb]};function qc(){nc.call(this,["online"]);this.Bb=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener){var a=this;window.addEventListener("online",function(){a.Bb||a.Yc("online",!0);a.Bb=!0},!1);window.addEventListener("offline",function(){a.Bb&&a.Yc("online",!1);a.Bb=!1},!1)}}ka(qc,nc);ca(qc);qc.prototype.fd=function(a){v("online"===a,"Unknown event type: "+a);return[this.Bb]};function Wb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function rc(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function sc(a){var b={},c;for(c in a)b[c]=a[c];return b};function tc(){this.nb={}}function uc(a,b,c){m(c)||(c=1);A(a.nb,b)||(a.nb[b]=0);a.nb[b]+=c}tc.prototype.get=function(){return sc(this.nb)};function vc(a){this.Ed=a;this.Wb=null}vc.prototype.get=function(){var a=this.Ed.get(),b=sc(a);if(this.Wb)for(var c in this.Wb)b[c]-=this.Wb[c];this.Wb=a;return b};function wc(a,b){this.Vc={};this.qc=new vc(a);this.u=b;var c=1E4+2E4*Math.random();setTimeout(q(this.pd,this),Math.floor(c))}wc.prototype.pd=function(){var a=this.qc.get(),b={},c=!1,d;for(d in a)0<a[d]&&A(this.Vc,d)&&(b[d]=a[d],c=!0);c&&(a=this.u,a.R&&(b={c:b},a.e("reportStats",b),a.Fa("s",b)));setTimeout(q(this.pd,this),Math.floor(6E5*Math.random()))};var xc={},yc={};function zc(a){a=a.toString();xc[a]||(xc[a]=new tc);return xc[a]}function Ac(a,b){var c=a.toString();yc[c]||(yc[c]=b());return yc[c]};var Bc=null;"undefined"!==typeof MozWebSocket?Bc=MozWebSocket:"undefined"!==typeof WebSocket&&(Bc=WebSocket);function Q(a,b,c){this.yc=a;this.e=Mb(this.yc);this.frames=this.tb=null;this.Ia=this.Ja=this.Xc=0;this.ea=zc(b);this.za=(b.nc?"wss://":"ws://")+b.ga+"/.ws?v=5";"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(this.za+="&r=f");b.host!==b.ga&&(this.za=this.za+"&ns="+b.Zb);c&&(this.za=this.za+"&s="+c)}var Cc;
Q.prototype.open=function(a,b){this.ia=b;this.Qd=a;this.e("Websocket connecting to "+this.za);this.W=new Bc(this.za);this.ob=!1;nb.set("previous_websocket_failure",!0);var c=this;this.W.onopen=function(){c.e("Websocket connected.");c.ob=!0};this.W.onclose=function(){c.e("Websocket connection was disconnected.");c.W=null;c.Qa()};this.W.onmessage=function(a){if(null!==c.W)if(a=a.data,c.Ia+=a.length,uc(c.ea,"bytes_received",a.length),Dc(c),null!==c.frames)Ec(c,a);else{a:{v(null===c.frames,"We already have a frame buffer");
if(6>=a.length){var b=Number(a);if(!isNaN(b)){c.Xc=b;c.frames=[];a=null;break a}}c.Xc=1;c.frames=[]}null!==a&&Ec(c,a)}};this.W.onerror=function(a){c.e("WebSocket error.  Closing connection.");(a=a.message||a.data)&&c.e(a);c.Qa()}};Q.prototype.start=function(){};Q.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==Bc&&!Cc};
Q.responsesRequiredToBeHealthy=2;Q.healthyTimeout=3E4;h=Q.prototype;h.Xb=function(){nb.remove("previous_websocket_failure")};function Ec(a,b){a.frames.push(b);if(a.frames.length==a.Xc){var c=a.frames.join("");a.frames=null;c=ra(c);a.Qd(c)}}h.send=function(a){Dc(this);a=u(a);this.Ja+=a.length;uc(this.ea,"bytes_sent",a.length);a=Ub(a,16384);1<a.length&&this.W.send(String(a.length));for(var b=0;b<a.length;b++)this.W.send(a[b])};
h.Lb=function(){this.Na=!0;this.tb&&(clearInterval(this.tb),this.tb=null);this.W&&(this.W.close(),this.W=null)};h.Qa=function(){this.Na||(this.e("WebSocket is closing itself"),this.Lb(),this.ia&&(this.ia(this.ob),this.ia=null))};h.close=function(){this.Na||(this.e("WebSocket is being closed"),this.Lb())};function Dc(a){clearInterval(a.tb);a.tb=setInterval(function(){a.W&&a.W.send("0");Dc(a)},Math.floor(45E3))};function Fc(a){this.Lc=a;this.gc=[];this.Wa=0;this.xc=-1;this.Pa=null}function Gc(a,b,c){a.xc=b;a.Pa=c;a.xc<a.Wa&&(a.Pa(),a.Pa=null)}function Hc(a,b,c){for(a.gc[b]=c;a.gc[a.Wa];){var d=a.gc[a.Wa];delete a.gc[a.Wa];for(var e=0;e<d.length;++e)if(d[e]){var f=a;ac(function(){f.Lc(d[e])})}if(a.Wa===a.xc){a.Pa&&(clearTimeout(a.Pa),a.Pa(),a.Pa=null);break}a.Wa++}};function Ic(){this.set={}}h=Ic.prototype;h.add=function(a,b){this.set[a]=null!==b?b:!0};h.contains=function(a){return A(this.set,a)};h.get=function(a){return this.contains(a)?this.set[a]:void 0};h.remove=function(a){delete this.set[a]};h.f=function(){var a;a:{a=this.set;for(var b in a){a=!1;break a}a=!0}return a};h.count=function(){var a=this.set,b=0,c;for(c in a)b++;return b};function R(a,b){Wb(a.set,function(a,d){b(d,a)})}h.keys=function(){var a=[];Wb(this.set,function(b,c){a.push(c)});return a};function Jc(a,b,c){this.yc=a;this.e=Mb(a);this.Ia=this.Ja=0;this.ea=zc(b);this.pc=c;this.ob=!1;this.Pb=function(a){b.host!==b.ga&&(a.ns=b.Zb);var c=[],f;for(f in a)a.hasOwnProperty(f)&&c.push(f+"="+a[f]);return(b.nc?"https://":"http://")+b.ga+"/.lp?"+c.join("&")}}var Kc,Lc;
Jc.prototype.open=function(a,b){this.$c=0;this.S=b;this.ld=new Fc(a);this.Na=!1;var c=this;this.Ka=setTimeout(function(){c.e("Timed out trying to connect.");c.Qa();c.Ka=null},Math.floor(3E4));Pb(function(){if(!c.Na){c.la=new Mc(function(a,b,d,k,l){Nc(c,arguments);if(c.la)if(c.Ka&&(clearTimeout(c.Ka),c.Ka=null),c.ob=!0,"start"==a)c.id=b,c.od=d;else if("close"===a)b?(c.la.oc=!1,Gc(c.ld,b,function(){c.Qa()})):c.Qa();else throw Error("Unrecognized command received: "+a);},function(a,b){Nc(c,arguments);
Hc(c.ld,a,b)},function(){c.Qa()},c.Pb);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.la.rc&&(a.cb=c.la.rc);a.v="5";c.pc&&(a.s=c.pc);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.Pb(a);c.e("Connecting via long-poll to "+a);Oc(c.la,a,function(){})}})};
Jc.prototype.start=function(){var a=this.la,b=this.od;a.Od=this.id;a.Pd=b;for(a.uc=!0;Pc(a););a=this.id;b=this.od;this.bb=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.bb.src=this.Pb(c);this.bb.style.display="none";document.body.appendChild(this.bb)};Jc.isAvailable=function(){return!Lc&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.de)&&(Kc||!0)};h=Jc.prototype;
h.Xb=function(){};h.Lb=function(){this.Na=!0;this.la&&(this.la.close(),this.la=null);this.bb&&(document.body.removeChild(this.bb),this.bb=null);this.Ka&&(clearTimeout(this.Ka),this.Ka=null)};h.Qa=function(){this.Na||(this.e("Longpoll is closing itself"),this.Lb(),this.S&&(this.S(this.ob),this.S=null))};h.close=function(){this.Na||(this.e("Longpoll is being closed."),this.Lb())};
h.send=function(a){a=u(a);this.Ja+=a.length;uc(this.ea,"bytes_sent",a.length);a=sa(a);if(!fa(a))throw Error("encodeByteArray takes an array as a parameter");if(!Fb){Fb={};Gb={};for(var b=0;65>b;b++)Fb[b]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b),Gb[b]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(b)}for(var b=Gb,c=[],d=0;d<a.length;d+=3){var e=a[d],f=d+1<a.length,g=f?a[d+1]:0,k=d+2<a.length,l=k?a[d+2]:0,n=e>>2,e=(e&3)<<4|g>>4,g=(g&15)<<
2|l>>6,l=l&63;k||(l=64,f||(g=64));c.push(b[n],b[e],b[g],b[l])}a=Ub(c.join(""),1840);for(b=0;b<a.length;b++)c=this.la,c.Fb.push({Yd:this.$c,be:a.length,bd:a[b]}),c.uc&&Pc(c),this.$c++};function Nc(a,b){var c=u(b).length;a.Ia+=c;uc(a.ea,"bytes_received",c)}
function Mc(a,b,c,d){this.Pb=d;this.ia=c;this.Nc=new Ic;this.Fb=[];this.zc=Math.floor(1E8*Math.random());this.oc=!0;this.rc=Hb();window["pLPCommand"+this.rc]=a;window["pRTLPCB"+this.rc]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||K("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
a.contentDocument?a.Aa=a.contentDocument:a.contentWindow?a.Aa=a.contentWindow.document:a.document&&(a.Aa=a.document);this.Z=a;a="";this.Z.src&&"javascript:"===this.Z.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Z.Aa.open(),this.Z.Aa.write(a),this.Z.Aa.close()}catch(f){K("frame writing exception"),f.stack&&K(f.stack),K(f)}}
Mc.prototype.close=function(){this.uc=!1;if(this.Z){this.Z.Aa.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Z&&(document.body.removeChild(a.Z),a.Z=null)},Math.floor(0))}var b=this.ia;b&&(this.ia=null,b())};
function Pc(a){if(a.uc&&a.oc&&a.Nc.count()<(0<a.Fb.length?2:1)){a.zc++;var b={};b.id=a.Od;b.pw=a.Pd;b.ser=a.zc;for(var b=a.Pb(b),c="",d=0;0<a.Fb.length;)if(1870>=a.Fb[0].bd.length+30+c.length){var e=a.Fb.shift(),c=c+"&seg"+d+"="+e.Yd+"&ts"+d+"="+e.be+"&d"+d+"="+e.bd;d++}else break;Sc(a,b+c,a.zc);return!0}return!1}function Sc(a,b,c){function d(){a.Nc.remove(c);Pc(a)}a.Nc.add(c);var e=setTimeout(d,Math.floor(25E3));Oc(a,b,function(){clearTimeout(e);d()})}
function Oc(a,b,c){setTimeout(function(){try{if(a.oc){var d=a.Z.Aa.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){K("Long-poll script failed to load: "+b);a.oc=!1;a.close()};a.Z.Aa.body.appendChild(d)}}catch(e){}},Math.floor(1))};function Tc(a){Uc(this,a)}var Vc=[Jc,Q];function Uc(a,b){var c=Q&&Q.isAvailable(),d=c&&!(nb.kd||!0===nb.get("previous_websocket_failure"));b.ce&&(c||L("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.Mb=[Q];else{var e=a.Mb=[];Vb(Vc,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function Wc(a){if(0<a.Mb.length)return a.Mb[0];throw Error("No transports available");};function Xc(a,b,c,d,e,f){this.id=a;this.e=Mb("c:"+this.id+":");this.Lc=c;this.Ab=d;this.S=e;this.Kc=f;this.M=b;this.fc=[];this.Zc=0;this.yd=new Tc(b);this.ma=0;this.e("Connection created");Yc(this)}
function Yc(a){var b=Wc(a.yd);a.B=new b("c:"+a.id+":"+a.Zc++,a.M);a.Pc=b.responsesRequiredToBeHealthy||0;var c=Zc(a,a.B),d=$c(a,a.B);a.Nb=a.B;a.Kb=a.B;a.w=null;a.Oa=!1;setTimeout(function(){a.B&&a.B.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.Vb=setTimeout(function(){a.Vb=null;a.Oa||(a.B&&102400<a.B.Ia?(a.e("Connection exceeded healthy timeout but has received "+a.B.Ia+" bytes.  Marking connection healthy."),a.Oa=!0,a.B.Xb()):a.B&&10240<a.B.Ja?a.e("Connection exceeded healthy timeout but has sent "+
a.B.Ja+" bytes.  Leaving connection alive."):(a.e("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function $c(a,b){return function(c){b===a.B?(a.B=null,c||0!==a.ma?1===a.ma&&a.e("Realtime connection lost."):(a.e("Realtime connection failed."),"s-"===a.M.ga.substr(0,2)&&(nb.remove("host:"+a.M.host),a.M.ga=a.M.host)),a.close()):b===a.w?(a.e("Secondary connection lost."),c=a.w,a.w=null,a.Nb!==c&&a.Kb!==c||a.close()):a.e("closing an old connection")}}
function Zc(a,b){return function(c){if(2!=a.ma)if(b===a.Kb){var d=Tb("t",c);c=Tb("d",c);if("c"==d){if(d=Tb("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.pc=c.s;qb(a.M,f);0==a.ma&&(a.B.start(),ad(a,a.B,d),"5"!==e&&L("Protocol version mismatch detected"),c=a.yd,(c=1<c.Mb.length?c.Mb[1]:null)&&bd(a,c))}else if("n"===d){a.e("recvd end transmission on primary");a.Kb=a.w;for(c=0;c<a.fc.length;++c)a.dc(a.fc[c]);a.fc=[];cd(a)}else"s"===d?(a.e("Connection shutdown command received. Shutting down..."),
a.Kc&&(a.Kc(c),a.Kc=null),a.S=null,a.close()):"r"===d?(a.e("Reset packet received.  New host: "+c),qb(a.M,c),1===a.ma?a.close():(dd(a),Yc(a))):"e"===d?Nb("Server Error: "+c):"o"===d?(a.e("got pong on primary."),ed(a),fd(a)):Nb("Unknown control packet command: "+d)}else"d"==d&&a.dc(c)}else if(b===a.w)if(d=Tb("t",c),c=Tb("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?gd(a):"r"===c?(a.e("Got a reset on secondary, closing it"),a.w.close(),a.Nb!==a.w&&a.Kb!==a.w||a.close()):"o"===c&&(a.e("got pong on secondary."),
a.td--,gd(a)));else if("d"==d)a.fc.push(c);else throw Error("Unknown protocol layer: "+d);else a.e("message on old connection")}}Xc.prototype.ud=function(a){hd(this,{t:"d",d:a})};function cd(a){a.Nb===a.w&&a.Kb===a.w&&(a.e("cleaning up and promoting a connection: "+a.w.yc),a.B=a.w,a.w=null)}
function gd(a){0>=a.td?(a.e("Secondary connection is healthy."),a.Oa=!0,a.w.Xb(),a.w.start(),a.e("sending client ack on secondary"),a.w.send({t:"c",d:{t:"a",d:{}}}),a.e("Ending transmission on primary"),a.B.send({t:"c",d:{t:"n",d:{}}}),a.Nb=a.w,cd(a)):(a.e("sending ping on secondary."),a.w.send({t:"c",d:{t:"p",d:{}}}))}Xc.prototype.dc=function(a){ed(this);this.Lc(a)};function ed(a){a.Oa||(a.Pc--,0>=a.Pc&&(a.e("Primary connection is healthy."),a.Oa=!0,a.B.Xb()))}
function bd(a,b){a.w=new b("c:"+a.id+":"+a.Zc++,a.M,a.pc);a.td=b.responsesRequiredToBeHealthy||0;a.w.open(Zc(a,a.w),$c(a,a.w));setTimeout(function(){a.w&&(a.e("Timed out trying to upgrade."),a.w.close())},Math.floor(6E4))}function ad(a,b,c){a.e("Realtime connection established.");a.B=b;a.ma=1;a.Ab&&(a.Ab(c),a.Ab=null);0===a.Pc?(a.e("Primary connection is healthy."),a.Oa=!0):setTimeout(function(){fd(a)},Math.floor(5E3))}
function fd(a){a.Oa||1!==a.ma||(a.e("sending ping on primary."),hd(a,{t:"c",d:{t:"p",d:{}}}))}function hd(a,b){if(1!==a.ma)throw"Connection is not connected";a.Nb.send(b)}Xc.prototype.close=function(){2!==this.ma&&(this.e("Closing realtime connection."),this.ma=2,dd(this),this.S&&(this.S(),this.S=null))};function dd(a){a.e("Shutting down all connections");a.B&&(a.B.close(),a.B=null);a.w&&(a.w.close(),a.w=null);a.Vb&&(clearTimeout(a.Vb),a.Vb=null)};function id(a,b,c,d,e,f){this.id=jd++;this.e=Mb("p:"+this.id+":");this.Ta=!0;this.ha={};this.T=[];this.Cb=0;this.zb=[];this.R=!1;this.sa=1E3;this.Yb=3E5;this.ec=b||ba;this.cc=c||ba;this.yb=d||ba;this.Mc=e||ba;this.Dc=f||ba;this.M=a;this.Rc=null;this.Jb={};this.Xd=0;this.ub=this.Hc=null;kd(this,0);pc.qb().eb("visible",this.Sd,this);-1===a.host.indexOf("fblocal")&&qc.qb().eb("online",this.Rd,this)}var jd=0,ld=0;h=id.prototype;
h.Fa=function(a,b,c){var d=++this.Xd;a={r:d,a:a,b:b};this.e(u(a));v(this.R,"sendRequest_ call when we're not connected not allowed.");this.ka.ud(a);c&&(this.Jb[d]=c)};function md(a,b,c){var d=b.toString(),e=b.path().toString();a.ha[e]=a.ha[e]||{};v(!a.ha[e][d],"listen() called twice for same path/queryId.");a.ha[e][d]={gb:b.gb(),D:c};a.R&&nd(a,e,d,b.gb(),c)}
function nd(a,b,c,d,e){a.e("Listen on "+b+" for "+c);var f={p:b};d=tb(d,function(a){return Ka(a)});"{}"!==c&&(f.q=d);f.h=a.Dc(b);a.Fa("l",f,function(d){a.e("listen response",d);d=d.s;"ok"!==d&&od(a,b,c);e&&e(d)})}
h.lb=function(a,b,c){this.La={Fd:a,dd:!1,aa:b,Rb:c};this.e("Authenticating using credential: "+this.La);pd(this);if(!(b=40==a.length))a:{var d;try{var e=a.split(".");if(3!==e.length){b=!1;break a}var f;b:{try{if("undefined"!==typeof atob){f=atob(e[1]);break b}}catch(g){K("base64DecodeIfNativeSupport failed: ",g)}f=null}null!==f&&(d=ra(f))}catch(k){K("isAdminAuthToken_ failed",k)}b="object"===typeof d&&!0===wa(d,"admin")}b&&(this.e("Admin auth credential detected.  Reducing max reconnect time."),this.Yb=
3E4)};h.Ob=function(a){delete this.La;this.yb(!1);this.R&&this.Fa("unauth",{},function(b){a(b.s,b.d)})};function pd(a){var b=a.La;a.R&&b&&a.Fa("auth",{cred:b.Fd},function(c){var d=c.s;c=c.d||"error";"ok"!==d&&a.La===b&&delete a.La;a.yb("ok"===d);b.dd?"ok"!==d&&b.Rb&&b.Rb(d,c):(b.dd=!0,b.aa&&b.aa(d,c))})}function qd(a,b,c,d){b=b.toString();od(a,b,c)&&a.R&&rd(a,b,c,d)}function rd(a,b,c,d){a.e("Unlisten on "+b+" for "+c);b={p:b};d=tb(d,function(a){return Ka(a)});"{}"!==c&&(b.q=d);a.Fa("u",b)}
function sd(a,b,c,d){a.R?td(a,"o",b,c,d):a.zb.push({Oc:b,action:"o",data:c,D:d})}function ud(a,b,c,d){a.R?td(a,"om",b,c,d):a.zb.push({Oc:b,action:"om",data:c,D:d})}h.Jc=function(a,b){this.R?td(this,"oc",a,null,b):this.zb.push({Oc:a,action:"oc",data:null,D:b})};function td(a,b,c,d,e){c={p:c,d:d};a.e("onDisconnect "+b,c);a.Fa(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}h.put=function(a,b,c,d){vd(this,"p",a,b,c,d)};function wd(a,b,c,d){vd(a,"m",b,c,d,void 0)}
function vd(a,b,c,d,e,f){c={p:c,d:d};m(f)&&(c.h=f);a.T.push({action:b,qd:c,D:e});a.Cb++;b=a.T.length-1;a.R&&xd(a,b)}function xd(a,b){var c=a.T[b].action,d=a.T[b].qd,e=a.T[b].D;a.T[b].Ud=a.R;a.Fa(c,d,function(d){a.e(c+" response",d);delete a.T[b];a.Cb--;0===a.Cb&&(a.T=[]);e&&e(d.s,d.d)})}
h.dc=function(a){if("r"in a){this.e("from server: "+u(a));var b=a.r,c=this.Jb[b];c&&(delete this.Jb[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,c=a.b,this.e("handleServerMessage",b,c),"d"===b?this.ec(c.p,c.d,!1):"m"===b?this.ec(c.p,c.d,!0):"c"===b?yd(this,c.p,c.q):"ac"===b?(a=c.s,b=c.d,c=this.La,delete this.La,c&&c.Rb&&c.Rb(a,b),this.yb(!1)):"sd"===b?this.Rc?this.Rc(c):"msg"in c&&"undefined"!==typeof console&&console.log("FIREBASE: "+c.msg.replace("\n",
"\nFIREBASE: ")):Nb("Unrecognized action received from server: "+u(b)+"\nAre you using the latest client?"))}};h.Ab=function(a){this.e("connection ready");this.R=!0;this.ub=(new Date).getTime();this.Mc({serverTimeOffset:a-(new Date).getTime()});pd(this);for(var b in this.ha)for(var c in this.ha[b])a=this.ha[b][c],nd(this,b,c,a.gb,a.D);for(b=0;b<this.T.length;b++)this.T[b]&&xd(this,b);for(;this.zb.length;)b=this.zb.shift(),td(this,b.action,b.Oc,b.data,b.D);this.cc(!0)};
function kd(a,b){v(!a.ka,"Scheduling a connect when we're already connected/ing?");a.Ya&&clearTimeout(a.Ya);a.Ya=setTimeout(function(){a.Ya=null;zd(a)},Math.floor(b))}h.Sd=function(a){a&&!this.kb&&this.sa===this.Yb&&(this.e("Window became visible.  Reducing delay."),this.sa=1E3,this.ka||kd(this,0));this.kb=a};
h.Rd=function(a){a?(this.e("Browser went online.  Reconnecting."),this.sa=1E3,this.Ta=!0,this.ka||kd(this,0)):(this.e("Browser went offline.  Killing connection; don't reconnect."),this.Ta=!1,this.ka&&this.ka.close())};
h.md=function(){this.e("data client disconnected");this.R=!1;this.ka=null;for(var a=0;a<this.T.length;a++){var b=this.T[a];b&&"h"in b.qd&&b.Ud&&(b.D&&b.D("disconnect"),delete this.T[a],this.Cb--)}0===this.Cb&&(this.T=[]);if(this.Ta)this.kb?this.ub&&(3E4<(new Date).getTime()-this.ub&&(this.sa=1E3),this.ub=null):(this.e("Window isn't visible.  Delaying reconnect."),this.sa=this.Yb,this.Hc=(new Date).getTime()),a=Math.max(0,this.sa-((new Date).getTime()-this.Hc)),a*=Math.random(),this.e("Trying to reconnect in "+
a+"ms"),kd(this,a),this.sa=Math.min(this.Yb,1.3*this.sa);else for(var c in this.Jb)delete this.Jb[c];this.cc(!1)};function zd(a){if(a.Ta){a.e("Making a connection attempt");a.Hc=(new Date).getTime();a.ub=null;var b=q(a.dc,a),c=q(a.Ab,a),d=q(a.md,a),e=a.id+":"+ld++;a.ka=new Xc(e,a.M,b,c,d,function(b){L(b+" ("+a.M.toString()+")");a.Ta=!1})}}h.Ma=function(){this.Ta=!1;this.ka?this.ka.close():(this.Ya&&(clearTimeout(this.Ya),this.Ya=null),this.R&&this.md())};
h.ib=function(){this.Ta=!0;this.sa=1E3;this.R||kd(this,0)};function yd(a,b,c){c=c?tb(c,function(a){return La(a)}).join("$"):"{}";(a=od(a,b,c))&&a.D&&a.D("permission_denied")}function od(a,b,c){b=(new F(b)).toString();c||(c="{}");var d=a.ha[b][c];delete a.ha[b][c];return d};function Ad(){this.n=this.F=null}function Bd(a,b,c){if(b.f())a.F=c,a.n=null;else if(null!==a.F)a.F=a.F.ya(b,c);else{null==a.n&&(a.n=new Ic);var d=C(b);a.n.contains(d)||a.n.add(d,new Ad);a=a.n.get(d);b=Ma(b);Bd(a,b,c)}}function Cd(a,b){if(b.f())return a.F=null,a.n=null,!0;if(null!==a.F){if(a.F.O())return!1;var c=a.F;a.F=null;c.A(function(b,c){Bd(a,new F(b),c)});return Cd(a,b)}return null!==a.n?(c=C(b),b=Ma(b),a.n.contains(c)&&Cd(a.n.get(c),b)&&a.n.remove(c),a.n.f()?(a.n=null,!0):!1):!0}
function Dd(a,b,c){null!==a.F?c(b,a.F):a.A(function(a,e){var f=new F(b.toString()+"/"+a);Dd(e,f,c)})}Ad.prototype.A=function(a){null!==this.n&&R(this.n,function(b,c){a(b,c)})};function Ed(){this.$=M}function S(a,b){return a.$.K(b)}function T(a,b,c){a.$=a.$.ya(b,c)}Ed.prototype.toString=function(){return this.$.toString()};function Fd(){this.ta=new Ed;this.L=new Ed;this.oa=new Ed;this.Eb=new Qa}function Gd(a,b,c){T(a.ta,b,c);return Hd(a,b)}function Hd(a,b){for(var c=S(a.ta,b),d=S(a.L,b),e=I(a.Eb,b),f=!1,g=e;null!==g;){if(null!==g.j()){f=!0;break}g=g.parent()}if(f)return!1;c=Id(c,d,e);return c!==d?(T(a.L,b,c),!0):!1}function Id(a,b,c){if(c.f())return a;if(null!==c.j())return b;a=a||M;c.A(function(d){d=d.name();var e=a.N(d),f=b.N(d),g=I(c,d),e=Id(e,f,g);a=a.H(d,e)});return a}
Fd.prototype.set=function(a,b){var c=this,d=[];sb(b,function(a){var b=a.path;a=a.ra;var g=Hb();J(I(c.Eb,b),g);T(c.L,b,a);d.push({path:b,Zd:g})});return d};function Jd(a,b){sb(b,function(b){var d=b.Zd;b=I(a.Eb,b.path);var e=b.j();v(null!==e,"pendingPut should not be null.");e===d&&J(b,null)})};function Kd(a,b){return a&&"object"===typeof a?(v(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function Ld(a,b){var c=new Ad;Dd(a,new F(""),function(a,e){Bd(c,a,Md(e,b))});return c}function Md(a,b){var c=Kd(a.k(),b),d;if(a.O()){var e=Kd(a.j(),b);return e!==a.j()||c!==a.k()?new bc(e,c):a}d=a;c!==a.k()&&(d=d.Ha(c));a.A(function(a,c){var e=Md(c,b);e!==c&&(d=d.H(a,e))});return d};function Nd(){this.Za=[]}function Od(a,b){if(0!==b.length)for(var c=0;c<b.length;c++)a.Za.push(b[c])}Nd.prototype.Hb=function(){for(var a=0;a<this.Za.length;a++)if(this.Za[a]){var b=this.Za[a];this.Za[a]=null;Pd(b)}this.Za=[]};function Pd(a){var b=a.aa,c=a.vd,d=a.Gb;ac(function(){b(c,d)})};function U(a,b,c,d){this.type=a;this.ua=b;this.ba=c;this.Gb=d};function Qd(a){this.Q=a;this.pa=[];this.Ac=new Nd}function Rd(a,b,c,d,e){a.pa.push({type:b,aa:c,cancel:d,Y:e});d=[];var f=Sd(a.i);a.sb&&f.push(new U("value",a.i));for(var g=0;g<f.length;g++)if(f[g].type===b){var k=new E(a.Q.m,a.Q.path);f[g].ba&&(k=k.G(f[g].ba));d.push({aa:Xb(c,e),vd:new P(f[g].ua,k),Gb:f[g].Gb})}Od(a.Ac,d)}Qd.prototype.ic=function(a,b){b=this.jc(a,b);null!=b&&Td(this,b)};
function Td(a,b){for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e.type,g=new E(a.Q.m,a.Q.path);b[d].ba&&(g=g.G(b[d].ba));g=new P(b[d].ua,g);"value"!==e.type||g.rb()?"value"!==e.type&&(f+=" "+g.name()):f+="("+g.V()+")";K(a.Q.m.u.id+": event:"+a.Q.path+":"+a.Q.Ra()+":"+f);for(f=0;f<a.pa.length;f++){var k=a.pa[f];b[d].type===k.type&&c.push({aa:Xb(k.aa,k.Y),vd:g,Gb:e.Gb})}}Od(a.Ac,c)}Qd.prototype.Hb=function(){this.Ac.Hb()};
function Sd(a){var b=[];if(!a.O()){var c=null;a.A(function(a,e){b.push(new U("child_added",e,a,c));c=a})}return b}function Ud(a){a.sb||(a.sb=!0,Td(a,[new U("value",a.i)]))};function Vd(a,b){Qd.call(this,a);this.i=b}ka(Vd,Qd);Vd.prototype.jc=function(a,b){this.i=a;this.sb&&null!=b&&b.push(new U("value",this.i));return b};Vd.prototype.pb=function(){return{}};function Wd(a,b){this.Tb=a;this.Ic=b}function Xd(a,b,c,d,e){var f=a.K(c),g=b.K(c);d=new Wd(d,e);e=Yd(d,c,f,g);g=!f.f()&&!g.f()&&f.k()!==g.k();if(e||g)for(f=c,c=e;null!==f.parent();){var k=a.K(f);e=b.K(f);var l=f.parent();if(!d.Tb||I(d.Tb,l).j()){var n=b.K(l),r=[],f=Na(f);k.f()?(k=n.fa(f,e),r.push(new U("child_added",e,f,k))):e.f()?r.push(new U("child_removed",k,f)):(k=n.fa(f,e),g&&r.push(new U("child_moved",e,f,k)),c&&r.push(new U("child_changed",e,f,k)));d.Ic(l,n,r)}g&&(g=!1,c=!0);f=l}}
function Yd(a,b,c,d){var e,f=[];c===d?e=!1:c.O()&&d.O()?e=c.j()!==d.j():c.O()?(Zd(a,b,M,d,f),e=!0):d.O()?(Zd(a,b,c,M,f),e=!0):e=Zd(a,b,c,d,f);e?a.Ic(b,d,f):c.k()!==d.k()&&a.Ic(b,d,null);return e}
function Zd(a,b,c,d,e){var f=!1,g=!a.Tb||!I(a.Tb,b).f(),k=[],l=[],n=[],r=[],t={},s={},w,V,G,H;w=c.$a();G=Za(w);V=d.$a();for(H=Za(V);null!==G||null!==H;){c=H;c=null===G?1:null===c?-1:G.key===c.key?0:dc({name:G.key,ja:G.value.k()},{name:c.key,ja:c.value.k()});if(0>c)f=wa(t,G.key),m(f)?(n.push({Cc:G,Wc:k[f]}),k[f]=null):(s[G.key]=l.length,l.push(G)),f=!0,G=Za(w);else{if(0<c)f=wa(s,H.key),m(f)?(n.push({Cc:l[f],Wc:H}),l[f]=null):(t[H.key]=k.length,k.push(H)),f=!0;else{c=b.G(H.key);if(c=Yd(a,c,G.value,
H.value))r.push(H),f=!0;G.value.k()!==H.value.k()&&(n.push({Cc:G,Wc:H}),f=!0);G=Za(w)}H=Za(V)}if(!g&&f)return!0}for(g=0;g<l.length;g++)if(t=l[g])c=b.G(t.key),Yd(a,c,t.value,M),e.push(new U("child_removed",t.value,t.key));for(g=0;g<k.length;g++)if(t=k[g])c=b.G(t.key),l=d.fa(t.key,t.value),Yd(a,c,M,t.value),e.push(new U("child_added",t.value,t.key,l));for(g=0;g<n.length;g++)t=n[g].Cc,k=n[g].Wc,c=b.G(k.key),l=d.fa(k.key,k.value),e.push(new U("child_moved",k.value,k.key,l)),(c=Yd(a,c,t.value,k.value))&&
r.push(k);for(g=0;g<r.length;g++)a=r[g],l=d.fa(a.key,a.value),e.push(new U("child_changed",a.value,a.key,l));return f};function $d(){this.X=this.xa=null;this.set={}}ka($d,Ic);h=$d.prototype;h.setActive=function(a){this.xa=a};function ae(a,b,c){a.add(b,c);a.X||(a.X=c.Q.path)}function be(a){var b=a.xa;a.xa=null;return b}function ce(a){return a.contains("default")}function de(a){return null!=a.xa&&ce(a)}h.defaultView=function(){return ce(this)?this.get("default"):null};h.path=function(){return this.X};h.toString=function(){return tb(this.keys(),function(a){return"default"===a?"{}":a}).join("$")};
h.gb=function(){var a=[];R(this,function(b,c){a.push(c.Q)});return a};function ee(a,b){Qd.call(this,a);this.i=M;this.jc(b,Sd(b))}ka(ee,Qd);
ee.prototype.jc=function(a,b){if(null===b)return b;var c=[],d=this.Q;m(d.da)&&(m(d.wa)&&null!=d.wa?c.push(function(a,b){var c=Qb(b,d.da);return 0<c||0===c&&0<=Rb(a,d.wa)}):c.push(function(a,b){return 0<=Qb(b,d.da)}));m(d.Ba)&&(m(d.Xa)?c.push(function(a,b){var c=Qb(b,d.Ba);return 0>c||0===c&&0>=Rb(a,d.Xa)}):c.push(function(a,b){return 0>=Qb(b,d.Ba)}));var e=null,f=null;if(m(this.Q.Da))if(m(this.Q.da)){if(e=fe(a,c,this.Q.Da,!1)){var g=a.N(e).k();c.push(function(a,b){var c=Qb(b,g);return 0>c||0===c&&
0>=Rb(a,e)})}}else if(f=fe(a,c,this.Q.Da,!0)){var k=a.N(f).k();c.push(function(a,b){var c=Qb(b,k);return 0<c||0===c&&0<=Rb(a,f)})}for(var l=[],n=[],r=[],t=[],s=0;s<b.length;s++){var w=b[s].ba,V=b[s].ua;switch(b[s].type){case "child_added":ge(c,w,V)&&(this.i=this.i.H(w,V),n.push(b[s]));break;case "child_removed":this.i.N(w).f()||(this.i=this.i.H(w,null),l.push(b[s]));break;case "child_changed":!this.i.N(w).f()&&ge(c,w,V)&&(this.i=this.i.H(w,V),t.push(b[s]));break;case "child_moved":var G=!this.i.N(w).f(),
H=ge(c,w,V);G?H?(this.i=this.i.H(w,V),r.push(b[s])):(l.push(new U("child_removed",this.i.N(w),w)),this.i=this.i.H(w,null)):H&&(this.i=this.i.H(w,V),n.push(b[s]))}}var Qc=e||f;if(Qc){var Rc=(s=null!==f)?this.i.ed():this.i.gd(),hc=!1,ab=!1,bb=this;(s?a.Bc:a.A).call(a,function(a,b){ab||null!==Rc||(ab=!0);if(ab&&hc)return!0;hc?(l.push(new U("child_removed",bb.i.N(a),a)),bb.i=bb.i.H(a,null)):ab&&(n.push(new U("child_added",b,a)),bb.i=bb.i.H(a,b));Rc===a&&(ab=!0);a===Qc&&(hc=!0)})}for(s=0;s<n.length;s++)c=
n[s],w=this.i.fa(c.ba,c.ua),l.push(new U("child_added",c.ua,c.ba,w));for(s=0;s<r.length;s++)c=r[s],w=this.i.fa(c.ba,c.ua),l.push(new U("child_moved",c.ua,c.ba,w));for(s=0;s<t.length;s++)c=t[s],w=this.i.fa(c.ba,c.ua),l.push(new U("child_changed",c.ua,c.ba,w));this.sb&&0<l.length&&l.push(new U("value",this.i));return l};function fe(a,b,c,d){if(a.O())return null;var e=null;(d?a.Bc:a.A).call(a,function(a,d){if(ge(b,a,d)&&(e=a,c--,0===c))return!0});return e}
function ge(a,b,c){for(var d=0;d<a.length;d++)if(!a[d](b,c.k()))return!1;return!0}ee.prototype.Ec=function(a){return this.i.N(a)!==M};
ee.prototype.pb=function(a,b,c){var d={};this.i.O()||this.i.A(function(a){d[a]=3});var e=this.i;c=S(c,new F(""));var f=new Qa;J(I(f,this.Q.path),!0);b=M.ya(a,b);var g=this;Xd(c,b,a,f,function(a,b,c){null!==c&&a.toString()===g.Q.path.toString()&&g.jc(b,c)});this.i.O()?Wb(d,function(a,b){d[b]=2}):(this.i.A(function(a){A(d,a)||(d[a]=1)}),Wb(d,function(a,b){g.i.N(b).f()&&(d[b]=2)}));this.i=e;return d};function he(a,b){this.u=a;this.g=b;this.bc=b.$;this.na=new Qa}he.prototype.Qb=function(a,b,c,d,e){var f=a.path,g=I(this.na,f),k=g.j();null===k?(k=new $d,J(g,k)):v(!k.f(),"We shouldn't be storing empty QueryMaps");var l=a.Ra();if(k.contains(l))a=k.get(l),Rd(a,b,c,d,e);else{var n=this.g.$.K(f);a=ie(a,n);je(this,g,k,l,a);Rd(a,b,c,d,e);(b=(b=Ta(I(this.na,f),function(a){var b;if(b=a.j()&&a.j().defaultView())b=a.j().defaultView().sb;if(b)return!0},!0))||null===this.u&&!S(this.g,f).f())&&Ud(a)}a.Hb()};
function ke(a,b,c,d,e){var f=a.get(b),g;if(g=f){g=!1;for(var k=f.pa.length-1;0<=k;k--){var l=f.pa[k];if(!(c&&l.type!==c||d&&l.aa!==d||e&&l.Y!==e)&&(f.pa.splice(k,1),g=!0,c&&d))break}}(c=g&&!(0<f.pa.length))&&a.remove(b);return c}function le(a,b,c,d,e){b=b?b.Ra():null;var f=[];b&&"default"!==b?ke(a,b,c,d,e)&&f.push(b):sb(a.keys(),function(b){ke(a,b,c,d,e)&&f.push(b)});return f}he.prototype.lc=function(a,b,c,d){var e=I(this.na,a.path).j();return null===e?null:me(this,e,a,b,c,d)};
function me(a,b,c,d,e,f){var g=b.path(),g=I(a.na,g);c=le(b,c,d,e,f);b.f()&&J(g,null);d=ne(g);if(0<c.length&&!d){d=g;e=g.parent();for(c=!1;!c&&e;){if(f=e.j()){v(!de(f));var k=d.name(),l=!1;R(f,function(a,b){l=b.Ec(k)||l});l&&(c=!0)}d=e;e=e.parent()}d=null;de(b)||(b=be(b),d=oe(a,g),b&&b());return c?null:d}return null}function pe(a,b,c){Sa(I(a.na,b),function(a){(a=a.j())&&R(a,function(a,b){Ud(b)})},c,!0)}
function W(a,b,c){function d(a){do{if(g[a.toString()])return!0;a=a.parent()}while(null!==a);return!1}var e=a.bc,f=a.g.$;a.bc=f;for(var g={},k=0;k<c.length;k++)g[c[k].toString()]=!0;Xd(e,f,b,a.na,function(c,e,f){if(b.contains(c)){var g=d(c);g&&pe(a,c,!1);a.ic(c,e,f);g&&pe(a,c,!0)}else a.ic(c,e,f)});d(b)&&pe(a,b,!0);qe(a,b)}function qe(a,b){var c=I(a.na,b);Sa(c,function(a){(a=a.j())&&R(a,function(a,b){b.Hb()})},!0,!0);Ta(c,function(a){(a=a.j())&&R(a,function(a,b){b.Hb()})},!1)}
he.prototype.ic=function(a,b,c){a=I(this.na,a).j();null!==a&&R(a,function(a,e){e.ic(b,c)})};function ne(a){return Ta(a,function(a){return a.j()&&de(a.j())})}function je(a,b,c,d,e){if(de(c)||ne(b))ae(c,d,e);else{var f,g;c.f()||(f=c.toString(),g=c.gb());ae(c,d,e);c.setActive(re(a,c));f&&g&&qd(a.u,c.path(),f,g)}de(c)&&Sa(b,function(a){if(a=a.j())a.xa&&a.xa(),a.xa=null})}
function oe(a,b){function c(b){var f=b.j();if(f&&ce(f))d.push(f.path()),null==f.xa&&f.setActive(re(a,f));else{if(f){null!=f.xa||f.setActive(re(a,f));var g={};R(f,function(a,b){b.i.A(function(a){A(g,a)||(g[a]=!0,a=f.path().G(a),d.push(a))})})}b.A(c)}}var d=[];c(b);return d}
function re(a,b){if(a.u){var c=a.u,d=b.path(),e=b.toString(),f=b.gb(),g,k=b.keys(),l=ce(b);md(a.u,b,function(c){"ok"!==c?(c=Zb(c),L("on() or once() for "+b.path().toString()+" failed: "+c.toString()),se(a,b,c)):g||(l?pe(a,b.path(),!0):sb(k,function(a){(a=b.get(a))&&Ud(a)}),qe(a,b.path()))});return function(){g=!0;qd(c,d,e,f)}}return ba}function se(a,b,c){b&&(R(b,function(a,b){for(var f=0;f<b.pa.length;f++){var g=b.pa[f];g.cancel&&Xb(g.cancel,g.Y)(c)}}),me(a,b))}
function ie(a,b){return"default"===a.Ra()?new Vd(a,b):new ee(a,b)}he.prototype.pb=function(a,b,c,d){function e(a){Wb(a,function(a,b){f[b]=3===a?3:(wa(f,b)||a)===a?a:3})}var f={};R(b,function(b,f){e(f.pb(a,c,d))});c.O()||c.A(function(a){A(f,a)||(f[a]=4)});return f};function te(a,b,c,d,e){var f=b.path();b=a.pb(f,b,d,e);var g=M,k=[];Wb(b,function(b,n){var r=new F(n);3===b||1===b?g=g.H(n,d.K(r)):(2===b&&k.push({path:f.G(n),ra:M}),k=k.concat(ue(a,d.K(r),I(c,r),e)))});return[{path:f,ra:g}].concat(k)}
function ve(a,b,c,d){var e;a:{var f=I(a.na,b);e=f.parent();for(var g=[];null!==e;){var k=e.j();if(null!==k){if(ce(k)){e=[{path:b,ra:c}];break a}k=a.pb(b,k,c,d);f=wa(k,f.name());if(3===f||1===f){e=[{path:b,ra:c}];break a}2===f&&g.push({path:b,ra:M})}f=e;e=e.parent()}e=g}if(1==e.length&&(!e[0].ra.f()||c.f()))return e;g=I(a.na,b);f=g.j();null!==f?ce(f)?e.push({path:b,ra:c}):e=e.concat(te(a,f,g,c,d)):e=e.concat(ue(a,c,g,d));return e}
function ue(a,b,c,d){var e=c.j();if(null!==e)return ce(e)?[{path:c.path(),ra:b}]:te(a,e,c,b,d);var f=[];c.A(function(c){var e=b.O()?M:b.N(c.name());c=ue(a,e,c,d);f=f.concat(c)});return f};function we(a){this.M=a;this.ea=zc(a);this.u=new id(this.M,q(this.ec,this),q(this.cc,this),q(this.yb,this),q(this.Mc,this),q(this.Dc,this));this.xd=Ac(a,q(function(){return new wc(this.ea,this.u)},this));this.Ua=new Qa;this.Ga=new Ed;this.g=new Fd;this.I=new he(this.u,this.g.oa);this.Fc=new Ed;this.Gc=new he(null,this.Fc);xe(this,"connected",!1);xe(this,"authenticated",!1);this.S=new Ad;this.Sb=0}h=we.prototype;h.toString=function(){return(this.M.nc?"https://":"http://")+this.M.host};h.name=function(){return this.M.Zb};
function ye(a){a=S(a.Fc,new F(".info/serverTimeOffset")).V()||0;return(new Date).getTime()+a}function ze(a){a=a={timestamp:ye(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
h.ec=function(a,b,c){this.Sb++;this.jd&&(b=this.jd(a,b));var d,e,f=[];9<=a.length&&a.lastIndexOf(".priority")===a.length-9?(d=new F(a.substring(0,a.length-9)),e=S(this.g.ta,d).Ha(b),f.push(d)):c?(d=new F(a),e=S(this.g.ta,d),Wb(b,function(a,b){var c=new F(b);".priority"===b?e=e.Ha(a):(e=e.ya(c,O(a)),f.push(d.G(b)))})):(d=new F(a),e=O(b),f.push(d));a=ve(this.I,d,e,this.g.L);b=!1;for(c=0;c<a.length;++c){var g=a[c];b=Gd(this.g,g.path,g.ra)||b}b&&(d=Ae(this,d));W(this.I,d,f)};
h.cc=function(a){xe(this,"connected",a);!1===a&&Be(this)};h.Mc=function(a){var b=this;Vb(a,function(a,d){xe(b,d,a)})};h.Dc=function(a){a=new F(a);return S(this.g.ta,a).hash()};h.yb=function(a){xe(this,"authenticated",a)};function xe(a,b,c){b=new F("/.info/"+b);T(a.Fc,b,O(c));W(a.Gc,b,[b])}
h.lb=function(a,b,c){"firebaseio-demo.com"===this.M.domain&&L("FirebaseRef.auth() not supported on demo (*.firebaseio-demo.com) Firebases. Please use on production (*.firebaseio.com) Firebases only.");this.u.lb(a,function(a,c){X(b,a,c)},function(a,b){L("auth() was canceled: "+b);if(c){var f=Error(b);f.code=a.toUpperCase();c(f)}})};h.Ob=function(a){this.u.Ob(function(b,c){X(a,b,c)})};
h.jb=function(a,b,c,d){this.e("set",{path:a.toString(),value:b,ja:c});var e=ze(this);b=O(b,c);var e=Md(b,e),e=ve(this.I,a,e,this.g.L),f=this.g.set(a,e),g=this;this.u.put(a.toString(),b.V(!0),function(b,c){"ok"!==b&&L("set at "+a+" failed: "+b);Jd(g.g,f);Hd(g.g,a);var e=Ae(g,a);W(g.I,e,[]);X(d,b,c)});e=Ce(this,a);Ae(this,e);W(this.I,e,[a])};
h.update=function(a,b,c){this.e("update",{path:a.toString(),value:b});var d=S(this.g.oa,a),e=!0,f=[],g=ze(this),k=[],l;for(l in b){var e=!1,n=O(b[l]),n=Md(n,g),d=d.H(l,n),r=a.G(l);f.push(r);n=ve(this.I,r,n,this.g.L);k=k.concat(this.g.set(a,n))}if(e)K("update() called with empty data.  Don't do anything."),X(c,"ok");else{var t=this;wd(this.u,a.toString(),b,function(b,d){"ok"!==b&&L("update at "+a+" failed: "+b);Jd(t.g,k);Hd(t.g,a);var e=Ae(t,a);W(t.I,e,[]);X(c,b,d)});b=Ce(this,a);Ae(this,b);W(t.I,
b,f)}};h.Sc=function(a,b,c){this.e("setPriority",{path:a.toString(),ja:b});var d=ze(this),d=Kd(b,d),d=S(this.g.L,a).Ha(d),d=ve(this.I,a,d,this.g.L),e=this.g.set(a,d),f=this;this.u.put(a.toString()+"/.priority",b,function(b,d){"permission_denied"===b&&L("setPriority at "+a+" failed: "+b);Jd(f.g,e);Hd(f.g,a);var l=Ae(f,a);W(f.I,l,[]);X(c,b,d)});b=Ae(this,a);W(f.I,b,[])};
function Be(a){a.e("onDisconnectEvents");var b=[],c=ze(a);Dd(Ld(a.S,c),new F(""),function(c,e){var f=ve(a.I,c,e,a.g.L);b.push.apply(b,a.g.set(c,f));f=Ce(a,c);Ae(a,f);W(a.I,f,[c])});Jd(a.g,b);a.S=new Ad}h.Jc=function(a,b){var c=this;this.u.Jc(a.toString(),function(d,e){"ok"===d&&Cd(c.S,a);X(b,d,e)})};function De(a,b,c,d){var e=O(c);sd(a.u,b.toString(),e.V(!0),function(c,g){"ok"===c&&Bd(a.S,b,e);X(d,c,g)})}
function Ee(a,b,c,d,e){var f=O(c,d);sd(a.u,b.toString(),f.V(!0),function(c,d){"ok"===c&&Bd(a.S,b,f);X(e,c,d)})}function Fe(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(K("onDisconnect().update() called with empty data.  Don't do anything."),X(d,"ok")):ud(a.u,b.toString(),c,function(e,f){if("ok"===e)for(var l in c){var n=O(c[l]);Bd(a.S,b.G(l),n)}X(d,e,f)})}function Ge(a){uc(a.ea,"deprecated_on_disconnect");a.xd.Vc.deprecated_on_disconnect=!0}
h.Qb=function(a,b,c,d,e){".info"===C(a.path)?this.Gc.Qb(a,b,c,d,e):this.I.Qb(a,b,c,d,e)};h.lc=function(a,b,c,d){if(".info"===C(a.path))this.Gc.lc(a,b,c,d);else{b=this.I.lc(a,b,c,d);if(c=null!==b){c=this.g;d=a.path;for(var e=[],f=0;f<b.length;++f)e[f]=S(c.ta,b[f]);T(c.ta,d,M);for(f=0;f<b.length;++f)T(c.ta,b[f],e[f]);c=Hd(c,d)}c&&(v(this.g.oa.$===this.I.bc,"We should have raised any outstanding events by now.  Else, we'll blow them away."),T(this.g.oa,a.path,S(this.g.L,a.path)),this.I.bc=this.g.oa.$)}};
h.Ma=function(){this.u.Ma()};h.ib=function(){this.u.ib()};h.Tc=function(a){if("undefined"!==typeof console){a?(this.qc||(this.qc=new vc(this.ea)),a=this.qc.get()):a=this.ea.get();var b=ub(rc(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};h.Uc=function(a){uc(this.ea,a);this.xd.Vc[a]=!0};h.e=function(){K("r:"+this.u.id+":",arguments)};
function X(a,b,c){a&&ac(function(){if("ok"==b)a(null,c);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function He(a,b,c,d,e){function f(){}a.e("transaction on "+b);var g=new E(a,b);g.eb("value",f);c={path:b,update:c,D:d,status:null,nd:Hb(),vc:e,sd:0,sc:function(){g.xb("value",f)},tc:null};a.Ga.$=Ie(a,a.Ga.$,a.g.L.$,a.Ua);d=c.update(S(a.Ga,b).V());if(m(d)){Ba("transaction failed: Data returned ",d);c.status=1;e=I(a.Ua,b);var k=e.j()||[];k.push(c);J(e,k);k="object"===typeof d&&null!==d&&A(d,".priority")?d[".priority"]:S(a.g.L,b).k();e=ze(a);d=O(d,k);d=Md(d,e);T(a.Ga,b,d);c.vc&&(T(a.g.oa,b,d),W(a.I,
b,[b]));Je(a)}else c.sc(),c.D&&(a=Ke(a,b),c.D(null,!1,a))}function Je(a,b){var c=b||a.Ua;b||Le(a,c);if(null!==c.j()){var d=Me(a,c);v(0<d.length);vb(d,function(a){return 1===a.status})&&Ne(a,c.path(),d)}else c.rb()&&c.A(function(b){Je(a,b)})}
function Ne(a,b,c){for(var d=0;d<c.length;d++)v(1===c[d].status,"tryToSendTransactionQueue_: items in queue should all be run."),c[d].status=2,c[d].sd++;var e=S(a.g.L,b).hash();T(a.g.L,b,S(a.g.oa,b));for(var f=S(a.Ga,b).V(!0),g=Hb(),k=Oe(c),d=0;d<k.length;d++)J(I(a.g.Eb,k[d]),g);a.u.put(b.toString(),f,function(e){a.e("transaction put response",{path:b.toString(),status:e});for(d=0;d<k.length;d++){var f=I(a.g.Eb,k[d]),r=f.j();v(null!==r,"sendTransactionQueue_: pendingPut should not be null.");r===
g&&(J(f,null),T(a.g.L,k[d],S(a.g.ta,k[d])))}if("ok"===e){e=[];for(d=0;d<c.length;d++)c[d].status=3,c[d].D&&(f=Ke(a,c[d].path),e.push(q(c[d].D,null,null,!0,f))),c[d].sc();Le(a,I(a.Ua,b));Je(a);for(d=0;d<e.length;d++)ac(e[d])}else{if("datastale"===e)for(d=0;d<c.length;d++)c[d].status=4===c[d].status?5:1;else for(L("transaction at "+b+" failed: "+e),d=0;d<c.length;d++)c[d].status=5,c[d].tc=e;e=Ae(a,b);W(a.I,e,[b])}},e)}
function Oe(a){for(var b={},c=0;c<a.length;c++)a[c].vc&&(b[a[c].path.toString()]=a[c].path);a=[];for(var d in b)a.push(b[d]);return a}
function Ae(a,b){var c=Pe(a,b),d=c.path(),c=Me(a,c);T(a.g.oa,d,S(a.g.L,d));T(a.Ga,d,S(a.g.L,d));if(0!==c.length){for(var e=S(a.g.oa,d),f=e,g=[],k=0;k<c.length;k++){var l=Oa(d,c[k].path),n=!1,r;v(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===c[k].status)n=!0,r=c[k].tc;else if(1===c[k].status)if(25<=c[k].sd)n=!0,r="maxretry";else{var t=e.K(l),s=c[k].update(t.V());if(m(s)){Ba("transaction failed: Data returned ",s);var w=O(s);"object"===typeof s&&null!=s&&A(s,".priority")||
(w=w.Ha(t.k()));e=e.ya(l,w);c[k].vc&&(f=f.ya(l,w))}else n=!0,r="nodata"}n&&(c[k].status=3,setTimeout(c[k].sc,Math.floor(0)),c[k].D&&(n=new E(a,c[k].path),l=new P(e.K(l),n),"nodata"===r?g.push(q(c[k].D,null,null,!1,l)):g.push(q(c[k].D,null,Error(r),!1,l))))}T(a.Ga,d,e);T(a.g.oa,d,f);Le(a,a.Ua);for(k=0;k<g.length;k++)ac(g[k]);Je(a)}return d}function Pe(a,b){for(var c,d=a.Ua;null!==(c=C(b))&&null===d.j();)d=I(d,c),b=Ma(b);return d}
function Me(a,b){var c=[];Qe(a,b,c);c.sort(function(a,b){return a.nd-b.nd});return c}function Qe(a,b,c){var d=b.j();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.A(function(b){Qe(a,b,c)})}function Le(a,b){var c=b.j();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;J(b,0<c.length?c:null)}b.A(function(b){Le(a,b)})}function Ce(a,b){var c=Pe(a,b).path(),d=I(a.Ua,b);Ta(d,function(a){Re(a)});Re(d);Sa(d,function(a){Re(a)});return c}
function Re(a){var b=a.j();if(null!==b){for(var c=[],d=-1,e=0;e<b.length;e++)4!==b[e].status&&(2===b[e].status?(v(d===e-1,"All SENT items should be at beginning of queue."),d=e,b[e].status=4,b[e].tc="set"):(v(1===b[e].status),b[e].sc(),b[e].D&&c.push(q(b[e].D,null,Error("set"),!1,null))));-1===d?J(a,null):b.length=d+1;for(e=0;e<c.length;e++)ac(c[e])}}function Ke(a,b){var c=new E(a,b);return new P(S(a.Ga,b),c)}
function Ie(a,b,c,d){if(d.f())return c;if(null!=d.j())return b;var e=c;d.A(function(d){var g=d.name(),k=new F(g);d=Ie(a,b.K(k),c.K(k),d);e=e.H(g,d)});return e};function Y(){this.hb={}}ca(Y);Y.prototype.Ma=function(){for(var a in this.hb)this.hb[a].Ma()};Y.prototype.interrupt=Y.prototype.Ma;Y.prototype.ib=function(){for(var a in this.hb)this.hb[a].ib()};Y.prototype.resume=Y.prototype.ib;var Z={Kd:function(a){var b=N.prototype.hash;N.prototype.hash=a;var c=bc.prototype.hash;bc.prototype.hash=a;return function(){N.prototype.hash=b;bc.prototype.hash=c}}};Z.hijackHash=Z.Kd;Z.Ra=function(a){return a.Ra()};Z.queryIdentifier=Z.Ra;Z.Nd=function(a){return a.m.u.ha};Z.listens=Z.Nd;Z.Vd=function(a){return a.m.u.ka};Z.refConnection=Z.Vd;Z.Ad=id;Z.DataConnection=Z.Ad;id.prototype.sendRequest=id.prototype.Fa;id.prototype.interrupt=id.prototype.Ma;Z.Bd=Xc;Z.RealTimeConnection=Z.Bd;
Xc.prototype.sendRequest=Xc.prototype.ud;Xc.prototype.close=Xc.prototype.close;Z.zd=pb;Z.ConnectionTarget=Z.zd;Z.Id=function(){Kc=Cc=!0};Z.forceLongPolling=Z.Id;Z.Jd=function(){Lc=!0};Z.forceWebSockets=Z.Jd;Z.ae=function(a,b){a.m.u.Rc=b};Z.setSecurityDebugCallback=Z.ae;Z.Tc=function(a,b){a.m.Tc(b)};Z.stats=Z.Tc;Z.Uc=function(a,b){a.m.Uc(b)};Z.statsIncrementCounter=Z.Uc;Z.Sb=function(a){return a.m.Sb};Z.dataUpdateCount=Z.Sb;Z.Ld=function(a,b){a.m.jd=b};Z.interceptServerData=Z.Ld;function $(a,b,c){this.Ib=a;this.X=b;this.Ea=c}$.prototype.cancel=function(a){x("Firebase.onDisconnect().cancel",0,1,arguments.length);z("Firebase.onDisconnect().cancel",1,a,!0);this.Ib.Jc(this.X,a)};$.prototype.cancel=$.prototype.cancel;$.prototype.remove=function(a){x("Firebase.onDisconnect().remove",0,1,arguments.length);B("Firebase.onDisconnect().remove",this.X);z("Firebase.onDisconnect().remove",1,a,!0);De(this.Ib,this.X,null,a)};$.prototype.remove=$.prototype.remove;
$.prototype.set=function(a,b){x("Firebase.onDisconnect().set",1,2,arguments.length);B("Firebase.onDisconnect().set",this.X);Aa("Firebase.onDisconnect().set",a,!1);z("Firebase.onDisconnect().set",2,b,!0);De(this.Ib,this.X,a,b)};$.prototype.set=$.prototype.set;
$.prototype.jb=function(a,b,c){x("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);B("Firebase.onDisconnect().setWithPriority",this.X);Aa("Firebase.onDisconnect().setWithPriority",a,!1);Fa("Firebase.onDisconnect().setWithPriority",2,b,!1);z("Firebase.onDisconnect().setWithPriority",3,c,!0);if(".length"===this.Ea||".keys"===this.Ea)throw"Firebase.onDisconnect().setWithPriority failed: "+this.Ea+" is a read-only object.";Ee(this.Ib,this.X,a,b,c)};$.prototype.setWithPriority=$.prototype.jb;
$.prototype.update=function(a,b){x("Firebase.onDisconnect().update",1,2,arguments.length);B("Firebase.onDisconnect().update",this.X);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;L("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ea("Firebase.onDisconnect().update",a);z("Firebase.onDisconnect().update",2,b,!0);Fe(this.Ib,
this.X,a,b)};$.prototype.update=$.prototype.update;var Se=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);v(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);v(20===c.length,"NextPushId: Length should be 20.");
return c}}();function E(a,b){var c,d;if(a instanceof we)c=a,d=b;else{x("new Firebase",1,2,arguments.length);var e=arguments[0];d=c="";var f=!0,g="";if(p(e)){var k=e.indexOf("//");if(0<=k)var l=e.substring(0,k-1),e=e.substring(k+2);k=e.indexOf("/");-1===k&&(k=e.length);c=e.substring(0,k);var e=e.substring(k+1),n=c.split(".");if(3==n.length){k=n[2].indexOf(":");f=0<=k?"https"===l||"wss"===l:!0;if("firebase"===n[1])Ob(c+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");else for(d=n[0],
g="",e=("/"+e).split("/"),k=0;k<e.length;k++)if(0<e[k].length){n=e[k];try{n=decodeURIComponent(n.replace(/\+/g," "))}catch(r){}g+="/"+n}d=d.toLowerCase()}else Ob("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com")}f||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&L("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");c=new pb(c,f,d,"ws"===l||"wss"===l);d=new F(g);
f=d.toString();!(l=!p(c.host)||0===c.host.length||!za(c.Zb))&&(l=0!==f.length)&&(f&&(f=f.replace(/^\/*\.info(\/|$)/,"/")),l=!(p(f)&&0!==f.length&&!ya.test(f)));if(l)throw Error(y("new Firebase",1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');if(b)if(b instanceof Y)f=b;else throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");else f=Y.qb();l=c.toString();e=wa(f.hb,l);e||(e=new we(c),f.hb[l]=e);c=e}D.call(this,c,d)}
ka(E,D);var Te=E,Ue=["Firebase"],Ve=aa;Ue[0]in Ve||!Ve.execScript||Ve.execScript("var "+Ue[0]);for(var We;Ue.length&&(We=Ue.shift());)!Ue.length&&m(Te)?Ve[We]=Te:Ve=Ve[We]?Ve[We]:Ve[We]={};E.prototype.name=function(){x("Firebase.name",0,0,arguments.length);return this.path.f()?null:Na(this.path)};E.prototype.name=E.prototype.name;
E.prototype.G=function(a){x("Firebase.child",1,1,arguments.length);if(ga(a))a=String(a);else if(!(a instanceof F))if(null===C(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Ia("Firebase.child",b)}else Ia("Firebase.child",a);return new E(this.m,this.path.G(a))};E.prototype.child=E.prototype.G;E.prototype.parent=function(){x("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new E(this.m,a)};E.prototype.parent=E.prototype.parent;
E.prototype.root=function(){x("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.parent();)a=a.parent();return a};E.prototype.root=E.prototype.root;E.prototype.toString=function(){x("Firebase.toString",0,0,arguments.length);var a;if(null===this.parent())a=this.m.toString();else{a=this.parent().toString()+"/";var b=this.name();a+=encodeURIComponent(String(b))}return a};E.prototype.toString=E.prototype.toString;
E.prototype.set=function(a,b){x("Firebase.set",1,2,arguments.length);B("Firebase.set",this.path);Aa("Firebase.set",a,!1);z("Firebase.set",2,b,!0);this.m.jb(this.path,a,null,b)};E.prototype.set=E.prototype.set;
E.prototype.update=function(a,b){x("Firebase.update",1,2,arguments.length);B("Firebase.update",this.path);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;L("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ea("Firebase.update",a);z("Firebase.update",2,b,!0);if(A(a,".priority"))throw Error("update() does not currently support updating .priority.");
this.m.update(this.path,a,b)};E.prototype.update=E.prototype.update;E.prototype.jb=function(a,b,c){x("Firebase.setWithPriority",2,3,arguments.length);B("Firebase.setWithPriority",this.path);Aa("Firebase.setWithPriority",a,!1);Fa("Firebase.setWithPriority",2,b,!1);z("Firebase.setWithPriority",3,c,!0);if(".length"===this.name()||".keys"===this.name())throw"Firebase.setWithPriority failed: "+this.name()+" is a read-only object.";this.m.jb(this.path,a,b,c)};E.prototype.setWithPriority=E.prototype.jb;
E.prototype.remove=function(a){x("Firebase.remove",0,1,arguments.length);B("Firebase.remove",this.path);z("Firebase.remove",1,a,!0);this.set(null,a)};E.prototype.remove=E.prototype.remove;
E.prototype.transaction=function(a,b,c){x("Firebase.transaction",1,3,arguments.length);B("Firebase.transaction",this.path);z("Firebase.transaction",1,a,!1);z("Firebase.transaction",2,b,!0);if(m(c)&&"boolean"!=typeof c)throw Error(y("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.name()||".keys"===this.name())throw"Firebase.transaction failed: "+this.name()+" is a read-only object.";"undefined"===typeof c&&(c=!0);He(this.m,this.path,a,b,c)};E.prototype.transaction=E.prototype.transaction;
E.prototype.Sc=function(a,b){x("Firebase.setPriority",1,2,arguments.length);B("Firebase.setPriority",this.path);Fa("Firebase.setPriority",1,a,!1);z("Firebase.setPriority",2,b,!0);this.m.Sc(this.path,a,b)};E.prototype.setPriority=E.prototype.Sc;E.prototype.push=function(a,b){x("Firebase.push",0,2,arguments.length);B("Firebase.push",this.path);Aa("Firebase.push",a,!0);z("Firebase.push",2,b,!0);var c=ye(this.m),c=Se(c),c=this.G(c);"undefined"!==typeof a&&null!==a&&c.set(a,b);return c};
E.prototype.push=E.prototype.push;E.prototype.ia=function(){return new $(this.m,this.path,this.name())};E.prototype.onDisconnect=E.prototype.ia;E.prototype.Wd=function(){L("FirebaseRef.removeOnDisconnect() being deprecated. Please use FirebaseRef.onDisconnect().remove() instead.");this.ia().remove();Ge(this.m)};E.prototype.removeOnDisconnect=E.prototype.Wd;
E.prototype.$d=function(a){L("FirebaseRef.setOnDisconnect(value) being deprecated. Please use FirebaseRef.onDisconnect().set(value) instead.");this.ia().set(a);Ge(this.m)};E.prototype.setOnDisconnect=E.prototype.$d;E.prototype.lb=function(a,b,c){x("Firebase.auth",1,3,arguments.length);if(!p(a))throw Error(y("Firebase.auth",1,!1)+"must be a valid credential (a string).");z("Firebase.auth",2,b,!0);z("Firebase.auth",3,b,!0);this.m.lb(a,b,c)};E.prototype.auth=E.prototype.lb;
E.prototype.Ob=function(a){x("Firebase.unauth",0,1,arguments.length);z("Firebase.unauth",1,a,!0);this.m.Ob(a)};E.prototype.unauth=E.prototype.Ob;E.goOffline=function(){x("Firebase.goOffline",0,0,arguments.length);Y.qb().Ma()};E.goOnline=function(){x("Firebase.goOnline",0,0,arguments.length);Y.qb().ib()};
function Lb(a,b){v(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?Jb=q(console.log,console):"object"===typeof console.log&&(Jb=function(a){console.log(a)})),b&&ob.set("logging_enabled",!0)):a?Jb=a:(Jb=null,ob.remove("logging_enabled"))}E.enableLogging=Lb;E.ServerValue={TIMESTAMP:{".sv":"timestamp"}};E.SDK_VERSION="1.0.24";E.INTERNAL=Z;E.Context=Y;})();

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
// Generated on Tue Dec 16 2014 12:13:47 GMT+0100 (CET) by Charlie Robbins, Paolo Fragomeni & the Contributors (Using Codesurgeon).
// Version 1.2.6
//

(function (exports) {

/*
 * browser.js: Browser specific functionality for director.
 *
 * (C) 2011, Charlie Robbins, Paolo Fragomeni, & the Contributors.
 * MIT LICENSE
 *
 */

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
  var self = this
    , routeTo;
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
    if (this.convert_hash_in_init) {
      // Use hash as route
      routeTo = dlocHashEmpty() && r ? r : !dlocHashEmpty() ? dloc.hash.replace(/^#/, '') : null;
      if (routeTo) {
        window.history.replaceState({}, document.title, routeTo);
      }
    }
    else {
      // Use canonical url
      routeTo = this.getPath();
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
  return mod === str ? "([._a-zA-Z0-9-%()]+)" : mod;
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

var QUERY_SEPARATOR = /\?.*/;

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
  this.convert_hash_in_init = this.history === true && options.convert_hash_in_init !== false;
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
  return this;
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

Router.prototype.path = function(path, routesFn) {
  var self = this, length = this.scope.length;
  if (path.source) {
    path = path.source.replace(/\\\//ig, "/");
  }
  path = path.split(new RegExp(this.delimiter));
  path = terminator(path, this.delimiter);
  this.scope = this.scope.concat(path);
  routesFn.call(this, this);
  this.scope.splice(length, path.length);
};

Router.prototype.dispatch = function(method, path, callback) {
  var self = this, fns = this.traverse(method, path.replace(QUERY_SEPARATOR, ""), this.routes, ""), invoked = this._invoked, after;
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
        fn.apply(thisArg, (fns.captures || []).concat(next));
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
//     Underscore.js 1.7.0
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
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.7.0';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var createCallback = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  _.iteratee = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return createCallback(value, context, argCount);
    if (_.isObject(value)) return _.matches(value);
    return _.property(value);
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    if (obj == null) return obj;
    iteratee = createCallback(iteratee, context);
    var i, length = obj.length;
    if (length === +length) {
      for (i = 0; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    if (obj == null) return [];
    iteratee = _.iteratee(iteratee, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length),
        currentKey;
    for (var index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = function(obj, iteratee, memo, context) {
    if (obj == null) obj = [];
    iteratee = createCallback(iteratee, context, 4);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index = 0, currentKey;
    if (arguments.length < 3) {
      if (!length) throw new TypeError(reduceError);
      memo = obj[keys ? keys[index++] : index++];
    }
    for (; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = function(obj, iteratee, memo, context) {
    if (obj == null) obj = [];
    iteratee = createCallback(iteratee, context, 4);
    var keys = obj.length !== + obj.length && _.keys(obj),
        index = (keys || obj).length,
        currentKey;
    if (arguments.length < 3) {
      if (!index) throw new TypeError(reduceError);
      memo = obj[keys ? keys[--index] : --index];
    }
    while (index--) {
      currentKey = keys ? keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var result;
    predicate = _.iteratee(predicate, context);
    _.some(obj, function(value, index, list) {
      if (predicate(value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    predicate = _.iteratee(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(_.iteratee(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    if (obj == null) return true;
    predicate = _.iteratee(predicate, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index, currentKey;
    for (index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    if (obj == null) return false;
    predicate = _.iteratee(predicate, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index, currentKey;
    for (index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (obj.length !== +obj.length) obj = _.values(obj);
    return _.indexOf(obj, target) >= 0;
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

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = obj.length === +obj.length ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = _.iteratee(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = obj.length === +obj.length ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = _.iteratee(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = obj && obj.length === +obj.length ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
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

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = _.iteratee(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
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
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = _.iteratee(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = _.iteratee(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = low + high >>> 1;
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
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
    return obj.length === +obj.length ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = _.iteratee(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    if (n < 0) return [];
    return slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    for (var i = 0, length = input.length; i < length; i++) {
      var value = input[i];
      if (!_.isArray(value) && !_.isArguments(value)) {
        if (!strict) output.push(value);
      } else if (shallow) {
        push.apply(output, value);
      } else {
        flatten(value, shallow, strict, output);
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (array == null) return [];
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = _.iteratee(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = array.length; i < length; i++) {
      var value = array[i];
      if (isSorted) {
        if (!i || seen !== value) result.push(value);
        seen = value;
      } else if (iteratee) {
        var computed = iteratee(value, i, array);
        if (_.indexOf(seen, computed) < 0) {
          seen.push(computed);
          result.push(value);
        }
      } else if (_.indexOf(result, value) < 0) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true, []));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    if (array == null) return [];
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = array.length; i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(slice.call(arguments, 1), true, true, []);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function(array) {
    if (array == null) return [];
    var length = _.max(arguments, 'length').length;
    var results = Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, i);
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

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var idx = array.length;
    if (typeof from == 'number') {
      idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
    }
    while (--idx >= 0) if (array[idx] === item) return idx;
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
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var Ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    args = slice.call(arguments, 2);
    bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      Ctor.prototype = func.prototype;
      var self = new Ctor;
      Ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (_.isObject(result)) return result;
      return self;
    };
    return bound;
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
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = hasher ? hasher.apply(this, arguments) : key;
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
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
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
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

      if (last < wait && last > 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
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

  // Returns a function that will only be executed before being called N times.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      } else {
        func = null;
      }
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

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
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
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
    if (!_.isObject(obj)) return obj;
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
      source = arguments[i];
      for (prop in source) {
        if (hasOwnProperty.call(source, prop)) {
            obj[prop] = source[prop];
        }
      }
    }
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj, iteratee, context) {
    var result = {}, key;
    if (obj == null) return result;
    if (_.isFunction(iteratee)) {
      iteratee = createCallback(iteratee, context);
      for (key in obj) {
        var value = obj[key];
        if (iteratee(value, key, obj)) result[key] = value;
      }
    } else {
      var keys = concat.apply([], slice.call(arguments, 1));
      obj = new Object(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        key = keys[i];
        if (key in obj) result[key] = obj[key];
      }
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(concat.apply([], slice.call(arguments, 1)), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    if (!_.isObject(obj)) return obj;
    for (var i = 1, length = arguments.length; i < length; i++) {
      var source = arguments[i];
      for (var prop in source) {
        if (obj[prop] === void 0) obj[prop] = source[prop];
      }
    }
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
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (
      aCtor !== bCtor &&
      // Handle Object.create(x) cases
      'constructor' in a && 'constructor' in b &&
      !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
        _.isFunction(bCtor) && bCtor instanceof bCtor)
    ) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size, result;
    // Recursively compare objects and arrays.
    if (className === '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size === b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      size = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      result = _.keys(b).length === size;
      if (result) {
        while (size--) {
          // Deep compare each member
          key = keys[size];
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
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
    if (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)) return obj.length === 0;
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
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around an IE 11 bug.
  if (typeof /./ !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
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
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = function(key) {
    return function(obj) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {
    var pairs = _.pairs(attrs), length = pairs.length;
    return function(obj) {
      if (obj == null) return !length;
      obj = new Object(obj);
      for (var i = 0; i < length; i++) {
        var pair = pairs[i], key = pair[0];
        if (pair[1] !== obj[key] || !(key in obj)) return false;
      }
      return true;
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = createCallback(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
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
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? object[property]() : value;
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
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
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

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

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
}.call(this));

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
},{"./utils":47}],23:[function(require,module,exports){
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
},{"./binding":23,"./config":25,"./deps-parser":26,"./directive":27,"./emitter":38,"./exp-parser":39,"./observer":43,"./text-parser":45,"./utils":47,"./viewmodel":48}],25:[function(require,module,exports){
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
},{"./text-parser":45}],26:[function(require,module,exports){
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
},{"./emitter":38,"./observer":43,"./utils":47}],27:[function(require,module,exports){
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
},{"./text-parser":45}],28:[function(require,module,exports){
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
},{"../utils":47}],29:[function(require,module,exports){
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
},{"../utils":47}],30:[function(require,module,exports){
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
},{"../config":25,"../transition":46,"../utils":47,"./html":28,"./if":29,"./model":31,"./on":32,"./partial":33,"./repeat":34,"./style":35,"./view":36,"./with":37}],31:[function(require,module,exports){
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
},{"../utils":47}],32:[function(require,module,exports){
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
        if (this.handler) {
            el.removeEventListener(this.arg, this.handler)
        }
    },

    unbind: function () {
        this.reset()
        this.el.removeEventListener('load', this.iframeBind)
    }
}
},{"../utils":47}],33:[function(require,module,exports){
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
},{"../utils":47}],34:[function(require,module,exports){
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
},{"../config":25,"../utils":47}],35:[function(require,module,exports){
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
        var prop = this.prop,
            isImportant
        /* jshint eqeqeq: true */
        // cast possible numbers/booleans into strings
        if (value != null) value += ''
        if (prop) {
            if (value) {
                isImportant = value.slice(-10) === '!important'
                    ? 'important'
                    : ''
                if (isImportant) {
                    value = value.slice(0, -10).trim()
                }
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
},{"../utils":47}],38:[function(require,module,exports){
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
},{"./utils":47}],40:[function(require,module,exports){
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
    value = parseFloat(value)
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
},{"./utils":47}],41:[function(require,module,exports){
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

module.exports = function (templateString) {
    var frag = document.createDocumentFragment(),
        m = TAG_RE.exec(templateString)
    // text only
    if (!m) {
        frag.appendChild(document.createTextNode(templateString))
        return frag
    }

    var tag = m[1],
        wrap = map[tag] || map._default,
        depth = wrap[0],
        prefix = wrap[1],
        suffix = wrap[2],
        node = document.createElement('div')

    node.innerHTML = prefix + templateString.trim() + suffix
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
    assetTypes  = ['directive', 'filter', 'partial', 'effect', 'component'],
    // Internal modules that are exposed for plugins
    pluginAPI   = {
        utils: utils,
        config: config,
        transition: require('./transition'),
        observer: require('./observer')
    }

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
            value = utils.parseTemplateOption(value)
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
ViewModel.require = function (module) {
    return pluginAPI[module]
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
},{"./config":25,"./directives":30,"./filters":40,"./observer":43,"./transition":46,"./utils":47,"./viewmodel":48}],43:[function(require,module,exports){
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
},{"./emitter":38,"./utils":47}],44:[function(require,module,exports){
var toFragment = require('./fragment');

/**
 * Parses a template string or node and normalizes it into a
 * a node that can be used as a partial of a template option
 *
 * Possible values include
 * id selector: '#some-template-id'
 * template string: '<div><span>my template</span></div>'
 * DocumentFragment object
 * Node object of type Template
 */
module.exports = function(template) {
    var templateNode;

    if (template instanceof window.DocumentFragment) {
        // if the template is already a document fragment -- do nothing
        return template
    }

    if (typeof template === 'string') {
        // template by ID
        if (template.charAt(0) === '#') {
            templateNode = document.getElementById(template.slice(1))
            if (!templateNode) return
        } else {
            return toFragment(template)
        }
    } else if (template.nodeType) {
        templateNode = template
    } else {
        return
    }

    // if its a template tag and the browser supports it,
    // its content is already a document fragment!
    if (templateNode.tagName === 'TEMPLATE' && templateNode.content) {
        return templateNode.content
    }

    if (templateNode.tagName === 'SCRIPT') {
        return toFragment(templateNode.innerHTML)
    }

    return toFragment(templateNode.outerHTML);
}

},{"./fragment":41}],45:[function(require,module,exports){
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
},{"./directive":27}],46:[function(require,module,exports){
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
},{"./batcher":22,"./config":25}],47:[function(require,module,exports){
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
     *  Parse the various types of template options
     */
    parseTemplateOption: require('./template-parser.js'),

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
                partials[key] = utils.parseTemplateOption(partials[key])
            }
        }
        if (filters) {
            for (key in filters) {
                utils.checkFilter(filters[key])
            }
        }
        if (template) {
            options.template = utils.parseTemplateOption(template)
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
},{"./config":25,"./fragment":41,"./template-parser.js":44,"./viewmodel":48}],48:[function(require,module,exports){
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
    // compile if options passed, if false return. options are passed directly to compiler
    if (options === false) return
    new Compiler(this, options)
}

// All VM prototype methods are inenumerable
// so it can be stringified/looped through as raw data
var VMProto = ViewModel.prototype

/**
 *  init allows config compilation after instantiation:
 *    var a = new Vue(false)
 *    a.init(config)
 */
def(VMProto, '$init', function (options) {
    new Compiler(this, options)
})

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
def(VMProto, '$destroy', function (noRemove) {
    this.$compiler.destroy(noRemove)
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

},{"./batcher":22,"./compiler":24,"./transition":46,"./utils":47}]},{},[9])