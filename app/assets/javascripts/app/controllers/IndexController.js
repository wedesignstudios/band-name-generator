function IndexController(WordService, GenreService) {
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
        // return ctrl.numberOfWords;
      }
    });

  ctrl.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ctrl.getBandName = function(numOfWords) {
    WordService.getWords()
      .then(function(response) {
        var i = 0
        while (i++ < numOfWords) {
          var randomWordIndex = ctrl.getRandomInt(0, response.data.words.length-1);
          ctrl.bandWords.push(response.data.words[randomWordIndex].string);
        }        
        ctrl.bandName = ctrl.bandWords.join(' ');
        ctrl.bandWords = [];
      });
  }

  ctrl.getGenreNames = function() {
    GenreService.getGenres()
      .then(function(response) {        
        ctrl.genres.push(response.data.genres);
      });
  }

  ctrl.getGenreNames(); 



}

angular
  .module('app')
  .controller('IndexController', IndexController);