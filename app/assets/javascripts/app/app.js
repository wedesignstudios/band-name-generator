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
              templateUrl: 'app/views/name-builder-genre.html',              
          })
          .state('form.length', {
              url: '/length',
              templateUrl: 'app/views/name-builder-length.html',
              data: {
                redirect: ['FormDataService', function(FormDataService) {
                    if (!FormDataService.formData.genre_id) {
                      return 'form.genre';
                    }
                }]
              }
          })
          .state('form.start-word', {
              url: '/start-word',
              templateUrl: 'app/views/name-builder-start-word.html',
              data: {
                redirect: ['FormDataService', function(FormDataService) {
                    if (!FormDataService.formData.genre_id) {
                      return 'form.genre';
                    } else if (!FormDataService.formData.words) {
                      return 'form.length';
                    }
                }]
              }
          })
          .state('name', {
              url: '/band-name',
              templateUrl: 'app/views/band-name.html',
              controller: 'NameController as vm_name'
          })
          .state('otherwise', {
              url: '*path',
              templateUrl: 'app/views/index.html'
          });      
  })
    .run(function($rootScope, $state, $injector) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
          if (toState.data && toState.data.redirect) {            
            var redirect = $injector.invoke(toState.data.redirect);
            if (redirect) {              
              event.preventDefault();
              $state.go(redirect);              
            }
          }
        })
  });
