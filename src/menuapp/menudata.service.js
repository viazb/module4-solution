(function () {

angular.module('Data')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiBasePath']
function MenuService($http, ApiBasePath) {
  var service = this;

  service.getCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

    return response;
  };

  service.getItems = function (categoryShortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    });

    return response;
  };


}


})();
