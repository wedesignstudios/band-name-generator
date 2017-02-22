function GenreService($http) {

  this.getGenres = function() {
    return $http.get('/genres');
  }

}

GenreService.$inject = ['$http'];

angular
  .module('app')
  .service('GenreService', GenreService);