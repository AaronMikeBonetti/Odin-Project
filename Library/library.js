const dialog = document.querySelector(".book-modal-container");
const showButton = document.querySelector(".add-book-btn");
const closeButton = document.querySelector(".book-modal-container button");
const bookContainer = document.querySelector(".book-card-container");

let bookLibrary = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    read: false,
    bookId: `${crypto.randomUUID()}`,
  },
];

const bookModalDisplay = () => {
  if (!dialog.open) {
    dialog.showModal();
  } else {
    dialog.close();
  }
};

const updateLibrary = () => {
  bookContainer.innerHTML = "";
  bookLibrary.forEach((book) => {
    const bookCard = document.createElement("li");
    bookCard.innerHTML = `
      <p class="material-icons icon-book">book</p>
      <p class="book-title">${book.title}</p>
      <p class="book-author">${book.author}</p>
      <p class="book-pages">${book.pages}</p>
      <p class="book-read">Read:${book.read ? "Yes" : "No"}</p>
      <button class="remove-book-btn" onclick="removeBook('${
        book.bookId
      }')">Remove</button>
    `;
    bookContainer.appendChild(bookCard);
  });
};

updateLibrary();

const addBook = (event) => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = false;
  const bookId = crypto.randomUUID();

  if (!title || !author || !pages || pages <= 0) {
    alert("Please fill out all fields with valid data.");
    return;
  } else {
    const book = { title, author, pages, read, bookId };
    dialog.close();
    bookLibrary.push(book);
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    updateLibrary();
  }
};

const removeBook = (bookId) => {
  bookLibrary = bookLibrary.filter((book) => book.bookId !== bookId);
  updateLibrary();
};

const toggleReadStatus = (bookId) => {
  const book = bookLibrary.find((book) => book.bookId === bookId);
  if (book) {
    book.read = !book.read;
    updateLibrary();
  }
};

const initLibrary = () => {
  updateLibrary();
};

document.addEventListener("DOMContentLoaded", initLibrary);
