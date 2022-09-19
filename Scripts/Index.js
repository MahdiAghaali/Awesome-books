let bookArray = [];
const localStore = JSON.parse(localStorage.getItem('Bookstore'));

if (localStore) {
  bookArray = localStore.bookArray;
} else {
  bookArray = [];
}

const bookList = document.getElementById('bookList');
// Populate the DOM

function updateList() {
  bookList.innerHTML = '';
  for (let i = 0; i < bookArray.length; i += 1) {
    const {
      bookTitle, bookAuthor,
    } = bookArray[i];
    const bookString = `<li class="Book">
                            <div class="bookTitle">${bookTitle}</div>
                            <div class="bookAuthor">${bookAuthor}</div>
                            <button type="button" id="${i}" class="removeBook" onclick="remBtn(${i})">Remove</button>
                        </li>
        `;
    bookList.insertAdjacentHTML('beforeend', bookString);
  }
  const object = {};
  object.bookArray = bookArray;
  localStorage.setItem('Bookstore', JSON.stringify(object));
}

updateList();

function addBook() {
  const titleInputElement = document.getElementById('titleInput');
  const authorInputElement = document.getElementById('authorInput');
  const bookTitle = titleInputElement.value;
  const bookAuthor = authorInputElement.value;
  const book = { bookTitle, bookAuthor };
  bookArray.push(book);
  updateList();

  // remEvent();
  titleInputElement.value = '';
  authorInputElement.value = '';
}

const btnSubmitBook = document.getElementById('submitBook');
btnSubmitBook.addEventListener('click', addBook);

// Remove Book
// eslint-disable-next-line no-unused-vars
const remBtn = (a) => {
  // Remove item from Arrey
  bookArray.splice(a, 1);
  updateList();
};
