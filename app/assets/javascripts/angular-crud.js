angular.module('angular-crud',[
    'ui.router',
    'templates',
    'ui.bootstrap',
    'ngResource'
  ])

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
        });

      $urlRouterProvider.otherwise('home');
  }]);