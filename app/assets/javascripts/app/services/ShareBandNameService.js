function ShareBandNameService() {
  return {name: '', genre_id: ''};
}

angular
  .module('app')
  .service('ShareBandNameService', ShareBandNameService);