(function () {

angular.module('Data', []);

angular.module('Data')
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.config(function () {
  console.log("Configuracion de Data ejecutandose.");
})
.run(function () {
  console.log("Data Corriendo");
});

})();
