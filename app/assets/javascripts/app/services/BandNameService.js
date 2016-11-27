function BandNameService($http) {

  this.postBandName = function(data) {
    return  $http.post('http://localhost:3000/band_name', data);
  }
}

angular
  .module('app')
  .service('BandNameService', BandNameService);