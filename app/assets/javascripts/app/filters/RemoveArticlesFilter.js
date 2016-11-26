function removeArticlesFilter() {
    return function(items, bool) {
      var filtered = [];

      items.forEach(function(item) {
        if (item.article === bool) {
          filtered.push(item);
        }
      });

      return Array.from(new Set(filtered));

    }
};

angular
  .module('app')
  .filter('removeArticlesFilter', removeArticlesFilter);