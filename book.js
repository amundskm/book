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
  let newBook = new book(title, author, pages, read)
  // when the html form for an new book is submitted, add the book to mylibary,
  myLibrary.push(newBook);
  // hide new book form
}
// Show Each Book in myLibary on webpage

function updateLibrary(){

  cardContainer = document.querySelector("#newBookCards");
  console.log(myLibrary)
  for (index in myLibrary){
    var template = `
     <div class="card">
        <div class="card-body">
          <h5 class="card-title" id="book-title"></h5>
          <ul class= "list-group">
            <li class="list-group-item book-element-title">${myLibrary[index].title}</li>
            <li class="list-group-item book-element-author">${myLibrary[index].author}</li>
            <li class="list-group-item book-element-pages">${myLibrary[index].pages}</li>
            <li class="list-group-item book-element-read">${myLibrary[index].read}</li>
          </ul>
          <button type="submit" class="btn btn-primary" id="deleteBookBtn">Delete Book</button>
        </div>
      </div>`


    newDiv = document.createElement("DIV")
    newDiv.className = "book-card"
    cardContainer.appendChild(newDiv)
    newDiv.innerHTML = template;
  }
}
// Add Button to Remove any Book in myLibary

// Add Button to Change any Book Status to Read

// Optional
addBookToLibrary("The Hobbit", "J.R.R Tolkien", 299, "True");
addBookToLibrary("The Fellowship of the Ring", "J.R.R Tolkien", 564, "True");
updateLibrary()
