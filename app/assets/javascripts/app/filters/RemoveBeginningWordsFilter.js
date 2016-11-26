function removeBeginningWordsFilter() {
    return function(items, bool) {
      var filtered = [];

      items.forEach(function(item) {
        if (item.begins_with_word === bool) {
          filtered.push(item);
        }
      });

      return Array.from(new Set(filtered));

    }
};

angular
  .module('app')
  .filter('removeBeginningWordsFilter', removeBeginningWordsFilter);