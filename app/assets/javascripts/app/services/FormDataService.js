function FormDataService() {
  this.formData = {};
}

angular
  .module('app')
  .service('FormDataService', FormDataService);