angular
  .module('app', ['ui.router', 'templates'])
  .config(function($stateProvider) {      
      $stateProvider
          .state('index', {
              url: '/',
              templateUrl: 'app/views/index.html',
              controller: 'IndexController as vm_index'              
          })
          .state('form', {
              url: '/name-builder',
              templateUrl: 'app/views/name-builder.html',
              controller: 'FormController as vm_form'
          })
          .state('form.genre', {
              url: '/genre',
              templateUrl: 'app/views/name-builder-genre.html'
          })
          .state('form.length', {
              url: '/length',
              templateUrl: 'app/views/name-builder-length.html'
          })
          .state('form.start-word', {
              url: '/start-word',
              templateUrl: 'app/views/name-builder-start-word.html'
          })
          .state('name', {
              url: '/band-name',
              templateUrl: 'app/views/band-name.html',
              controller: 'NameController as vm_name'
          });      
  });