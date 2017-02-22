function IndexController(LogoService) {
  var ctrl = this;

  ctrl.banderooLogo = LogoService.getLogoYellow();
}

IndexController.$inject = ['LogoService'];

angular
  .module('app')
  .controller('IndexController', IndexController);