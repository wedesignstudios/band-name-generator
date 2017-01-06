function NameController($window, ShareBandNameService, FormDataService) {
  var ctrl = this;

  ctrl.bandName = ShareBandNameService;

  ctrl.resetBandName = function() {
    ctrl.bandName.name = '';
    ctrl.bandName.genre_id = '';
    FormDataService.formData = {};    
  }
  
}

angular
  .module('app')
  .controller('NameController', NameController);