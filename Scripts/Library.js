import Book from './Book.js';

export default class Library {
  constructor() {
    this.books = [];
  }

  addBook() {
    const titleInputElement = document.getElementById('titleInput');
    const authorInputElement = document.getElementById('authorInput');
    const bookTitle = titleInputElement.value;
    const bookAuthor = authorInputElement.value;
    titleInputElement.value = '';
    authorInputElement.value = '';

    const book = new Book(bookTitle, bookAuthor);
    this.books.push(book);
    this.updateList();
  }

  removeBook(index) {
    this.books.splice(index, 1);
  }

  updateList() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    for (let i = 0; i < this.books.length; i += 1) {
      const {
        bookTitle, bookAuthor,
      } = this.books[i];
      const bookString = `<li class="Book">
                            <div class="bookTitle">${bookTitle}</div>
                            <div class="bookAuthor">${bookAuthor}</div>
                            <button type="button" class="removeBook" onclick="Lib.removeBook(${i})">Remove</button>
                        </li>
        `;
      bookList.insertAdjacentHTML('beforeend', bookString);
    }
    localStorage.setItem('Library', JSON.stringify(this));
  }
}