function NameController($window, $timeout, ShareBandNameService, FormDataService, SocialMediaShareService) {
  var ctrl = this;

  var fontClasses = [
    'genre-font-pop',
    'genre-font-indie',
    'genre-font-punk',
    'genre-font-rock',
    'genre-font-metal',
    'genre-font-jazz',
    'genre-font-country'
  ];

  function getFontClass(i) {
    return fontClasses[i-1];
  }

  ctrl.loadingPage = true;
  ctrl.bandName = ShareBandNameService;

  ctrl.removeClassFromElement = (className, element) => {
    let elem = angular.element(document.querySelector(element));
    elem.removeClass(className);
  }

  ctrl.addClassToElement = (className, element) => {
    let elem = angular.element(document.querySelector(element));
    elem.addClass(className);
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

  $timeout(ctrl.hideLoadingPage, 3000).then( () => {
    ctrl.addClassToElement(getFontClass(ctrl.bandName.genre_id), 'h1#band-name')
  });
  
}

angular
  .module('app')
  .controller('NameController', NameController);