function NameController($window, ShareBandNameService) {
  var ctrl = this;

  ctrl.bandName = ShareBandNameService;

  ctrl.resetBandName = function() {
    ctrl.bandName.name = '';
    ctrl.bandName.genre_id = '';    
  }   

  console.log($window.location.href); 
  
}

angular
  .module('app')
  .controller('NameController', NameController);