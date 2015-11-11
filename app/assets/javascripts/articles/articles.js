angular.module('angular-crud')

  .factory('Articles', ['$resource', function($resource){
    return $resource('/articles.json', {}, {
      query:  { method: 'GET', isArray: true },
      create: { method: 'POST' }
    });
  }])

  .factory('Article', ['$resource', function($resource){
    return $resource('/articles/:id.json', {}, {
      show: { method: 'GET' },
      update: { method: 'PUT', params: {id: '@id'} },
      delete: { method: 'DELETE', params: {id: '@id'} }
    });
  }])