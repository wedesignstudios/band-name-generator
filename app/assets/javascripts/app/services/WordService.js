function WordService($http) {

  this.getWords = function() {
    return $http.get('/words');
  }

}

angular
  .module('app')
  .service('WordService', WordService);