function WordService($http) {

  this.getWords = function() {
    return $http.get('http://localhost:3000/words');
  }

}

angular
  .module('app')
  .service('WordService', WordService);