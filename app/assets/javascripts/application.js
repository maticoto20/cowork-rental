//= require rails-ujs
//= require_tree .
//= require algolia/v3/algoliasearch.min

// var client = algoliasearch('5Y225LL9MU', 'b0dbdf5bc526f89d59687ff661a8ee17');
// var index = client.initIndex('Office');
// var searchForm = document.getElementById('search');

// searchForm.addEventListener('submit', function(event){
//   event.preventDefault();
//   var searchInput = document.getElementById('search-input');
//   var searchValue = searchInput.value;

//   index.search(searchValue, { hitsPerPage: 10, page: 0 })
//   .then(function searchDone(content) {
//     content.hits.map((hit) => {
//       console.log(hit.name)
//     })
//   })
//   .catch(function searchFailure(err) {
//     console.error(err);
//   });
// });
