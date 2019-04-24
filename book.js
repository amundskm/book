let myLibrary = [];

// Create a New Book
function book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

  if(read == false){
    this.info =  title + 'by ' + author + ', ' + pages + ' pages, not read yet'
  } else {
    this.info =  title + 'by ' + author + ', ' + pages + ' pages, has been read'
  }

}

// Add Book to myLibrary
  // event listener on addBook button, show form.
function addBookToLibrary(title, author, pages, read){
  // when the html form for an new book is submitted, add the book to mylibary,
  myLibary.push(book(title, author, pages, read))
  // hide new book form
}
// Show Each Book in myLibary on webpage

function updateLibrary(){

  cardContainer = document.querySelector(#newBookCards)

  for (book in myLibrary){
    let template = '
      <div class="card">
        <div class="card-body">
          <h5 class="card-title" id="book-title"></h5>
          <ul class= "list-group">
            <li class="list-group-item book-element-title">#{book.title}</li>
            <li class="list-group-item book-element-author">#{book.author}</li>
            <li class="list-group-item book-element-pages">#{book.pages}</li>
            <li class="list-group-item book-element-read">#{book.read}</li>
        </div>
      </div>
    ';
    cardContainer.appendChild(template)
  }

}
// Add Button to Remove any Book in myLibary

// Add Button to Change any Book Status to Read

// Optional
