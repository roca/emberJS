var App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.Router.map(function() {
    this.route('about');
    this.route('credits',{ path: '/thanks' });
    this.resource('products');
    this.resource('contacts');
});

App.IndexController = Ember.Controller.extend({
   productsCount: 6,
   logo: 'images/logo.png',
   time: function() {
   		return (new Date()).toDateString()
   }.property()
});

App.ProductsRoute = Ember.Route.extend({});

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

App.PRODUCTS = [
     {
       title:'Flint',
       price: 10.99,
       description:'Flint stone',
       isOnSale:false,
       image: 'images/products/flint.png',
     },
     {
       title: 'Kindling',
       price: 5.99,
       description:'Kindling wood',
       isOnSale:true,
       image: 'images/products/kindling.png',
     }

];

App.ProductsRoute = Ember.Route.extend({
  model: function () { return App.PRODUCTS; }
});

App.ContactsRoute = Ember.Route.extend({
  model: function () { return App.CONTACTS; }
});

App.CONTACTS = [
     {
       name:'giamia',
       avatar: 'images/contacts/giamia.png',
       about:'giamia'
     },
     {
       name:'anostagia',
       avatar: 'images/contacts/anostagia.png',
       about:'anostagia'
     }

];

