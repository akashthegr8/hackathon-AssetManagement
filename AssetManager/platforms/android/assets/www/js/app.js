// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers','starter.services','highcharts-ng'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  /// parent route and side menu
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  
   .state('app.addEquip', {
    url: '/addEquip',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/addEquip.html',
        controller: 'AppCtrl'
      }
    }
  })
  .state('app.supplier', {
    url: '/supplier',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/supplier.html',
        controller: 'ResultsCtrl'
      }
    }
  })
  .state('app.donorList', {
    url: '/donorList',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/donorList.html',
        controller: 'ResultsCtrl'
      }
    }
  })
  .state('app.addDonor', {
    url: '/addDonor',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/addDonor.html',
        controller: 'AppCtrl'
      }
    }
  })
  .state('app.addSupplier', {
    url: '/addSupplier',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/addSupplier.html',
        controller: 'AppCtrl'
      }
    }
  })
  
  /// child route
  .state('app.createMovement', {
    url: '/createMovement',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/createMovement.html',
        controller: 'AppCtrl'
      }
    }
  })
  
  /// child route
  .state('app.ruMovement', {
    url: '/ruMovement',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/ruMovement.html',
        controller: 'AppCtrl'
      }
    }
  })
  
  /// child route
  .state('app.allMovement', {
    url: '/allMovement',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/allMovement.html',
        controller: 'AppCtrl'
      }
    }
  })

  /// child route
  .state('app.checkAssets', {
    url: '/checkAssets',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/checkAssets.html',
        controller: 'AppCtrl'
      }
    }
  })
  
    /// child route
  .state('app.BranchSel', {
    url: '/BranchSel',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/BranchSel.html',
        controller: 'ResultsCtrl'
      }
    }
  })
  
    .state('app.CityAssets', {
    url: '/CityAssets',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/CityAssets.html',
        controller: 'ResultsCtrl'
      }
    }
  })
  
    .state('app.About', {
    url: '/About',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/About.html',
        controller: 'AppCtrl'
      }
    }
  })
 

  /// child route
  .state('app.results', {
    url: '/results',
    views: {
      'menuContent': {
        templateUrl: 'templates/results.html',
        controller: 'AppCtrl'
      }
    }
  })
  
  /// details view
  .state('app.details', {
    url: '/details/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/details.html',
        controller: 'DetailsCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/results');
});
