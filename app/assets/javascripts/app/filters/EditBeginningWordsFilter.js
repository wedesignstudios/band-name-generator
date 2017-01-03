function editBeginningWordsFilter() {
  return function(items, words_to_keep_array) {
    var editted = [];

    items.forEach(function(item) {

      words_to_keep_array.forEach(function(word) {

        if(item.string == word) {
          editted.push(item);
        }      
        
      });

    });


    return Array.from(new Set(editted));
  }
}

angular
  .module('app')
  .filter('editBeginningWordsFilter', editBeginningWordsFilter);