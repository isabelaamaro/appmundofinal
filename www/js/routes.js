angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
    .state('page', {
      url: '/page1',
      templateUrl: 'templates/page.html',
      controller: 'pageCtrl'
    })
        
     .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })
    
   .state('pageform', {
      url: '/pageform',
      templateUrl: 'templates/pageform.html',
      controller: 'pageformCtrl'
    })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});