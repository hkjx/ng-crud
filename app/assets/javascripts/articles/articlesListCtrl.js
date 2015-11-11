angular.module('angular-crud')

  .controller('ArticlesListCtrl', ['$scope', '$resource', 'Articles', 'Article', '$location', function($scope, $resource, Articles, Article, $location){
    $scope.articles = Articles.query();

    $scope.deleteArticle = function (articleId) {
      if (confirm("Are you sure you want to delete this article?")){
        Article.delete({ id: articleId }, function(){
          $scope.articles = Articles.query();   // after delete user get users collection.
          $location.path('/articles');
        });
      }
    };
  }])

  .controller('ArticlesAddCtrl', ['$scope', '$resource', 'Articles', 'Article', '$location', function($scope, $resource, Articles, Article, $location){
    $scope.article = new Article();
    $scope.save = function(){
      if ($scope.articleForm.$valid){
        Articles.create({article: $scope.article}, function(){
          $location.path('/articles');
        }, function(error){
          console.log(error);
        });
      }      
    };
  }])
  
  .controller("ArticlesUpdateCtrl", ['$scope', '$resource', 'Article', '$location', '$stateParams', function($scope, $resource, Article, $location, $stateParams) {
    $scope.article = Article.get({id: $stateParams.id})
    $scope.update = function(){
      if ($scope.articleForm.$valid){
        Article.update($scope.article,function(){
          $location.path('/articles');
        }, function(error) {
          console.log(error)
        });
      }
    };
  }]);