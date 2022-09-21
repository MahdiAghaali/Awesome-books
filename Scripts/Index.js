import Library from './Library.js';
import Book from './Book.js';

const Lib = new Library();
function getBook() {
  const titleInputElement = document.getElementById('titleInput');
  const authorInputElement = document.getElementById('authorInput');
  const bookTitle = titleInputElement.value;
  const bookAuthor = authorInputElement.value;
  titleInputElement.value = '';
  authorInputElement.value = '';
  const book = new Book(bookTitle, bookAuthor);
  Lib.addBook(book);
}

const btnSubmitBook = document.getElementById('submitBook');
btnSubmitBook.addEventListener('click', getBook);
