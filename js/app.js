var bgGymApp = angular.module('bgGymApp', ['ui.router','ui.bootstrap']);

bgGymApp.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/',
    views: {
      '': { templateUrl: 'template/main.html'},
      'nav@home': { templateUrl: 'template/assets/nav.html'},
      'top-area@home': { templateUrl: 'template/home-top-area.html'},
      'main-area@home': { templateUrl: 'template/home-main-area.html'},
      'main-aside@home': { templateUrl: 'template/assets/aside.html'},
      'footer@home': { templateUrl: 'template/assets/footer.html' }
    }
  }).state('julschema', {
    url: '/julschema',
    views: {
      '': { templateUrl: 'template/article.html'},
      'nav@julschema': { templateUrl: 'template/assets/nav.html'},
      'main-area@julschema': { templateUrl: 'template/julschema.html'},
      'main-aside@julschema': { templateUrl: 'template/assets/aside.html'},
      'footer@julschema': { templateUrl: 'template/assets/footer.html' }
    }
  }).state('schema', {
    url: '/schema',
    views: {
      '': { templateUrl: 'template/article.html'},
      'nav@schema': { templateUrl: 'template/assets/nav.html'},
      'main-area@schema': { templateUrl: 'template/schema.html'},
      'main-aside@schema': { templateUrl: 'template/assets/aside.html'},
      'footer@schema': { templateUrl: 'template/assets/footer.html' }
    }
  }).state('boka-pass', {
    url: '/boka-pass',
    views: {
      '': { templateUrl: 'template/article.html'},
      'nav@boka-pass': { templateUrl: 'template/assets/nav.html'},
      'main-area@boka-pass': { templateUrl: 'template/boka-pass.html'},
      'main-aside@boka-pass': { templateUrl: 'template/assets/aside.html'},
      'footer@boka-pass': { templateUrl: 'template/assets/footer.html' }
    }
  }).state('oppetider', {
    url: '/oppetider',
    views: {
      '': { templateUrl: 'template/article.html'},
      'nav@oppetider': { templateUrl: 'template/assets/nav.html'},
      'main-area@oppetider': { templateUrl: 'template/oppetider.html'},
      'main-aside@oppetider': { templateUrl: 'template/assets/aside.html'},
      'footer@oppetider': { templateUrl: 'template/assets/footer.html' }
    }
  }).state('forklaring', {
    url: '/forklaring',
    views: {
      '': { templateUrl: 'template/article.html'},
      'nav@forklaring': { templateUrl: 'template/assets/nav.html'},
      'main-area@forklaring': { templateUrl: 'template/forklaring.html'},
      'main-aside@forklaring': { templateUrl: 'template/assets/aside.html'},
      'footer@forklaring': { templateUrl: 'template/assets/footer.html' }
    }
  }).state('lattare-traning', {
    url: '/lattare-traning',
    views: {
      '': { templateUrl: 'template/article.html'},
      'nav@lattare-traning': { templateUrl: 'template/assets/nav.html'},
      'main-area@lattare-traning': { templateUrl: 'template/lattare-traning.html'},
      'main-aside@lattare-traning': { templateUrl: 'template/assets/aside.html'},
      'footer@lattare-traning': { templateUrl: 'template/assets/footer.html' }
    }
  }).state('yoga', {
    url: '/yoga',
    views: {
      '': { templateUrl: 'template/article.html'},
      'nav@yoga': { templateUrl: 'template/assets/nav.html'},
      'main-area@yoga': { templateUrl: 'template/yoga.html'},
      'main-aside@yoga': { templateUrl: 'template/assets/aside.html'},
      'footer@yoga': { templateUrl: 'template/assets/footer.html' }
    }
  });
}
]);

bgGymApp.controller('CollapseMenuCtrl', function ($scope) {
  $scope.isCollapsed = true;
});
