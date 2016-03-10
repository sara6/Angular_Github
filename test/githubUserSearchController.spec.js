describe('GithubUserSearchController', function() {

  var ctrl;

  beforeEach(function(){
    module('GithubUserSearch');
    inject(function($controller) {
      ctrl = $controller('GithubUserSearchController');
    });
  });

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('when searching for a user', function() {
    var items = [
      {
        "login":"sarah crawley",
        "avator_url":"https://avatars0.githubusercontent.com/u/14345034?v=3&s=100",
        "html_url":"https://github.com/sara6"
      },
      {
        "login":"constantin kalinin",
        "avator_url":"https://avatars1.githubusercontent.com/u/16108959?v=3&s=100",
        "html_url":"https://github.com/tishayaem"
      }
    ];
    
      it('displays search results', function() {
        ctrl.searchTerm = 'hello';
        ctrl.doSearch();
        expect(ctrl.searchResult.items).toEqual(items);
        });
    });

});
