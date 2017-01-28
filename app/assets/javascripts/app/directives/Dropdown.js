function Dropdown($rootScope, $document) {
  return {
    restrict: 'E',
    templateUrl: 'app/views/dropdown.html',
    scope: {
      placeholder: '@',
      list: '=',
      mySelected: '=',
      property: '@',
      value: '@',
      specialItem: '@'
    },
    link: function(scope) {
      scope.listVisible = false;
      
      if(scope.mySelected === '') {
        scope.isPlaceholder = true;
      } else {
        scope.isPlaceholder = false;
        scope.display = scope.mySelected[scope.property];        
      }

      scope.select = function(item) {
        scope.isPlaceholder = false;        
        scope.mySelected = item;
        scope.display = scope.mySelected[scope.property];        
      };

      scope.isSelected = function(item) {        
        return item[scope.property] === scope.mySelected[scope.property];        
      };

      scope.show = function() {
        scope.listVisible = true;        
      };

      var documentClicked = function(e) {
        let target = angular.element(e.target);        
        let parent = angular.element(target.parent());        

        if ( 
            (!parent.hasClass('selected') && target.hasClass('target-item')) ||
             (parent.hasClass('selected') && target.hasClass('target-item')) ||
             (parent.hasClass('clicked')) ||
             (!parent.hasClass('dropdown-display'))
            ) {          

            scope.$applyAsync(function() {
              scope.listVisible = false;
            });
          } 
        };

      $document.bind('click', documentClicked);

    }
  }
}

angular
  .module('app')
  .directive('dropdown', Dropdown);