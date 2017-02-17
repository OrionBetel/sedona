var formSearch = document.querySelector('.form-search');

window.addEventListener('load', function() {
  formSearch.classList.add('form-search_hidden');
}, false);

document.querySelector('.button_search')
  .addEventListener('click', function() {
    formSearch.classList.toggle('form-search_hidden');
  }, false);
