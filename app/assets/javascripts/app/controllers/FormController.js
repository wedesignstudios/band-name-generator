function FormController($window, $filter, WordService, GenreService, BandNameService, ShareBandNameService) {
  var ctrl = this;

  ctrl.formData = {};
  ctrl.genres = [];
  ctrl.bandWords = [];
  ctrl.bandName = ShareBandNameService;

  ctrl.getGenreNames = function() {
    GenreService.getGenres()
      .then(function(response) {        
        ctrl.genres.push(response.data.genres);
      });
  }

  ctrl.getBeginningWords = function() {
    WordService.getWords()
      .then(function(response) {
        var beginningWords = $filter('removeBeginningWordsFilter')(response.data.words, true);
        ctrl.beginningWords = beginningWords;        
      });
  }

  ctrl.setBeginningWords = function() {
    if (ctrl.formData.beginsWith != undefined && ctrl.formData.beginsWith != '') {
      ctrl.bandWords.push(ctrl.formData.beginsWith);      
    }
  }

  ctrl.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ctrl.setBandWords = function(numOfWords) {
    WordService.getWords()
      .then(function(response) {

        var words = $filter('removeBeginningWordsFilter')(response.data.words, false);
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
    ctrl.bandName.genre_id = ctrl.formData.genre_id;
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
    $window.location.href = '/#/band-name';    
  }

  ctrl.getGenreNames();
  ctrl.getBeginningWords();   

}

angular
  .module('app')
  .controller('FormController', FormController);