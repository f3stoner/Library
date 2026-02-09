const myLibrary = [];
const dialog = document.getElementById("newBook");
const addButton = document.getElementById("addNew");
const closeButton = document.getElementById("cancel");
const newBook = document.getElementById("addNewBook")
const bookInfoTester = document.querySelector(".bookInfoTester");

addButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

newBook.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("readStatus").value;

    bookInfoTester.textContent = `Captured: ${title}, ${author}, ${pages}, ${read}`
});

function Book(title, author, pages, read) {
    if(!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    
}

document.querySelector(bookCard.textContent(this.info()));