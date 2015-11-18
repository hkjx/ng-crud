angular.module('angular-crud',[
    'ui.router',
    'templates',
    'ui.bootstrap',
    'ngResource',
    'Devise'
  ])

  .config(['AuthProvider', 'AuthInterceptProvider', function(AuthProvider, AuthInterceptProvider) {
     AuthInterceptProvider.interceptAuth(true);
   }])

  .config(['$stateProvider','$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('articles', {
          url: '/articles',
          templateUrl: 'articles/templates/index.html',
          controller: 'ArticlesListCtrl'
        })

        .state('article_new', {
          url: '/articles/new',
          templateUrl: 'articles/templates/new.html',
          controller: 'ArticlesAddCtrl'
        })

        .state('article_edit', {
          url: '/articles/:id/edit',
          templateUrl: 'articles/templates/edit.html',
          controller: 'ArticlesUpdateCtrl'
        })

        .state('login', {
          url: '/login',
          templateUrl: 'auth/_login.html',
          controller: 'AuthCtrl',
          onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function (){
              $state.go('articles');
            })
          }]
        })

        .state('register', {
          url: '/register',
          templateUrl: 'auth/_register.html',
          controller: 'AuthCtrl',
          onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function (){
              $state.go('articles');
            })
          }]
        });

      $urlRouterProvider.otherwise('articles');
  }]);