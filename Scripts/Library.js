import Book from './Book.js';
import bookArray from './bookArray.js';

export default class Library {
  constructor() {}

  addToLocalStorage = () => localStorage.setItem('Library', JSON.stringify(libro))

  addBook() {
    const titleInputElement = document.getElementById('titleInput');
    const authorInputElement = document.getElementById('authorInput');
    const bookTitle = titleInputElement.value;
    const bookAuthor = authorInputElement.value;
    titleInputElement.value = '';
    authorInputElement.value = '';

    const book = new Book(bookTitle, bookAuthor);
    console.log(book)
    const localStore = JSON.parse(localStorage.getItem('Library'));
    console.log(localStore)
    if (localStore) {
    bookArray.push(...localStore);
    } else {
      bookArray;
    }
    console.log(localStore)
    bookArray.push(book);
    console.log(bookArray)
    const showBook = () => {
    bookList.innerHTML += `<li class="Book">
                            <div class="bookTitle">${bookTitle}</div>
                            <div class="bookAuthor">${bookAuthor}</div>
                            <button type="button" class="removeBook" onclick="Lib.removeBook(${bookArray.length})">Remove</button>
                        </li>`
    }
    showBook()
      localStorage.setItem('Library', JSON.stringify(bookArray))
    //this.addToLocalStorage


  }

  removeBook(index) {
    bookArray.splice(index, 1);
    localStorage.setItem('Library', JSON.stringify(bookArray));
  }

    updateList() {
    const bookList = document.getElementById('bookList');
      bookList.innerHTML = '';
    const localStore = JSON.parse(localStorage.getItem('Library'))
    if (localStore) {
    bookArray.push(...localStore);
    } else {
      bookArray;
    }

    for (let i = 0; i < bookArray.length; i += 1) {
      /* const {
        bookTitle, bookAuthor,
      } = this.books[i];*/
      const bookString = `<li class="Book">
                            <div class="bookTitle">${bookArray[i].Title}</div>
                            <div class="bookAuthor">${bookArray[i].Author}</div>
                            <button type="button" class="removeBook" onclick="Lib.removeBook(${i})">Remove</button>
                        </li>
        `;
      bookList.insertAdjacentHTML('beforeend', bookString);
    }
    localStorage.setItem('Library', JSON.stringify(bookArray));
  }

  }
