function GenreService($http) {

  this.getGenres = function() {
    return $http.get('http://localhost:3000/genres');
  }

}

angular
  .module('app')
  .service('GenreService', GenreService);