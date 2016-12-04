function FormController($filter, WordService, GenreService, BandNameService) {
  var ctrl = this;

  ctrl.genres = [];  

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
  .controller('FormController', FormController);