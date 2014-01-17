var App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.Router.map(function() {
    this.route('about');
    this.route('credits',{ path: '/thanks' });
});

App.IndexController = Ember.Controller.extend({
   productsCount: 6,
   logo: 'images/logo.png',
   time: function() {
   		return (new Date()).toDateString()
   }.property()
});


App.AboutController = Ember.Controller.extend({
  contactName: 'Romel Campbell',
  avatar: 'images/avatar.png',
  open: function() {
      var iDay = (new Date()).getDay();
      var message = "open";
       if(iDay == 0) {
        message = "closed"
       }
      return message;
   }.property()
});
