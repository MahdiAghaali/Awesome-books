import Library from './Library.js';

const Lib = new Library();
const localStore = JSON.parse(localStorage.getItem('Library'));

if (localStore) {
  Lib.books = localStore.books;
}

Lib.updateList();

const btnSubmitBook = document.getElementById('submitBook');
btnSubmitBook.addEventListener('click', Lib.addBook);
