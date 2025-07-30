const dialog = document.querySelector(".book-modal-container");
const showButton = document.querySelector(".add-book-btn");
const closeButton = document.querySelector(".book-modal-container button");
let bookLibrary = [];

bookModalDisplay = () => {
  if (!dialog.open) {
    dialog.showModal();
  } else {
    dialog.close();
  }
};

addBook = (event) => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;

  if (title && author && pages) {
    const book = { title, author, pages, read };
    console.log("Book added:", book);
    dialog.close();
    bookLibrary.push(book);
  } else {
    alert("Please fill in all fields.");
  }
}
