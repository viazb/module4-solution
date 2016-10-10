(function () {

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/templates/home.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/templates/categories.html',
      controller: 'CategoriesController as ctrl',
      resolve: {
        categories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })

    .state('items', {
      url: '/items/{shortName}',
      templateUrl: 'src/menuapp/templates/items.html',
      controller: 'ItemsController as ctrl',
      resolve: {
        items: ['$stateParams', 'MenuService', function ($stateParams, MenuService) {
          return MenuService.getItems($stateParams.shortName);
        }]
      }
    });
}


})();
