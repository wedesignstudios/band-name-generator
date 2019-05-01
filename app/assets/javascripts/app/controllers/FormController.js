function FormController($window, $filter, $state, FormDataService, WordService, GenreService, BandNameService, ShareBandNameService, DetectIOSService, LogoService) {
  var ctrl = this;

  ctrl.banderooLogo = LogoService.getLogoWhite();
  ctrl.formData = FormDataService.formData;
  ctrl.formData.genre_id = '';
  ctrl.formData.beginsWith = '';
  ctrl.bandWords = [];
  ctrl.bandName = ShareBandNameService;
  ctrl.iOS = DetectIOSService.iOS();

  ctrl.getGenreNames = function() {
    GenreService.getGenres()
      .then(function(response) {
        ctrl.genres = response.data;
      });
  }

  ctrl.getBeginningWords = function() {
    WordService.getWords()
      .then(function(response) {
        var beginningWords = $filter('removeBeginningWordsFilter')(response.data, true);
        ctrl.beginningWords = $filter('editBeginningWordsFilter')(beginningWords, ['The', 'By', 'Of', 'That', 'This', 'In', 'No start word']);
      });
  }

  ctrl.setBeginningWords = function() {
    if (ctrl.formData.beginsWith.string != 'No start word' && ctrl.formData.beginsWith.string != '') {
      ctrl.bandWords.push(ctrl.formData.beginsWith.string);
    }
  }

  ctrl.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ctrl.setBandWords = function(numOfWords) {
    WordService.getWords()
      .then(function(response) {

        var words = $filter('removeBeginningWordsFilter')(response.data, false);
        var i = 0

        while (i++ < numOfWords) {
          var randomWordIndex = ctrl.getRandomInt(0, words.length-1);
          ctrl.bandWords.push(words[randomWordIndex].string);
        }

        ctrl.bandName.name = ctrl.bandWords.join(' ');
        ctrl.saveBandName();
        ctrl.bandWords = [];
      });
  }

  ctrl.setBandGenre = function() {
    ctrl.bandName.genre_id = ctrl.formData.genre_id.id;
  }

  ctrl.saveBandName = function() {
    var data = {
      band_name: {
        name: ctrl.bandName.name,
        genre_id: parseInt(ctrl.bandName.genre_id)
      },
    };
    BandNameService.postBandName(data);
  }

  ctrl.getBandName = function(numOfWords) {
    ctrl.setBandGenre();
    ctrl.setBeginningWords();
    ctrl.setBandWords(numOfWords);
    $window.location.href = '/#!/band-name';
  }

  ctrl.slideViewLeft = () => {
    ctrl.slideDir = 'slide-left';
  }

  ctrl.slideViewRight = () => {
    ctrl.slideDir = 'slide-right';
  }

  ctrl.getGenreNames();
  ctrl.getBeginningWords();

}

FormController.$inject = ['$window', '$filter', '$state', 'FormDataService', 'WordService', 'GenreService', 'BandNameService', 'ShareBandNameService', 'DetectIOSService', 'LogoService'];

angular
  .module('app')
  .controller('FormController', FormController);
