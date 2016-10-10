(function () {

angular.module('MenuApp', ['ui.router', 'Data', 'Spinner']);

angular.module('MenuApp')
.config(function () {
  console.log("Configuracion de MenuApo ejecutandose");
})
.run(function () {
  console.log("Menu App Corriendo");
});


})();
