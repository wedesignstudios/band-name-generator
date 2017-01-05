function checkIfObjectIsEmptyFilter() {
  return function(object) {
    return angular.equals({}, object);
  }
}

angular
  .module('app')
  .filter('checkIfObjectIsEmptyFilter', checkIfObjectIsEmptyFilter);