function WordService($http) {

  this.getWords = function() {
    return $http.get('/words');
  }

}

WordService.$inject = ['$http'];

angular
  .module('app')
  .service('WordService', WordService);