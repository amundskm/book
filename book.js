let myLibrary = [];


// Show new book form
function showBookForm(){
  document.getElementById("newBookForm").style.display = "inline";
  document.getElementById("addNewBookBtn").style.display = "none";
}
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
    read = "True"
  }else{
    read = "False"
  }

  if ((title === '') && (author === '') && (pages === '')){
    alert("One of your inputs is blank")
  } else {
    if(isNaN(pages)){
      alert("Pages must be a number")
    }else {
      let newBook = new book(title, author, pages, read)
      // when the html form for an new book is submitted, add the book to mylibary,
      myLibrary.push(newBook)
      // hide new book form
      updateLibrary()
      document.getElementById("newBookForm").style.display = "none";
      document.getElementById("addNewBookBtn").style.display = "inline";
    }
  }
}
// Show Each Book in myLibary on webpage

function updateLibrary(){

  let  cardContainer = document.getElementById("newBookCards");

// TODO: // temporary way to make sure the list is updated correctly.
// I want to be able to only update a single element
  while (cardContainer.firstChild) {
      cardContainer.removeChild(cardContainer.firstChild);
  }

  // create card for each book in myLibrary
  for (index in myLibrary){
    if (myLibrary[index].read === "False"){
      readBtnText = "I Have Read This Book"
    } else {
      readBtnText = "I Have not Read This Book"
    }
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
          <button type="submit" class="btn btn-primary" onclick="deleteBook(${index})" >Delete Book</button>
          <button type="submit" class="btn btn-primary" id="btn-${index}" onclick="readBook(${index})">${readBtnText}</button>
        </div>
      </div>`

    newDiv = document.createElement("DIV")
    newDiv.className = `book-card-${index}`
    cardContainer.appendChild(newDiv)
    newDiv.innerHTML = template;
    }
}

// Remove book from library
function deleteBook(index){
  myLibrary.splice(index, 1)
  updateLibrary()
}

// Add Button to Change any Book Status to Read

function readBook(index){
  console.log(myLibrary[index].read)
  if(myLibrary[index].read === "True"){
    myLibrary[index].read = "False"
    console.log(myLibrary)
    readBtn = document.getElementById(`btn-${index}`)
    readTxt = document.createTextNode("I Have Not Read This Book")
    readBtn.appendChild(readTxt)
  }else{
    myLibrary[index].read = "True"
    console.log(myLibrary)
    readBtn = document.getElementById(`btn-${index}`)
    readTxt = document.createTextNode("I Have Read This Book")
    readBtn.appendChild(readTxt)
  }
  updateLibrary()
}

// Optional
