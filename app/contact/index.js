require('firebase/firebase');

module.exports = function() {
  var ref;

  var handler = function() {

  };
  var submit = function(contact) {
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
    data: {
      sectionTitle: "Contact Us"
    },
    methods: {
      submit: submit
    }
  });
};
