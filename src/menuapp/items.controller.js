(function () {

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

MenuAppItemsController.$inject = ['items'];
function ItemsController(items) {
  var ctrl = this;
  ctrl.items = items.data;
}

})();
