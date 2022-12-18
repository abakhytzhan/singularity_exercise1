class Library {
    constructor(books) {
      this.books = books;
    }
  
    borrowBook(bookName, user) {
      // check if boook exists
      const checkBook = this.books.find((book) => book.name === bookName);
      if (!checkBook) {
          return `We don't have the book: ${bookName}`;
      }
      if (checkBook.borrower) {
        return `The ${checkBook.name} was already borowed`;
      }
      // borrow
      checkBook.borrower = user;
  
      return checkBook;
    }
    returnBook(bookName, user) {
      const checkBook = this.books.find((book) => book.name === bookName);
      if (!checkBook) {
          return `This book is not from our library: ${bookName}`;
  
      } else {
        checkBook.borrower = null;
      }
      
      return checkBook;
    }
  }
  
  class Book {
    constructor(name, price, dueDate, penaltyRate) {
      this.name = name;
      this.price = price;
      this.dueDate = dueDate;
      this.penaltyRate = penaltyRate;
      this.borrower = null;
    }
  }
  
  class User {
    constructor(name) {
      this.name = name;
      this.numBooks = 0;
      this.debt = 0;
    }
    
    takeBook(book) {
      const res = lib.borrowBook(book.name, this.name);
      if (res instanceof Book) {
        this.numBooks++;
        this.debt += book.price;
      } else {
        console.error(res);
      }  
    }
    bringBook(book) {
      const res = lib.returnBook(book.name, this.name);
      if (res instanceof Book) {
        if (this.numBooks > 0) {
          this.numBooks--;
        }  
      } else {
        console.error(res);
      }  
  
    }
  
  }
  
  const hp1 = new Book("HP1", 10, 5, 10);
  const hp2 = new Book("HP2", 10, 7, 12);
  const hp3 = new Book("HP3", 10, 5, 13);
  const hp4 = new Book("HP4", 10, 6, 15);
  const hp5 = new Book("HP5", 10, 8, 9);
  
  const user1 = new User("user1");
  const user2 = new User("user2");
  const user3 = new User("user3");
  
  const lib = new Library([hp1, hp2, hp3, hp4, hp5]);
  
  user1.takeBook(hp2);
  user1.takeBook(hp3);
  user2.takeBook(hp1);
  user1.bringBook(hp3);
  
  console.log(user1);
  console.log(user2);
  console.log(lib);