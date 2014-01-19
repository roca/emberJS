var App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.Router.map(function() {
    this.route('about');
    this.route('credits',{ path: '/thanks' });
    this.resource('products');
    this.resource('product',{path: 'products/:title'});
    this.resource('contacts');
    this.resource('contact',{path: 'contacts/:name'});
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

App.ProductRoute = Ember.Route.extend({
  model: function (params) { 
  	return App.PRODUCTS.findBy('title',params.title); 
  }
});

App.ContactsRoute = Ember.Route.extend({
  model: function () { return App.CONTACTS; }
});

App.ContactRoute = Ember.Route.extend({
  model: function (params) { 
  	return App.CONTACTS.findBy('name',params.name); 
  }
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

