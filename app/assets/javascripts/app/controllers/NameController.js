function NameController($window, $timeout, ShareBandNameService, FormDataService, SocialMediaShareService) {
  var ctrl = this;

  ctrl.loadingPage = true;
  ctrl.bandName = ShareBandNameService;

  ctrl.removeClassFromElement = (className, element) => {
    let elem = angular.element(document.querySelector(element));
    elem.removeClass(className);    
  }

  ctrl.hideLoadingPage = () => {
    ctrl.removeClassFromElement('bg-color-loading', 'body');
    ctrl.removeClassFromElement('bg-img-loading', '.bg-img');
    ctrl.loadingPage = false;
  }

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

  $timeout(ctrl.hideLoadingPage, 3000);   
  
}

angular
  .module('app')
  .controller('NameController', NameController);