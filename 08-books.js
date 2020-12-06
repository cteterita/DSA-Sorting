// 8. Sorting books
// Imagine that I gave you 20 books to sort in alphabetical order. Express this as an algorithm and then implement your algorithm.

let books = ['L','Z','Hello!','A','Star Wars'];

// Given there are only 20, I would just put them on a bookshelf one at a time. I would place each on between the appropriate books, spreading them as necessary. Basically an array splice. This would not be an efficient algorithm, but maps to real-world sorting.

function sort(books) {
    let sortedBooks = [books[0]];
    for (let i = 1; i < books.length; i++) {
        let insertAt = sortedBooks.length;
        for (let j=0; j < books.length; j++) {
            if (sortedBooks[j] > books[i]) {
                insertAt = j;
                break;
            }
        }
        sortedBooks.splice(insertAt,0,books[i]);
    }
    return sortedBooks;
}

console.log(sort(books));