function NameController($window, ShareBandNameService, FormDataService, SocialMediaShareService) {
  var ctrl = this;

  ctrl.bandName = ShareBandNameService;

  ctrl.resetBandName = function() {
    ctrl.bandName.name = '';
    ctrl.bandName.genre_id = '';
    FormDataService.formData = {};    
  }

  SocialMediaShareService.fbSDK;  

  ctrl.fbFeed = SocialMediaShareService.fbFeed;

}

angular
  .module('app')
  .controller('NameController', NameController);