function IndexController(LogoService) {
  var ctrl = this;

  ctrl.banderooLogo = LogoService.getLogoYellow();
}

angular
  .module('app')
  .controller('IndexController', IndexController);