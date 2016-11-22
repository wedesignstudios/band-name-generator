function IndexController(WordService) {
  var ctrl = this;

  ctrl.bandWords = [];
  ctrl.bandName = '';

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

}

angular
  .module('app')
  .controller('IndexController', IndexController);