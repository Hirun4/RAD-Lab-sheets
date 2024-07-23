class Library {
    #books = []; // Private array for books

    // Method to add a new book
    addBook(title, author) {
        const newBook = {
            title: title,
            author: author,
            borrowed: false
        };
        this.#books.push(newBook);
    }

    // Method to find a book by title
    findBook(title) {
        for (let i = 0; i < this.#books.length; i++) {
            if (this.#books[i].title === title) {
                return i;
            }
        }
        return -1;
    }

    // Method to borrow a book by title
    borrowBook(title) {
        const bookIndex = this.findBook(title);
        if (bookIndex !== -1 && !this.#books[bookIndex].borrowed) {
            this.#books[bookIndex].borrowed = true;
            return `${title} has been borrowed.`;
        } else if (bookIndex !== -1 && this.#books[bookIndex].borrowed) {
            return `${title} is already borrowed.`;
        } else {
            return `${title} is not available in the library.`;
        }
    }

    // Method to return a borrowed book by title
    returnBook(title) {
        const bookIndex = this.findBook(title);
        if (bookIndex !== -1 && this.#books[bookIndex].borrowed) {
            this.#books[bookIndex].borrowed = false;
            return `${title} has been returned.`;
        } else if (bookIndex !== -1 && !this.#books[bookIndex].borrowed) {
            return `${title} was not borrowed.`;
        } else {
            return `${title} is not available in the library.`;
        }
    }
}

// Example usage
const myLibrary = new Library();
myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald");
myLibrary.addBook("To Kill a Mockingbird", "Harper Lee");

console.log(myLibrary.borrowBook("The Great Gatsby")); // Outputs: The Great Gatsby has been borrowed.
console.log(myLibrary.borrowBook("The Great Gatsby")); // Outputs: The Great Gatsby is already borrowed.
console.log(myLibrary.returnBook("The Great Gatsby")); // Outputs: The Great Gatsby has been returned.
console.log(myLibrary.returnBook("The Great Gatsby")); // Outputs: The Great Gatsby was not borrowed.
console.log(myLibrary.borrowBook("Moby Dick")); // Outputs: Moby Dick is not available in the library.
