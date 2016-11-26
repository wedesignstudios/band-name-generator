function IndexController($filter, WordService, GenreService) {
  var ctrl = this;

  ctrl.bandWords = [];
  ctrl.bandName = '';
  ctrl.genres = [];  
  
  ctrl.slider = new Slider('#band-name-length', {
      ticks: [1, 2, 3],
      ticks_labels: ['Small', 'Medium', 'Large'],
      tooltip: "hide",
      value: 1,
      formatter: function(value) {
        ctrl.numberOfWords = value;     
      }
    });  

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
    if (ctrl.beginsWith != undefined && ctrl.beginsWith != '') {
      ctrl.bandWords.push(ctrl.beginsWith);
      console.log("Beginning word: " + ctrl.beginsWith);
    }
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
                
        ctrl.bandName = ctrl.bandWords.join(' ');
        ctrl.bandWords = [];

      });
  }

  ctrl.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ctrl.getBandName = function(numOfWords) {
    ctrl.setBeginningWords();
    ctrl.setBandWords(numOfWords);    
  }

  ctrl.getGenreNames(); 
  ctrl.getBeginningWords();

}

angular
  .module('app')
  .controller('IndexController', IndexController);