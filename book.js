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
function addBookToLibrary(){
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  pages = document.getElementById("pages").value;
  if(document.getElementById("read").checked){
    read = "true"
  }else{
    read = "false"
  }

  if ((title === '') && (author === '') && (pages === '')){
    alert("One of your inputs is blank")
  } else{
    let newBook = new book(title, author, pages, read)
    // when the html form for an new book is submitted, add the book to mylibary,
    myLibrary.push(newBook)
    // hide new book form
    updateLibrary()
  }
}
// Show Each Book in myLibary on webpage

function updateLibrary(){

  let  cardContainer = document.getElementById("newBookCards");

// TODO: // temporary way to make sure the list is updated correctly. Fix later.
  while (cardContainer.firstChild) {
      cardContainer.removeChild(cardContainer.firstChild);
  }

  // create card for each book in myLibrary
  for (index in myLibrary){
    var template = `
     <div class="card"}">
        <div class="card-body">
          <h5 class="card-title" id="book-title"></h5>
          <ul class= "list-group">
            <li class="list-group-item book-element-title">${myLibrary[index].title}</li>
            <li class="list-group-item book-element-author">${myLibrary[index].author}</li>
            <li class="list-group-item book-element-pages">${myLibrary[index].pages}</li>
            <li class="list-group-item book-element-read">${myLibrary[index].read}</li>
          </ul>
          <button type="submit" class="btn btn-primary delete-book" id="deleteBookBtn-${index}">Delete Book</button>
        </div>
      </div>`

    newDiv = document.createElement("DIV")
    newDiv.className = `book-card-${index}`
    cardContainer.appendChild(newDiv)
    newDiv.innerHTML = template;
    }
}

function deleteBook(index){
  myLibrary.splice(index)
  updateLibrary()
}
// Remove book from libra

// Add Button to Change any Book Status to Read

// Optional
