angular
  .module('app', ['ui.router', 'templates', 'ngAnimate'])
  .config(function($stateProvider) {      
      $stateProvider
          .state('index', {
              url: '/',
              templateUrl: 'app/views/index.html',
              controller: 'IndexController as vm_index',
              data: {
                bgColorClass: 'bg-color-index',
                bgImgClass: 'bg-img-index'
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
                title: 'Type of band?',
                bgColorClass: 'bg-color-genre',
                bgImgClass: 'bg-img-genre'
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
                title: 'Length of band name?',
                bgColorClass: 'bg-color-length',
                bgImgClass: 'bg-img-length'
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
                title: 'Start word?',
                bgColorClass: 'bg-color-start-word',
                bgImgClass: 'bg-img-start-word'
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
                title: 'Your new band name!',
                bgColorClass: 'bg-color-band-name bg-color-loading',
                bgImgClass: 'bg-img-loading bg-img-band-name'                
              }
          })
          .state('otherwise', {
              url: '*path',
              templateUrl: 'app/views/index.html',
              controller: 'IndexController as vm_index',
              data: {
                bgColorClass: 'bg-color-index',
                bgImgClass: 'bg-img-index'
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
