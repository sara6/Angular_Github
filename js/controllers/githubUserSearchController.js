githubUserSearch.controller('GithubUserSearchController', ['$resource', function($resource) {
  var self = this;

  var searchResource = $resource('https://api.github.com/search/users');

  self.Search = function(){
    self.searchResult = searchResource.get(
      { q: self.searchTerm }
    );
};
}]);
