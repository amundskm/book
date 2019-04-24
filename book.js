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

// Show Each Book in myLibary

// Add Button to Remove any Book in myLibary

// Add Button to Change any Book Status to Read

// Optional
