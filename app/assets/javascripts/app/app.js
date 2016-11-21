angular
  .module('app', ['ui.router', 'templates'])
  .config(function($stateProvider) {      
      $stateProvider
          .state('index', {
              url: '/',
              templateUrl: 'app/views/index.html',
              controller: 'IndexController as vm_index'              
          });      
  });