angular
  .module('app', ['ui.router', 'templates'])
  .config(function($stateProvider) {      
      $stateProvider
          .state('index', {
              url: '/',
              templateUrl: 'app/views/index.html',
              controller: 'IndexController as vm_index',
              data: {
                bgColorClass: 'bg-color-index',
                bgImgClass: 'bg-img bg-img-index'
              }                            
          })
          .state('form', {
              url: '/name-builder',
              templateUrl: 'app/views/name-builder.html',
              controller: 'FormController as vm_form'
          })
          .state('form.genre', {
              url: '/genre',
              templateUrl: 'app/views/name-builder-genre.html',
              data: {
                bgColorClass: 'bg-color-genre',
                bgImgClass: 'bg-img bg-img-genre'
              }              
          })
          .state('form.length', {
              url: '/length',
              templateUrl: 'app/views/name-builder-length.html',
              data: {
                redirect: ['FormDataService', function(FormDataService) {
                    if (!FormDataService.formData.genre_id) {
                      return 'form.genre';
                    }
                }],
                bgColorClass: 'bg-color-length',
                bgImgClass: 'bg-img bg-img-length'
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
                }],
                bgColorClass: 'bg-color-start-word',
                bgImgClass: 'bg-img bg-img-start-word'
              }
          })
          .state('name', {
              url: '/band-name',
              templateUrl: 'app/views/band-name.html',
              controller: 'NameController as vm_name',
              data: {
                redirect: ['FormDataService', function(FormDataService) {
                    if (!FormDataService.formData.genre_id) {
                      return 'form.genre';
                    } else if (!FormDataService.formData.words) {
                      return 'form.length';
                    } else if (!FormDataService.formData.beginsWith && FormDataService.formData.beginsWith != '') {
                      return 'form.start-word';
                    }
                }],
                bgColorClass: 'bg-color-band-name bg-color-loading'                
              }
          })
          .state('otherwise', {
              url: '*path',
              templateUrl: 'app/views/index.html',
              data: {
                bgColorClass: 'bg-color-index',
                bgImgClass: 'bg-img bg-img-index'
              } 
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
        });
        $rootScope.$state = $state;
  });
