import Library from './Library.js';
import bookArray from './bookArray.js';

const Lib = new Library();

Lib.updateList();

const btnSubmitBook = document.getElementById('submitBook');
btnSubmitBook.addEventListener('click', Lib.addBook);
