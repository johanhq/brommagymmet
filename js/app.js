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
  }).state('oppettider', {
    url: '/oppettider',
    views: {
      '': { templateUrl: 'template/article.html'},
      'nav@oppettider': { templateUrl: 'template/assets/nav.html'},
      'main-area@oppettider': { templateUrl: 'template/oppetider.html'},
      'main-aside@oppettider': { templateUrl: 'template/assets/aside.html'},
      'footer@oppettider': { templateUrl: 'template/assets/footer.html' }
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
  }).state('bosu-core', {
    url: '/bosu-core',
    views: {
      '': { templateUrl: 'template/article.html'},
      'nav@bosu-core': { templateUrl: 'template/assets/nav.html'},
      'main-area@bosu-core': { templateUrl: 'template/bosu-core.html'},
      'main-aside@bosu-core': { templateUrl: 'template/assets/aside.html'},
      'footer@bosu-core': { templateUrl: 'template/assets/footer.html' }
    }
  }).state('senior', {
    url: '/senior',
    views: {
      '': { templateUrl: 'template/article.html'},
      'nav@senior': { templateUrl: 'template/assets/nav.html'},
      'main-area@senior': { templateUrl: 'template/senior.html'},
      'main-aside@senior': { templateUrl: 'template/assets/aside.html'},
      'footer@senior': { templateUrl: 'template/assets/footer.html' }
    }
  }).state('pt', {
    url: '/personlig-traning',
    views: {
      '': { templateUrl: 'template/article.html'},
      'nav@pt': { templateUrl: 'template/assets/nav.html'},
      'main-area@pt': { templateUrl: 'template/pt.html'},
      'main-aside@pt': { templateUrl: 'template/assets/aside.html'},
      'footer@pt': { templateUrl: 'template/assets/footer.html' }
    }
  }).state('gym', {
    url: '/gyminstruktion',
    views: {
      '': { templateUrl: 'template/article.html'},
      'nav@gym': { templateUrl: 'template/assets/nav.html'},
      'main-area@gym': { templateUrl: 'template/gym.html'},
      'main-aside@gym': { templateUrl: 'template/assets/aside.html'},
      'footer@gym': { templateUrl: 'template/assets/footer.html' }
    }
  }).state('behandlingar', {
    url: '/behandlingar',
    views: {
      '': { templateUrl: 'template/article.html'},
      'nav@behandlingar': { templateUrl: 'template/assets/nav.html'},
      'main-area@behandlingar': { templateUrl: 'template/behandlingar.html'},
      'main-aside@behandlingar': { templateUrl: 'template/assets/aside.html'},
      'footer@behandlingar': { templateUrl: 'template/assets/footer.html' }
    }
  }).state('priser', {
    url: '/priser',
    views: {
      '': { templateUrl: 'template/article.html'},
      'nav@priser': { templateUrl: 'template/assets/nav.html'},
      'main-area@priser': { templateUrl: 'template/priser.html'},
      'main-aside@priser': { templateUrl: 'template/assets/aside.html'},
      'footer@priser': { templateUrl: 'template/assets/footer.html' }
    }
  }).state('foretag', {
    url: '/foretag',
    views: {
      '': { templateUrl: 'template/article.html'},
      'nav@foretag': { templateUrl: 'template/assets/nav.html'},
      'main-area@foretag': { templateUrl: 'template/foretag.html'},
      'main-aside@foretag': { templateUrl: 'template/assets/aside.html'},
      'footer@foretag': { templateUrl: 'template/assets/footer.html' }
    }
  }).state('omoss', {
    url: '/omoss',
    views: {
      '': { templateUrl: 'template/article.html'},
      'nav@omoss': { templateUrl: 'template/assets/nav.html'},
      'main-area@omoss': { templateUrl: 'template/omoss.html'},
      'main-aside@omoss': { templateUrl: 'template/assets/aside.html'},
      'footer@omoss': { templateUrl: 'template/assets/footer.html' }
    }
  }).state('hittahit', {
    url: '/hittahit',
    views: {
      '': { templateUrl: 'template/article.html'},
      'nav@hittahit': { templateUrl: 'template/assets/nav.html'},
      'main-area@hittahit': { templateUrl: 'template/hittahit.html'},
      'main-aside@hittahit': { templateUrl: 'template/assets/aside.html'},
      'footer@hittahit': { templateUrl: 'template/assets/footer.html' }
    }
  }).state('viktminskning', {
    url: '/viktminskning',
    views: {
      '': { templateUrl: 'template/article.html'},
      'nav@viktminskning': { templateUrl: 'template/assets/nav.html'},
      'main-area@viktminskning': { templateUrl: 'template/viktminskning.html'},
      'main-aside@viktminskning': { templateUrl: 'template/assets/aside.html'},
      'footer@viktminskning': { templateUrl: 'template/assets/footer.html' }
    }
  }).state('trainingcamp', {
    url: '/trainingcamp',
    views: {
      '': { templateUrl: 'template/article.html'},
      'nav@trainingcamp': { templateUrl: 'template/assets/nav.html'},
      'main-area@trainingcamp': { templateUrl: 'template/trainingcamp.html'},
      'main-aside@trainingcamp': { templateUrl: 'template/assets/aside.html'},
      'footer@trainingcamp': { templateUrl: 'template/assets/footer.html' }
    }
  });
}
]);

bgGymApp.controller('CollapseMenuCtrl', function ($scope) {
  $scope.isCollapsed = true;
});
