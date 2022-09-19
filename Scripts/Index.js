const bookArray = [];
const bookList = document.getElementById('bookList');

function updateList() {
    bookList.innerHTML = '';
    for(let i = 0 ; i < bookArray.length; i += 1){
        const {
            bookTitle, bookAuthor
        } = bookArray[i]
        const bookString = `<li class="Book">
                            <div class="bookTitle">${bookTitle}</div>
                            <div class="bookAuthor">${bookAuthor}</div>
                            <button type="button" class="removeBook">Remove</button>
                        </li>
        `
        bookList.insertAdjacentHTML('beforeend', bookString);
    }
}

function addBook(){
    const titleInputElement = document.getElementById('titleInput');
    const authorInputElement = document.getElementById('authorInput');
    const bookTitle = titleInputElement.value
    const bookAuthor = authorInputElement.value
    const book = {bookTitle , bookAuthor}
    bookArray.push(book);
    updateList();
    titleInputElement.value = '';
    authorInputElement.value = '';
}

const btnSubmitBook = document.getElementById('submitBook');
btnSubmitBook.addEventListener('click', addBook);

