function NameController($window, ShareBandNameService) {
  var ctrl = this;

  ctrl.bandName = ShareBandNameService;   

  console.log($window.location.href); 
  
}

angular
  .module('app')
  .controller('NameController', NameController);