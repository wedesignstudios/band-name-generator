function BandNameService($http) {

  this.postBandName = function(data) {
    return  $http.post('/band_name', data);
  }
}

BandNameService.$inject = ['$http'];

angular
  .module('app')
  .service('BandNameService', BandNameService);