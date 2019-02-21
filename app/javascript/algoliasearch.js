import algoliasearch from 'algoliasearch'

var client = algoliasearch('5Y225LL9MU', 'b0dbdf5bc526f89d59687ff661a8ee17');
var index = client.initIndex('name');

// index.search('something', { hitsPerPage: 10, page: 0 })
//   .then(function searchDone(content) {
//     console.log(content)
//   })
//   .catch(function searchFailure(err) {
//     console.error(err);
//   });

var searchForm = document.getElementById('search');

export const search = () => {
  searchForm.addEventListener('submit', function(event){
    event.preventDefault();
    var searchInput = document.getElementById('search-input');
    var searchValue = searchInput.value;
    // console.log(Office.algoliasearch(searchValue));
    // // console.log(searchValue);
    // index.search(searchValue, { hitsPerPage: 10, page: 0 })
    // .then(function searchDone(content) {
    //   console.log(content)
    // })
    // .catch(function searchFailure(err) {
    //   console.error(err);
    // });
  });
};


