function NameController($window, ShareBandNameService, FormDataService, SocialMediaShareService) {
  var ctrl = this;

  ctrl.bandName = ShareBandNameService;

  ctrl.resetBandName = function() {
    ctrl.bandName.name = '';
    ctrl.bandName.genre_id = '';
    FormDataService.formData = {};    
  }

  ctrl.twtrBandName = () => {
    return ctrl.bandName.name.replace(/\s/g, '+');    
  }
  
  ctrl.fbFeed = SocialMediaShareService.fbFeed;
  ctrl.twtrTweet = SocialMediaShareService.twtrTweet;

  SocialMediaShareService.fbSDK;
  
}

angular
  .module('app')
  .controller('NameController', NameController);