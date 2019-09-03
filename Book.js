class Book {
  constructor(title, author, pages, description) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.description = description;
    this.currenPage = 1;
    this.read = false;
  }
  readBook (pageNumber) {
    this.currentPage = pageNumber;
    if (pageNumber > this.pages || pageNumber < 1) {
      console.log('Invalid page number!')
      this.currentPage = "not valid!";
      
    } else if (pageNumber == this.pages) {
      this.read = true;
    } else {
       this.currentPage == pageNumber;
    }
  }
}

export { Book };

