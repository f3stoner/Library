let myLibrary = [];
const dialog = document.getElementById("newBook");
const addButton = document.getElementById("addNew");
const closeButton = document.getElementById("cancel");
const newBookForm = document.getElementById("addNewBook")
const bookCards = document.getElementById("bookCards");


addButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
    newBookForm.reset();
});

newBookForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("readStatus").value;
    
    addBookToLibrary(title, author, pages, read);
    dialog.close();
    newBookForm.reset();
});

function Book(title, author, pages, read) {
    if(!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    renderLibrary();
}

function renderLibrary() {
    clearLibrary();
    for (const book of myLibrary) {
        const newBookDiv = document.createElement("div");
        newBookDiv.dataset.id = book.id;
        newBookDiv.className = "book";
        const bookTitle = document.createElement("div");
        bookTitle.className = "bookTitle";
        newBookDiv.append(bookTitle);
        bookTitle.textContent = book.title;
        const bookContent = document.createElement("div");
        bookContent.className = "bookContent";
        newBookDiv.append(bookContent);
        bookContent.textContent = `By: ${book.author} Pages: ${book.pages} Read Status: ${book.read}`;
        const bookActions = document.createElement("div");
        bookActions.className = "bookActions";
        newBookDiv.append(bookActions);
        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "Toggle Read Status";
        toggleBtn.className = "toggle";
        toggleBtn.addEventListener("click", function () {
            toggleRead(book.id);
        })
        bookActions.append(toggleBtn);
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete Entry";
        deleteBtn.className = "delete";
        deleteBtn.addEventListener("click", function(){
            deleteEntry(book.id);
        })
        bookActions.append(deleteBtn);
        bookCards.append(newBookDiv);
    }
}

function clearLibrary() {
    while (bookCards.firstChild){
    bookCards.removeChild(bookCards.firstChild);
    }
}

function toggleRead(bookId) {

}

function deleteEntry(bookId) {
   let newLibrary = [];
   for (const book of myLibrary) {
    if (book.id !== bookId){
        newLibrary.push(book);
    }
    myLibrary = newLibrary;
   }
   renderLibrary();
}


