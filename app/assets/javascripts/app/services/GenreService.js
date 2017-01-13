function GenreService($http) {

  this.getGenres = function() {
    return $http.get('/genres');
  }

}

angular
  .module('app')
  .service('GenreService', GenreService);