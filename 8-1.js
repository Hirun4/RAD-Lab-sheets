class Library {
    constructor() {
        this.books = [];
    }

    
    addBook(title, author) {
        const newBook = {
            title: title,
            author: author,
            borrowed: false
        };
        this.books.push(newBook);
    }

    
    findBook(title) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title === title) {
                return i;
            }
        }
        return -1;
    }

    
    borrowBook(title) {
        const bookIndex = this.findBook(title);
        if (bookIndex !== -1 && !this.books[bookIndex].borrowed) {
            this.books[bookIndex].borrowed = true;
            return `${title} has been borrowed.`; //backticks
        } else if (bookIndex !== -1 && this.books[bookIndex].borrowed) {
            return `${title} is already borrowed.`;
        } else {
            return `${title} is not available in the library.`;
        }
    }

   
    returnBook(title) {
        const bookIndex = this.findBook(title);
        if (bookIndex !== -1 && this.books[bookIndex].borrowed) {
            this.books[bookIndex].borrowed = false;
            return `${title} has been returned.`;
        } else if (bookIndex !== -1 && !this.books[bookIndex].borrowed) {
            return `${title} was not borrowed.`;
        } else {
            return `${title} is not available in the library.`;
        }
    }
}


const myLibrary = new Library();
myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald");
myLibrary.addBook("To Kill a Mockingbird", "Harper Lee");

console.log(myLibrary.borrowBook("The Great Gatsby")); 
console.log(myLibrary.borrowBook("The Great Gatsby")); 
console.log(myLibrary.returnBook("The Great Gatsby")); 
console.log(myLibrary.returnBook("The Great Gatsby")); 
console.log(myLibrary.borrowBook("Moby Dick")); 
